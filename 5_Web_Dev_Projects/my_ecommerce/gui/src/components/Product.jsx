import React from 'react'
import styled from 'styled-components';
import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
`;

const Container = styled.div`
    flex: 1;
    margin: 95px 5px 5px 5px;
    /* margin-top: 95px; */
    min-width: 280px;
    height: 350px;
    display: flex;
    align-content: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info} {
        opacity: 1;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    background-color: white;
    cursor: pointer;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.2);
    }
`;

const Product = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Image src={item.image} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <Link to={`/product/${item._id}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <SearchOutlined />
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product