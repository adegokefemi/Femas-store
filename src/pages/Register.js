import styled from "styled-components"
import { mobile } from "../responsive"

// Full screen component width, Height is 100vw.
const Container = styled.div`
    width: 100vw;
    height: 50vw;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5), 
        rgba(255, 255, 255, 0.5)
    ), 
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;
    background-size: cover;    
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
         width: 40%;
         padding: 20px;
        background-color: white;
        ${mobile({width:"75%"})}
`
const Title = styled.h1`
        font-size: 24px;
        font-weight: 300;
        margin: 5px 0px;
`
// flex wrap is needed for all the input
const Form = styled.form`
        display: flex;
        flex-wrap: wrap;
`
const Input = styled.input`
        flex: 1;
        min-width: 40%;
        margin: 40px 20px 0px 0px;
        padding: 10px;
    `
const Agreement = styled.span`
        font-size: 12px;
        margin: 20px 0px;
`
const Button = styled.button`
        width: 40%;
        padding: 15px 20px;
        border: none;
        background-color: teal;
        color: white;
        cursor: pointer;
`


function Register() {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="Username"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Agreement>
                    By creating an account, I consent to the processing of my personal 
                    data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
            </Form>
            <Button>Create</Button>
        </Wrapper>
    </Container>
  )
}

export default Register
