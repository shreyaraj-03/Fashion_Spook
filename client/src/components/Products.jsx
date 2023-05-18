import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import axios from 'axios'


const Container= styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
`
const Products = ({cat,filter,sort}) => 
{
  // console.log(cat,filter,sort);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState({});

  // useEffect(() =>{
  //   // console.log("gvygvhb");
  //   const getProducts = async () =>{
  //     console.log("gvygvhb");
  //     try{
  //       // const res = await axios.get("http:localhost:500/api/products");
  //       // console.log(res);
  //       console.log("gvygvhb");
  //     }
  //     catch(err)
  //     {
  //       console.log("hi");
  //     }
  //   }
  // }, [cat])


  return (
    <Container>
        {popularProducts.map((items) => (
            <Product item={items} key={items.id}/>
        ))}
    </Container>
  )
}

export default Products