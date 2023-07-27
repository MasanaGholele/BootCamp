import { Description, Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components';
import { mobile } from "../responsive"
import { subscribe } from '../redux/apiCalls';

const Container = styled.div`
    height: 30vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;

const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center" })};
`;

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "80%" })};
`;

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: coral;
    color: white;
`;

const Status = styled.div`
    font-size: 24px;
    font-weight: 700;
`;

const Newsletter = () => {
    const [email, setEmail] = React.useState("");
    const [signupStatus, setSignupStatus] = React.useState(null);

    const handleClick = async (e) => {
        e.preventDefault();
        const res = await subscribe(email);   
        if (res.success) 
            setEmail("");        
        setSignupStatus(res.message);
    }

    return (
        <Container>            
            <Title>Newsletter</Title>
            <Desc>Never miss out on new arrivals and updates on your absolute favourites!</Desc>
            <InputContainer>
                <Input value={email} type='email' placeholder='Please enter your email address' onChange={(e) => setEmail(e.target.value)} />
                <Button onClick={handleClick}>
                    <Send />
                </Button>
            </InputContainer>
            <Status>
                <br/>
                {signupStatus && signupStatus}
            </Status>
        </Container>
    )
}

export default Newsletter