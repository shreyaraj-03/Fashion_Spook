import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight:300;
    text-align:center;
`;

const Top = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px;
`;

const TopButton = styled.button`
    font-weight:600;
    padding:10px;
    cursor:pointer;
    // background-color:teal;
    // color:white;
    // border:none;
    border: ${props =>props.type==="filled" && "none"};
    background-color: ${props =>props.type==="filled" ?"black" : "transparent"};
    color: ${props =>props.type==="filled" && "white"};
`;

const TopText= styled.span`
    text-decoration:underline;
    cursor:pointer;
    margin:0px 10px;
`;

const TopTexts=styled.div`

`;

const Bottom = styled.div`
    display:flex;
    justify-content: space-between;
`;

const Info= styled.div`
    flex:3;
`;
const Summary= styled.div`
    flex:1;
    border:0.5px solid lightgray;
    border-radius :10px;
    padding:20px;
    // display:flex;
    // flex-direction:column;
    height:50vh;
`;

const Product= styled.div`
    display:flex;
    justify-content:space-between;
`;

const ProductDetail= styled.div`
    flex:2;
    display:flex;
`;

const Image= styled.img`
    width:200px;
`;

const Details= styled.div`
    padding:20px;
    flex-direction:column;
    display:flex;
    justify-content:space-around;
`;

const ProductName= styled.span`

`;

const ProductId= styled.span`

`;

const ProductColor= styled.span`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color: ${props=> props.color};
`;

const ProductSize= styled.span`

`;

const PriceDetails= styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

const ProductAmountContainer = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
`;

const ProductAmount = styled.div`
    font-size:24px;
    margin:5px;
`;

const ProductPrice= styled.div`
    font-size:30px;
`;

const Hr= styled.hr`
    border-color: #eee;
    border:none;
    height:1px;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display:flex;
    justify-content:space-between;
    font-weight: ${props=> props.type ==="total" && "500"};
    font-size: ${props=> props.type ==="total" && "24px"};
`;

const SummaryTitle = styled.h1`
    font-weight:200;
`;

const SummaryItemText = styled.span`

`;

const SummaryItemPrice = styled.span`

`;

const SummaryButton = styled.button`
    width:100%;
    padding:10px;
    background-color:black;
    color:white;
    font-weight:600;
`;


const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECK OUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                            <Details>
                                <ProductName><b>Product:</b>LONG COAT</ProductName>
                                <ProductId><b>Id:</b>5454612456</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size:</b>M</ProductSize>
                            </Details>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 30 </ProductPrice>
                            </PriceDetails>
                        </ProductDetail>
                    </Product>

                    <Hr/>

                    <Product>
                        <ProductDetail>
                            <Image src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                            <Details>
                                <ProductName><b>Product:</b>LONG COAT</ProductName>
                                <ProductId><b>Id:</b>5454612456</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size:</b>M</ProductSize>
                            </Details>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 30 </ProductPrice>
                            </PriceDetails>
                        </ProductDetail>
                    </Product>
                </Info>


                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 50</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 0.5</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ 0.25</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryButton>CHECKOUT NOW</SummaryButton>

                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart
