import { Facebook, Instagram, MailOutline, PhoneInTalk, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container= styled.div`
    display:flex;
`;

const Left= styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding: 20px;
`;

const Logo = styled.h1`

`;

const Desc = styled.p`
    margin:20px;
`;

const SocialContainer = styled.div`
    display:flex;
`;

const ContactItem = styled.div`
    display:flex;
    margin-bottom:10px;
    align-items: center;

`;

const Payment = styled.img`
    width:50%;
`;

const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color: #${props => props.color};
    align-items:center;
    justify-content:center;
    display: flex;
    margin-right:20px;
`;

const Center= styled.div`
    flex:1;
    padding:20px;
`;

const Title= styled.h3`
    margin-bottom:30px;
`;

const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`;

const ListItems =styled.li`
    width:50%;
    margin-bottom:10px;
`;

const Right= styled.div`
    flex:1;
    padding:20px;
`;

const Footer = () => {
  return (
    <Container>
       <Left>
            <Logo>Fashion Spook</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Blanditiis laboriosam nam cupiditate, aspernatur ullam 
                adipisci quo magnam. Vitae odio assumenda ratione, saepe, 
                consequatur tenetur atque aspernatur sit ab eligendi quis.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
       </Left>
       <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItems>Home</ListItems>
                <ListItems>Cart</ListItems>
                <ListItems>Man Fashion</ListItems>
                <ListItems>Woman Fashion</ListItems>
                <ListItems>Accessories</ListItems>
                <ListItems>My Account</ListItems>
                <ListItems>Order Tracking</ListItems>
                <ListItems>Wishlist</ListItems>
                <ListItems>Terms</ListItems>
            </List>
       </Center>
       <Right>

            <Title>Contact</Title>
            <ContactItem><Room style ={{marginRight:"10px"}}/>Ward No.9, Farrukh Nagar,Gurgaon,Haryana.</ContactItem>
            <ContactItem><PhoneInTalk style ={{marginRight:"10px"}}/> +1 239 45 67 </ContactItem>
            <ContactItem><MailOutline style ={{marginRight:"10px"}}/> contact@harshu.com</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
       </Right>
    </Container>
  )
}

export default Footer
