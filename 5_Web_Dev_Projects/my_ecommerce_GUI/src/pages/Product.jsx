import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

const Container = styled.div`
    margin-top: 45px;    
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection:"column" })};
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: contain;
    ${mobile({ height: "40vh" })};
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })};
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
   font-weight: 100; 
   font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })};
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
    background-color: white;
    border-color: darkgray;
`;

const FilterSizeOption = styled.option`
    
`;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    margin-left: 25px;    
`;

const Amount = styled.span`
    width: 40px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;    
    font-size: 24px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 800;
    margin-right: 15px;
    font-size: 16px;

    &:hover{
        background-color: #f8f4f4;
    }
`;


const Product = () => {
    return (
      <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
          <ImgContainer>
            {/* <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" /> */}
            <Image src="https://img.freepik.com/free-photo/full-shot-girl-holding-backpack_23-2149067118.jpg"/>
          </ImgContainer>
          <InfoContainer>
            <Title>Girls shorts and top set</Title>
            <Desc>
              Great outdoor outfit for your active little girl!
            </Desc>
            <Price>R 325</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black" />
                <FilterColor color="white" />
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>2-3 yrs</FilterSizeOption>
                  <FilterSizeOption>3-4 yrs</FilterSizeOption>
                  <FilterSizeOption>4-5 yrs</FilterSizeOption>
                  <FilterSizeOption>5-6 yrs</FilterSizeOption>
                  <FilterSizeOption>6-7 yrs</FilterSizeOption>
                  <FilterSizeOption>7-8 yrs</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove />
                <Amount>1</Amount>
                <Add />
              </AmountContainer>
              <Button>ADD TO CART</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
      </Container>
    );
  };
  
  export default Product;