import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin: 3px;
  flex: 1;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  align-item: center;
`;

const Info = styled.div`
  position: absolute;
  widht: 100%;
  height: 100%;
  top: 0;
  left: 0;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  font-weight: 600;
  width: 100px;
  color: gray;
  cursor: pointer;
`;
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
