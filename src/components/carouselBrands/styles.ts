import styled from 'styled-components';

export const CarouselContainer = styled.div`
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const CardCarousel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  overflow-x: hidden;
  max-width: 76vw;

  @media (min-width: 800px) and (max-width: 900px) {
    max-width: 62vw;
  }

  @media (min-width: 700px) and (max-width: 800px) {
    max-width: 58vw;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    max-width: 54vw;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    max-width: 50vw;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    max-width: 46vw;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    max-width: 42vw;
  }
`;

export const BlockImage = styled.div`
  max-width: 40px;
  max-height: 40px;
  min-width: 20px;
  min-height: 15px;

  @media (min-width: 500px) and (max-width: 600px) {
    min-width: 18px;
    min-height: 14px;
}

  @media (min-width: 400px) and (max-width: 500px) {
    min-width: 16px;
    min-height: 13px;
}

  @media (min-width: 300px) and (max-width: 400px) {
    min-width: 14px;
    min-height: 12px;
}
`;

export const Card = styled.a`
  width: 100px;
  height: 83px;
  background-color: #fff;
  margin-right: 20px;
  padding-top: 15px;
  border-radius: 12px;
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  text-decoration: none;
  color: #424242;

  &:hover {
    border: 1px solid #000;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 600px) and (max-width: 700px) {
    width: 90px;
    height: 73px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    width: 80px;
    height: 63px;
    margin-right: 18px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    width: 70px;
    height: 53px;
    margin-right: 12px;
    padding-top: 13px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    width: 60px;
    height: 43px;
    margin-right: 14px;
    padding-top: 10px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 300;

    @media (min-width: 500px) and (max-width: 600px) {
    font-size: 12px;
  }

    @media (min-width: 400px) and (max-width: 500px) {
    font-size: 11px;
  }

    @media (min-width: 300px) and (max-width: 400px) {
    font-size: 9px;
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

  @media (min-width: 400px) and (max-width: 500px) {
    min-width: 20px;
    min-height: 20px;
    right: -40px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    min-width: 20px;
    min-height: 20px;
    right: -40px;
  }
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

  @media (min-width: 400px) and (max-width: 500px) {
    min-width: 20px;
    min-height: 20px;
    left: -40px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    min-width: 20px;
    min-height: 20px;
    left: -40px;
  }
`;

export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 90vw;
  margin-top: -40px;

  @media (min-width: 500px) and (max-width: 600px) {
    margin-top: -30px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    margin-top: -25px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    margin-top: -20px;
  }
`;
