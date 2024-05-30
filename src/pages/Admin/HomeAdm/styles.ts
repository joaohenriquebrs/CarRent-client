import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Montserrat, sans-serif;
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start; 
  width: 100vw;
  margin-top: 30px;
  padding: 0px 40px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const ButtonActions = styled.button`
  padding: 8px 14px;
  margin-bottom: 3px;
  cursor: pointer;
  border-radius: 5px;
  border: none;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const SearchContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  gap: 30px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;

  @media (max-width: 768px) {
    padding: 6px;
    font-size: 14px;
  }
`;

export const ActionButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  gap: 5px;
`;

export const InputField = styled.input`
`;

