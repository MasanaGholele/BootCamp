import React, { Component } from 'react';
import axios from 'axios'; // 1. npm install axios
import ReactLoading from 'react-loading';
import { Card, Form, Button } from 'react-bootstrap';

class GitHub extends Component {
    constructor() {
        super();
        this.state = {
            data: [], // 2. declare and initialize an empty data array in our state 
            searchTerm: '',
            // 3. we initialize isLoading to false at first since no call to GitHub is made at the beginning
            isLoading: false 
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            isLoading: true // 4. Once the user submits the form, we set isLoading to true just before the call to getGitHubData to show the loading icon.
        })
        this.getGitHubData(this.state.searchTerm);
    }
    handleChange(e) {
        this.setState({ searchTerm: e.target.value });
    }


    // 6. since Axios is a promise based http
    // call the get method that will return GitHub data from our API endpoint
    getGitHubData(_searchTerm) {
        axios.get("https://api.github.com/search/users?q=" + _searchTerm)
            .then(res => { // 7. then subscribe to our promise returned from getGitHubData and assign the returned result to data array
                this.setState({
                    isLoading: false, //5.Once we get notified of results from our GitHub request, we set isLoading to false in getGitHubData to hide the loading icon.

                    data: res.data.items // 8. assign it with data.items of the users item array 
                })
                console.log(res.data.items);
            });
    }
    render() {  
        const listUsers = this.state.data.map((user) => // 10. We use map to repeat the media object for each user data we get from GitHub.
            // // 9. to render our GitHub user data nicely we use the react-bootstrap Card Object component
            <Card key={user.id}> 
                <a href={user.html_url}>
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src={user.avatar_url}
                        alt="Generic placeholder"
                    />
                </a>
                <Card.Body>
                    <h5>Login: {user.login}</h5>
                    <p>Id: {user.id}</p>
                </Card.Body>
            </Card>
        );
        return (
            <div>
                <Form inline onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formInlineName">
                        <Form.Control
                            type="text"
                            value={this.state.searchTerm}
                            placeholder="Enter Search Term"
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    {' '}
                    <Button type="submit">
                        Search
                    </Button>
                </Form>
                <h3>GitHub Users Results</h3>
                {this.state.isLoading &&
                    //Install the react-loading library  then add the loading icon
                    <ReactLoading type="spinningBubbles" color="#444" />
                }
                {listUsers}
            </div>
        );
    }
}

export default GitHub;

// App.js