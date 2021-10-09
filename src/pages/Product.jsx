import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="http://www.andromedadesignslimited.com/shared/images/product/KRTRickAndMortyPortalFigure_Open.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Rick & Morty Portal | Vinyl Figure</Title>
          <Desc>
            This is a piece of art. If your a fan of Rick and Morty
            collectables? Then your not going to want to miss out on this. Very
            well crafted. I love mine. A must have for an Rick & Morty Fan.
          </Desc>
          <Price>$49.85</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption size='7"' />
                <FilterSizeOption size='12"' />
                <FilterSizeOption size='17"' />
              </FilterSize>
            </Filter>
          </FilterContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
