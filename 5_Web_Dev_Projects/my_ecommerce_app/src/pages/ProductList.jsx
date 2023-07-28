import React from 'react'
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { mobile } from "../responsive"
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

const Container = styled.div`
  
`;  

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  background-color: white;
  border: 1px solid darkgray;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option`

`;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>2-3 yrs</Option>
             <Option>3-4 yrs</Option>
             <Option>4-5 yrs</Option>
             <Option>5-6 yrs</Option>
             <Option>6-7 yrs</Option>
             <Option>7-8 yrs</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;




// const ProductList = () => {
//   const location = useLocation();
//   const cat = location.pathname.split("/")[2];
//   const [filters, setFilters] = React.useState({});
//   const [sort, setSort] = React.useState("newest");

//   const handleFilters = (e) => {
//     const value = e.target.value;
//     const filterName = e.target.name;


//     setFilters({
//       ...filters,
//       [filterName]: value
//     })

//   };

//   return (
//     <Container>
//       <Navbar />
//       <Announcement />
//       <Title>{cat}</Title>
//       <FilterContainer>
//         <Filter>
//           <FilterText>Filter Products:</FilterText>

//           <Select name="color" onChange={handleFilters}>
//             <Option disabled selected>
//               Color
//             </Option>
//             <Option>White</Option>
//             <Option>Black</Option>
//             <Option>Red</Option>
//             <Option>Blue</Option>
//             <Option>Yellow</Option>
//             <Option>Green</Option>
//           </Select>

//           <Select name="size" onChange={handleFilters}>
//             <Option disabled selected>
//               Size
//             </Option>
//             <Option>2-3 yrs</Option>
//             <Option>3-4 yrs</Option>
//             <Option>4-5 yrs</Option>
//             <Option>5-6 yrs</Option>
//             <Option>6-7 yrs</Option>
//             <Option>7-8 yrs</Option>
//           </Select>
//         </Filter>

//         <Filter>

//           <FilterText>Sort Products:</FilterText>

//           <Select onChange={(e) => setSort(e.target.value)} >
//             <Option value="newest" selected>Latest</Option>
//             <Option value="asc" >Price (asc)</Option>
//             <Option value="desc" >Price (desc)</Option>
//           </Select>
//         </Filter>
//       </FilterContainer>

//       <Products cat={cat} filters={filters} sort={sort} />
//       <Newsletter />
//       <Footer />
//     </Container>
//   )
// }

// export default ProductList