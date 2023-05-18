import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import { Badge } from '@material-ui/core'

const Containers= styled.div`
  height: 80px;
`

const Wrapper= styled.div`
      padding : 10px 20px ;
      display: flex;
      justify-content: space-between;
      align-items: center;
`

const Left= styled.div`
  flex:1;
  display:flex;
  align-items:center;
`
const SearchContainer= styled.div`
  border: 0.25px solid lightgray;
  display: flex;
  align-item: center;
  padding: 0.5px;
  margin-left: 25px;
`

const Input= styled.input`
  border:none;

`

const Logo=styled.h1`
font-weight: bold;
` 


const Center= styled.div`
  flex:1;
  text-align:center;
`

const MenuItems=styled.div`
  font-size: 14px;
  cursor:pointer;
  margin-left:25px;
`

const Right= styled.div`
  flex:1;
  display:flex;
  justify-content: flex-end;
  align-items:center;
`

const Language= styled.span`
  font-size: 14px;
  cursor: pointer;
`

const Navbar = () => {
  return (
    <Containers>
      <Wrapper>

        <Left>

          <Language>
            EN
          </Language>

          <SearchContainer>
            <Input/>
            <Search/>
          </SearchContainer>
        </Left>
        <Center><Logo>HARSHU</Logo></Center>
        <Right>

          <MenuItems>Register</MenuItems>
          <MenuItems>Sign In</MenuItems>
          <MenuItems>
          <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined/>
          </Badge>
          </MenuItems>
        </Right>

      </Wrapper>
    </Containers>
  )
}

export default Navbar
