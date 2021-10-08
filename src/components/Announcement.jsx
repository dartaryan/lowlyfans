import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3em;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Halloween themed arts are now available!</Container>;
};

export default Announcement;
