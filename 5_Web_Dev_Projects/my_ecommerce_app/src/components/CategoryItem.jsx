import React from 'react'

import styled from "styled-components"
import { mobile } from "../responsive"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    ${mobile({ height: "30vh" })};
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    font-size: 56px;
`;

const Button = styled.button`
    border: 4px white solid;
    padding: 10px;
    background-color: transparent;
    color: white;
    font-weight: bold;
    font-size: 24px;
    cursor: pointer;

    &:hover {
        font-size: 36px;
    }
`;

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Link to={`/products/${item.category}`}>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Link>
        </Container>
    )
}

export default CategoryItem