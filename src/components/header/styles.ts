import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
`;

export const FirstHeader = styled.div`
  height: 47px;
  background: #f5f5f5;
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
`;

export const SecondHeader = styled.div`
  height: 76px;
  background: #fff;
  width: 100vw;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
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
  @media (min-width: 768px) {
    width: 147px;
  }

  @media (min-width: 700px) and (max-width: 768px) {
    width: 127px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    width: 117px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    width: 102px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    width: 87px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    width: 77px;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  justify-content: flex-end;
  font-weight: 700;
  letter-spacing: 0.4px;

  @media (max-width: 900px) {
    display: none;
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
  flex-direction: row;
  padding-top: 5px;
  cursor: pointer;
  margin-right: 30px;
  color: #212121;
  text-decoration: none;
  transition: transform 0.3s ease;
  text-align: bottom;

  &:hover {
    color: #6a6c6a;
    transform: scale(1.07);
  }
`;

export const IconLink = styled.div`
  margin-right: 3px;
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
  align-items: center;
  justify-content: space-between;
  width: 91%;
`;

export const LinkMenuAdm = styled.a`
  cursor: pointer;
  color: #FFF;
  text-decoration: none;
  background: #6A6C6A;
  font-size: 16px;
  padding: 10px 8px 6px 8px;
  border-radius: 5px;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: row;

  &:hover {
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


/* Menu Hamburguer */


export const HamburgerContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 88%;

  @media (min-width: 901px) {
    display: none;
  }

  @media (min-width: 700px) and (max-width: 901px) {
  }

  @media (min-width: 400px) and (max-width: 500px) {
  }

  @media (min-width: 300px) and (max-width: 400px) {
  }
`;

export const HamburgerIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 20px;
  height: 15px;
  cursor: pointer;
`;

export const HamburgerBar = styled.div`
  width: 100%;
  height: 2px;
  background: #212121;
`;

export const MobileMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f5f5;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
`;

export const MobileMenuLink = styled.a`
  padding: 10px 0;
  text-align: center;
  width: 100%;
  text-decoration: none;
  color: black;
  border-bottom: 1px solid #ddd;
  font-size: 16px;

  &:hover {
    transform: scale(1.07);
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const MobileIconMenuLink = styled.a`
  display: flex;
  padding: 10px 0;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #212121;
  text-decoration: none;
  transition: transform 0.3s ease;
  border-bottom: 1px solid #ddd;
  width: 100%;
  font-size: 16px;

  &:hover {
    transform: scale(1.07);
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
