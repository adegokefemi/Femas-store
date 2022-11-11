import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection:"column"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding:20px;
` 
const Logo = styled.h1`

`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainter = styled.div`
    display: flex;

`
const SocialIcon = styled.h1`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=> props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display:"none"})}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.div`

`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
     width: 50%;
     margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor:"lightgray"})}
`

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>FAG.</Logo>
        <Desc>There are varieties of our product and you can trust us for quality and affordable goods deliver to you.</Desc>
        <SocialContainter>
            <SocialIcon color="3B5999">
                <i class="fa-brands fa-square-facebook"></i>
            </SocialIcon>
            <SocialIcon color="E4405F">
                <i class="fa-brands fa-square-instagram"></i>
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <i class="fa-brands fa-twitter"></i>
            </SocialIcon>
            <SocialIcon color="E60023">
                <i class="fa-brands fa-pinterest"></i>
            </SocialIcon>
        </SocialContainter>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Men Fashion</ListItem>
            <ListItem>Women Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>All products</ListItem>
            <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
            <i style={{marginRight: "10px"}} class="fa-light fa-location-dot"></i> Lagos, Nigeria
        </ContactItem>
        <ContactItem>
            <i style={{marginRight: "10px"}} class="fa-regular fa-phone"></i> +2348062646761
        </ContactItem>
        <ContactItem>
                <i style={{marginRight: "10px"}} class="fa-regular fa-envelope"></i> adegokefemi95@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer;
