import styled from 'styled-components';

export const HeaderAdm = styled.div`
  background: #f5f5f5;
  width: 100vw;
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-direction: space-between;
  align-items: center;
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

    @media (min-width: 300px) and (max-width: 600px) {
      margin-right: 0px;
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

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 13px;
    margin-right: 30px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 12px;
    margin-right: 25px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 11px;
    margin-right: 20px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 8px;
    margin-right: 10px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 7px;
    margin-right: 10px;
  }
`;