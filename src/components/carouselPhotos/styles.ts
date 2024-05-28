import styled from 'styled-components';

export const CarouselContainer = styled.div`
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 190px;

  @media (min-width: 700px) and (max-width: 800px) {
    margin-bottom: 120px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    margin-bottom: 100px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    margin-bottom: 90px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    margin-bottom: 70px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    margin-bottom: 50px;
  }
`;

export const CardCarousel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  overflow: hidden;
  width: 90vw;
  
  @media (min-width: 950px) and (max-width: 1200px) {
    width: 80vw;
    margin-left: 40px;
  }

  @media (min-width: 800px) and (max-width: 950px) {
    width: 75vw;
    margin-left: 60px;
  }

  @media (min-width: 650px) and (max-width: 800px) {
    width: 70vw;
    margin-left: 70px;
  }

  @media (min-width: 500px) and (max-width: 650px) {
    width: 65vw;
    margin-left: 80px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    width: 60vw;
    margin-left: 75px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    width: 60vw;
    margin-left: 60px;
  }
`;

export const BlockImage = styled.a`
  width: 100%;
  height: 100%;
`;

export const Card = styled.div`
  width: 28%;
  height: 21%;
  margin-right: 20px;
  border-radius: 12px;
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #424242;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }

  @media (min-width: 768px) and (max-width: 1400px) {
    width: 52%;
  }

  @media (min-width: 700px) and (max-width: 768px) {
    width: 68%;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    width: 78%;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    width: 78%;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    width: 88%;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    width: 100%;
  }
`;

export const ButtonRight = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  right: -65px;
  min-width: 30px;
  min-height: 30px;
  max-width: 40px;
  max-height: 40px;
`;

export const ButtonLeft = styled.button`
  transform: rotate(180deg);
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: left;
  position: absolute;
  left: -65px;
  min-width: 30px;
  min-height: 30px;
  max-width: 40px;
  max-height: 40px;
`;

export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  width: 90vw;
  margin-top: -190px;

  @media (min-width: 1200px) and (max-width: 1500px) {
    margin-top: -130px;
  }

  @media (min-width: 950px) and (max-width: 1200px) {
    width: 80vw;
    margin-left: 40px;
    margin-top: -120px;
  }

  @media (min-width: 768px) and (max-width: 950px) {
    width: 78vw;
    margin-left: 45px;
    margin-top: -95px;
  }

  @media (min-width: 700px) and (max-width: 768px) {
    width: 78vw;
    margin-left: 45px;
    margin-top: -100px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    width: 78vw;
    margin-left: 45px;
    margin-top: -130px;
    margin-bottom: 150px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    width: 78vw;
    margin-left: 45px;
    margin-top: -105px;
    margin-bottom: 150px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    width: 60vw;
    margin-left: 73px;
    margin-top: -90px;
    margin-bottom: 120px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    width: 50vw;
    margin-left: 78px;
    margin-top: -90px;
    margin-bottom: 110px;
  }
`;
