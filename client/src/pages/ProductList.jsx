import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';

const Container = styled.div`

`;

const FilterContainer = styled.div`
    justify-content: space-between;
    display:flex;
`;

const Title = styled.h1`
    margin:20px;
`;

const Filter= styled.div`
    margin:20px;
`;

const FilterText = styled.span`
    font-size:20px;
    font-weight:600;
    margin-right:20px;
`;

const Select = styled.select`
    padding 10px;
    margin-right:20px;

`;
const Option = styled.option``;

const ProductList = () => {
    const location = useLocation();
    // console.log(location.pathname.split("/")[2]);
    const cat = location.pathname.split("/")[2];
    const [filter,setFilters] = useState({});
    const [sort,setSort]= useState("newest");
    const handleFilters =(e)=>{
        const value= e.target.value;
        setFilters({
            ...filter,
            [e.target.name]: value,
        });
    };

    console.log(filter);
  return (
    <Container>
      <Navbar />
      <Announcement/>
      <Title>Dresses</Title>
      <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select name ="color" onChange={handleFilters}>
                    <Option disabled>
                        Color
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Neon</Option>
                    <Option>Gray</Option>
                    <Option>Crimson</Option>
                    <Option>Yellow</Option>
                    <Option>Blue</Option>
                </Select>
                <Select name ="size" onChange={handleFilters}>
                    <Option disabled selected>
                        Size
                    </Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                    <Option>XXXL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select onChange={e => setSort(e.target.value)}>
                    <Option value="newest">Newest</Option>
                    <Option value="asc">Price (asc)</Option>
                    <Option value="desc">Price (desc)</Option>
                </Select>
            </Filter>
      </FilterContainer>
      <Products cat={cat} filter={filter} sort={sort}/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList
