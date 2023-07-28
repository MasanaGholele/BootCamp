import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from "../responsive";
import { useSelector } from 'react-redux';
import { Link } from "@material-ui/core";

import { useDispatch } from "react-redux";
import { logout } from "../redux/apiCalls";
import { clearCart } from '../redux/cartRedux';

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })};
    border-bottom: solid #d3d3d3 1px;
    position: fixed; 
    top: 35px; 
    width: 100%;
    overflow: hidden; 
    z-index: 100;
    background-color: white;
`;


const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}    ;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })};
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })};
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })};
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })};
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })};    
`;


const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity);
    const user = useSelector(state => state?.user?.currentUser?.others);
    const dispatch = useDispatch();

    const logoutButton = () => {
        console.log("Logging out...")
        logout(dispatch);
        dispatch(clearCart());
    }

    return (
        <Container >
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="search" />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>

                <Link href="/" style={{ textDecoration: 'none', color: '#000' }}><Center><Logo>Masana Kids Ltd.</Logo></Center></Link>
                <Right>
                    {
                        user ?
                            (
                                <Wrapper>
                                    <MenuItem>{`Hello, ${user.username}`}</MenuItem>
                                    <MenuItem onClick={() => logoutButton()}>Logout</MenuItem>
                                </Wrapper>
                            )
                            :
                            (
                                <Wrapper>
                                    <MenuItem><Link href="/login" underline="hover" color="black">SIGN IN</Link></MenuItem>
                                    <MenuItem><Link href="/register" underline="hover" color="black">REGISTER</Link></MenuItem>
                                </Wrapper>
                            )
                    }

                    <Link href="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar

