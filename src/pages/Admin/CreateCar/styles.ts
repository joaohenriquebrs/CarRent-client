import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Montserrat, sans-serif;
`;

export const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin-top: 30px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5%;
`;

export const BlockLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const BlockRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18%;

    @media (min-width: 500px) and (max-width: 768px) {
      width: 30%;
    }

    @media (min-width: 300px) and (max-width: 500px) {
      width: 50%;
    }
`;

export const CarBlock = styled.div`
  width: 40%;
  margin: 10px;
`;

export const CarTitle = styled.div`
  margin-bottom: 5px;
  font-size: 16px;
  color: #212121;
  font-weight: 700;
`;

export const CarInput = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 10px;
  border: none;
  background: #f5f5f5;
  padding: 0px 10px;
`;

export const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }
`;