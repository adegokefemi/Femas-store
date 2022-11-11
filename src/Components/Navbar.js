import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container = styled.div`
    height:60%;
    ${mobile({height:"50%"})}
     }
`
const Wrapper =  styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding:"10px 0px"})}
`

const Left = styled.div`
   flex: 1;
   display:flex;
`
const Center = styled.div`
    flex:1;
    text-align: center;
`
const Right = styled.div`
    flex:1;
    display:flex;
    align-item: center;
    justify-content:flex-end;
    ${mobile({flex:2, justifyContent:"center"})}
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin:20px;
  ${mobile({fontSize:"10px", margin:"10px"})}
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display:"none"})}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray; 
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
` 
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize:"24px"})}
`

const Input = styled.input`
    border: none;
    ${mobile({width:"50px"})}
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
           <Left>
            <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='search' style={{color:"gray", fontSize:16}}/>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </SearchContainer>
            </Left> 
           <Center><Logo>FEMAS STORE</Logo></Center>
           <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                <i class="fa fa-shopping-cart" aria-hidden="true">
                    0
                </i>
                </MenuItem>
           </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar;
