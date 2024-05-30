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
  cursor: pointer;
  border-radius: 5px;
  border: none;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 11px;
    padding: 8px 12px;
  }

  @media (min-width: 300px) and (max-width: 500px) {
    font-size: 12px;
    padding: 5px 8px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  font-size: 16px;

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 14px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 14px;
    padding: 8px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 12px;
    gap: 10px;
  }

  @media (min-width: 300px) and (max-width: 500px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding-left: 15px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;

  @media (min-width: 600px) and (max-width: 800px) {
    padding-left: 5px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    width: 30%;
  }

  @media (min-width: 300px) and (max-width: 500px) {
    width: 100%;
    height: 40px;
  }
`;

export const ActionButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  height: 40px;
`;

export const InputField = styled.input`
`;


export const CardsPerPage = styled.div`
  font-size: 16px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  padding: 15px;
  text-align: center;

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 14px;
    padding: 8px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 12px;
    padding: 8px 4px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 12px;
    padding: 8px 4px;
    width: 30%;
  }

  @media (min-width: 300px) and (max-width: 500px) {
    font-size: 10px;
    padding: 5px;
    height: 41px;
  }
`;

export const LabelCards = styled.label`
  font-weight: 700;
  color: #616161;
  margin-right: 5px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
  margin: 20px 0px 40px 0px;
`;

export const OptionSelect = styled.option`
`;

export const SelectContainer = styled.select`
  padding: 2px;
  font-weight: 700;
  color: #616161;
  cursor: pointer;

  @media (min-width: 300px) and (max-width: 500px) {
    font-size: 10px;
  }
`;

export const HeaderTable = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }

  @media (min-width: 300px) and (max-width: 500px) {
    gap: 15px;
  }
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
`;