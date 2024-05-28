import styled from 'styled-components';

export const CarouselContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 300px) and (max-width: 400px) {
    margin-bottom: 30px;
  }
`;

export const CardCarousel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  overflow: hidden;
  width: 90vw;
  margin-bottom: 20px;
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
  width: 50px;
  height: 50px;
  transition: transform 0.3s ease;

  @media (min-width: 400px) and (max-width: 500px) {
    width: 40px;
    height: 40px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    width: 35px;
    height: 35px;
  }
`;

export const ButtonLeft = styled.button`
  transform: rotate(180deg);
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 50px;
  height: 50px;

  @media (min-width: 400px) and (max-width: 500px) {
    width: 40px;
    height: 40px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    width: 35px;
    height: 35px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 50px;
`;
