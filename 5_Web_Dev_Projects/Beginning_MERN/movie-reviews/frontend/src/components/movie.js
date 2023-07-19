import React, { useState, useEffect } from 'react'

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Media from 'react-bootstrap/Media'

import MovieDataService from "../services/movies"
import { Link } from 'react-router-dom'
import moment from 'moment'


const Movie = props => {
    const [movie, setMovie] = useState({
        id: null,
        title: "",
        rated: "",
        reviews: []
    })
    const getMovie = id => {
        MovieDataService.get(id)
            .then(response => {
                setMovie(response.data)
                console.log(response.data)
            })
            .catch(e => {
                console.log(e)
            })
    }
    useEffect(() => {
        getMovie(props.match.params.id)
    }, [props.match.params.id])

    const deleteReview = (reviewId, index) => {
        MovieDataService.deleteReview(reviewId, props.user.id)
            .then(response => {
                setMovie((currState) => {
                    currState.reviews.splice(index, 1)
                    return ({
                        ...currState
                    })
                })
            })
            .then(response => {
                setMovie((prevState) => {
                    prevState.reviews.splice(index, 1)
                    return ({
                        ...prevState
                    })
                })
            })
            .catch(e => {
                console.log(e)
            })
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Image src={movie.poster + "/100px250"} fluid />
                    </Col>
                    <Col>
                        <Card>
                            <Card.Header as="h5">{movie.title}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {movie.plot}
                                </Card.Text>
                                {props.user &&
                                    <Link to={"/movies/" + props.match.params.id + "/review"}>
                                        Add Review
                                    </Link>
                                }
                            </Card.Body>
                        </Card>
                        <br></br>
                        <h2>Reviews</h2>
                        <br></br>
                        {/* We access the reviews array and using map, for each review, 
                            render a Media component from Reactbootstrap */}
                        {movie.reviews.map((review, index) => {
                            return (
                                <Media key={index}>
                                    <Media.Body>
                                        <h5>{review.name + " reviewed on " + moment(review.date).format("Do MMMM YYYY")}</h5>
                                        <p>{review.review}</p>
                                        {/* A user can only delete reviews they have posted. 
                                            They can’t delete/edit other’s reviews. 
                                            Thus, we first  check to see if a user is logged in. 
                                            And only if the logged in user id is the same as
                                            the review user id, do we render the Edit/Delete buttons*/}
                                        {props.user && props.user.id === review.user_id &&
                                            <Row>
                                                <Col><Link to={{
                                                    pathname: "/movies/" +
                                                        props.match.params.id +
                                                        "/review",
                                                    state: { currentReview: review }
                                                }}>Edit</Link>
                                                </Col>
                                                <Col><Button variant="link" onClick={() => deleteReview(review._id, index)}>
                                                    Delete
                                                </Button>
                                                </Col>
                                            </Row>
                                        }
                                    </Media.Body>
                                </Media>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Movie;