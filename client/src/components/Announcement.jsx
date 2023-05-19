import React from "react";
import styled from "styled-components";

const Container= styled.div`
height:30px;
background:teal;
color: white;
padding:5px;
display:flex;
text-align:center;
justify-content:center;
font-size:14px; 
font-weight:bold;
`

const Announcement = () => {
  return <Container>This is a big deal of the day.</Container>;
};

export default Announcement;
