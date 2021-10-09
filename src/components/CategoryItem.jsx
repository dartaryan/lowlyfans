import styled from "styled-components";

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 3;
  border-radius:4%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius:4%;

`;



const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  overflow: hidden;
  border-radius:4%;
  &:hover ${Image}{
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
   

  }

  &:hover ${Info} {
    opacity: 1;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  /* background-color: rgba(0, 0, 0, .6); */
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
