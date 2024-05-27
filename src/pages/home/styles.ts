import styled from 'styled-components';

/* Standards */

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Montserrat, sans-serif;
`;

export const ContentMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AdjustMargin = styled.div`
  width: 95%;
  margin-left: 2.4%;
`;


/* Carousel */

export const CarouselMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  background: #fff;

  @media (min-width: 800px) and (max-width: 900px) {
    margin-top: 60px;
  }

  @media (min-width: 700px) and (max-width: 800px) {
    margin-top: 50px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    margin-top: 40px;
  }

  @media (max-width: 600px) {
    margin-top: 30px;
  }
`;

/* Second Header */

export const BannerContainer = styled.div`
  margin-top: 123px;
  width: 100%;
`;

export const SearchContainer = styled.div`
  height: 200px;
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 2.4%;

  @media (min-width: 600px) and (max-width: 700px) {
    margin-top: 80px;
  }

  @media (min-width: 300px) and (max-width: 600px) {
    margin-top: 60px;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  width: 29%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;

  @media (min-width: 700px) and (max-width: 800px) {
    width: 38%;
    height: 48px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    width: 42%;
    height: 44px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    width: 42%;
    height: 40px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    width: 38%;
    height: 36px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    width: 38%;
    height: 32px;
  }
`;

export const SearchIcon = styled.button`
  background: #6a6c6a;
  width: 60px;
  height: 100%;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  &:active {
    background: #555655;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    max-width: 32px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    max-width: 32px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    max-width: 32px;
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  margin-left: 20px;
  color: #000;
  font-size: 16px;
  ::placeholder {
    color: #b3b3b3;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 14px;
    margin-left: 15px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 12px;
    margin-left: 10px;
  }
`;

export const OrderByContainer = styled.button`
  width: 140px;
  height: 45px;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 7px;

  &:hover {
    cursor: pointer;
    background: #f5f5f5;
  }

  &:active {
    border: 5px solid #e0e0e0;
  }

  @media (min-width: 500px) and (max-width: 800px) {
    width: 130px;
    height: 40px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    width: 120px;
    height: 35px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    width: 100px;
    height: 25px;
  }
`;

export const OrderByText = styled.div`
  margin: 6px;
  font-size: 16px;
  font-weight: 700;
  color: #616161;

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 13px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 10px;
  }
`;

export const MainContent = styled.div`
  margin-bottom: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const BlockCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 2.4%;
`;

export const ProductsFound = styled.div`
  color: #616161;
  font-size: 18px;
  margin: 0 2.4% 35px 2.4%;
  display: flex;
  flex-direction: row;
`;

export const Emphasis = styled.div`
  color: #616161;
  margin-right: 5px;
  font-weight: bold;
`;