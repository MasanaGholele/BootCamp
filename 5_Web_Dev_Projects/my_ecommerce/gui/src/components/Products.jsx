import React from 'react'
import { useEffect, useState } from 'react'
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat,filters,sort}) => {
  const [Products,setProducts] = React.useState([]);
const [filteredProducts,setFilteredProducts] = React.useState([]);

useEffect(()=>{
const getProducts = async () => {
  try{
const res = await axios.get(
  cat? `http://localhost:5000/api/products?category=${cat}`
  : "http://localhost:5000/api/products");
  setProducts(res.data);
  console.log(res)
  }catch(err){}
} 
getProducts()
},[cat])

return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
