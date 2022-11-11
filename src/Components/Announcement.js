import styled from "styled-components"


const Container = styled.div`
    height: 30px;
    background-color: teal;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight:500;
`

function Announcement() {
  return (
    <Container>
      Super Deal! Free Shipping on orders Over $50
    </Container>
  );
}

export default Announcement;
