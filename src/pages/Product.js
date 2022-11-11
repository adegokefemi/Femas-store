import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`

`
const Wrapper = styled.div`
    padding:50px;
    display: flex;
    ${mobile({padding:"10px", flexDirection: "column"})}
`

const ImgContainer =styled.div`
    flex: 1;
`
const Img = styled.img`
    width: 100%;
    height: 70vh;
    object-fit: cover;
    ${mobile({height:"40vh"})}
`
const InfoContainer = styled.div`
    flex:1;
    padding: 0 50px;
    ${mobile({padding:"10px"})}
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const  Price = styled.span`
    font-weight: 100;
    font-size: 40px;
    ${mobile({fontSize:"30px"})}
`
const FilterContainer = styled.div`
    display: flex;
    margin: 50px 0px;
    justify-content: space-between;
    width: 50%;
    ${mobile({width:"100%"})}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=> props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option`
`
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width:"100%"})}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    font-weight: 500;
    cursor: pointer;

    &:hover{
        background-color: #f8f4f4;
        transition: 1.5s es
    }
`
const Add = styled.span`

`
const Remove = styled.span`

`

function Product() {
    const location = useLocation();
    const id = (location.pathname.split("/")[2]);
    const [product, setProduct] = useState({});

    useEffect(() =>{
        const getProduct = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/" +id);
                setProduct(res.data)
            } catch (err) {
        };

        }
        getProduct();
    }, [id])


  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImgContainer>
          <img src={product.im}/>
            {/* <Img src="https://i.ibb.co/S6qMxwr/jean.jpg"/> */}
        </ImgContainer>
        <InfoContainer>
            <Title>Denin JumpSuit</Title>
            <Desc>Quality and affordable at your order</Desc>
            <Price>$20</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black"/>
                    <FilterColor color="darkblue"/>
                    <FilterColor color="gray"/>
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove>-</Remove>
                    <Amount>1</Amount>
                    <Add>+</Add>
                </AmountContainer>
                <Button>ADD TO CART</Button>
            </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product;
