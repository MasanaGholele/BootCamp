import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 35px;
  background-color: coral;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  `;

const Announcement = () => {
  return (
    <Container>
      Super Deal! Free Shipping on Orders Over R1000!
    </Container>
  );
};

export default Announcement;
