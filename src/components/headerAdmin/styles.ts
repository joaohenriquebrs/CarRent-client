import styled from 'styled-components';

export const HeaderAdm = styled.div`
  background: #f5f5f5;
  width: 100vw;
  padding: 10px 40px;
  display: flex;
  flex-direction: row;
  flex-direction: space-between;
  align-items: center;

  @media (min-width: 400px) and (max-width: 500px) {
    margin-bottom: 30px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    margin-bottom: 20px;
  }
`;

export const LogoHeaderContainer = styled.a`
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
    min-width: 92px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    min-width: 87px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    min-width: 57px;
  }
`;

export const MenuAdm = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-right: 15px;

    @media (max-width: 900px) {
      display: none;
    }
`;

export const LinkMenu = styled.a`
  margin-right: 40px;
  color: #212121;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.3s ease;
  font-weight: 700;

  &:hover {
    transform: scale(1.07);
  }

  &:hover {
    color: #6a6c6a;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 15px;
    margin-right: 20px;
  }
`;


/* Menu Hamburguer */


export const HamburgerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 88%;

  @media (min-width: 901px) {
    display: none;
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
  font-size: 16px;
  top: 50px; 
  left: 0;
  width: 100%;
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  justify-content: center; 
  z-index: 1000;

  @media (min-width: 901px) {
    display: none;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 400px) {
    margin-top: -10px;
  }
`;

export const MobileMenuLink = styled.a`
  padding: 10px 0;
  text-align: center;
  width: 100%;
  text-decoration: none;
  color: black;
  border-bottom: 1px solid #ddd;

  &:hover {
    transform: scale(1.07);
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

  &:hover {
    transform: scale(1.07);
  }

  &:last-child {
    border-bottom: none;
  }
`;