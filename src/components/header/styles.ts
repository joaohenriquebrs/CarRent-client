import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;

  @media (min-width: 800px) and (max-width: 1000px) {
  }
`;

export const FirstHeader = styled.div`
  height: 47px;
  background: #f5f5f5;
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const SecondHeader = styled.div`
  height: 76px;
  background: #fff;
  width: 100vw;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  align-items: center;
  margin-top: -1px;
`;

export const OpeningHoursLabel = styled.div`
  color: #616161;
  font-size: 16px;
  font-weight: 700;
  margin-right: 6px;
  letter-spacing: 0.4px;

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 14px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 13px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 10px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 7px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 5px;
  }
`;

export const OpeningHoursInfo = styled.div`
  color: #616161;
  font-size: 16px;
  margin-right: 15px;
  letter-spacing: 0.4px;

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 14px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 13px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 10px;
    margin-right: 25px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 7px;
    margin-right: 20px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 5px;
    margin-right: 15px;
  }
`;

export const LogoHeaderContainer = styled.a`
  margin-left: 2.4%;

  @media (min-width: 800px) {
    min-width: 147px;
  }

  @media (min-width: 700px) and (max-width: 800px) {
    min-width: 127px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    min-width: 117px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    min-width: 102px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    min-width: 87px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    min-width: 77px;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  justify-content: flex-end;
  width: 88%;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.4px;

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 12px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 11px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 9px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 8px;
  }

  @media (min-width: 350px) and (max-width: 400px) {
    font-size: 6px;
  }

  @media (min-width: 300px) and (max-width: 350px) {
    font-size: 5px;
  }
`;

export const LinkMenu = styled.a`
  margin-right: 30px;
  cursor: pointer;
  color: #212121;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.07);
  }

  &:hover {
    color: #6a6c6a;
  }

  @media (min-width: 700px) and (max-width: 800px) {
    margin-right: 26px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    margin-right: 24px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    margin-right: 22px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    margin-right: 10px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    margin-right: 8px;
  }
`;

export const PhoneLinkMenu = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 30px;
  color: #212121;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    color: #6a6c6a;
    transform: scale(1.07);
  }

  @media (min-width: 700px) and (max-width: 800px) {
    margin-right: 26px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    margin-right: 24px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    margin-right: 22px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    margin-right: 10px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    margin-right: 8px;
  }
`;

export const LogoWppPhone = styled.div`
  margin-right: 1px;
  
  @media (min-width: 700px) {
    min-width: 23px;
    min-height: 23px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    min-width: 20px;
    min-height: 20px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    min-width: 18px;
    min-height: 18px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    min-width: 14px;
    min-height: 14px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    min-width: 13px;
    min-height: 13px;
  }
`;

export const LogoWpp = styled.a`
  margin-right: 15px; 

  @media (min-width: 600px) {
    min-width: 30px;
    min-height: 29px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    min-width: 20px;
    min-height: 19px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    min-width: 18px;
    min-height: 17px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    min-width: 16px;
    min-height: 15px;
  }
`;

export const ContentSecondHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 95%;
`;

export const LinkMenuAdm = styled.a`
  cursor: pointer;
  color: #212121;
  text-decoration: none;
  background: #6A6C6A;
  font-size: 16px;
  padding: 5px;
  border-radius: 5px;
  transition: transform 0.3s ease;

  &:hover {
    color: #000;
    transform: scale(1.07);
  }

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 14px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 13px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 10px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 7px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 5px;
  }
`;

