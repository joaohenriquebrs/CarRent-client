import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Montserrat, sans-serif;
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width: 100vw;
`;

export const ButtonActions = styled.button`
  padding: 3px;
  margin-bottom: 3px;
  width: 50px;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
`;