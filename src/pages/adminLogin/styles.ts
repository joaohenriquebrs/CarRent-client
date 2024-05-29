import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Montserrat, sans-serif;
`;

export const MainContent = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LoginTitle = styled.div`
  color: #000;
  font-size: 26px;
  margin-bottom: 10px;
  font-weight: 700;
`;

export const BlockInputUser = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 300px;
`;

export const InputUserTitle = styled.div`
  margin-bottom: 5px;
  color: #000;
  font-size: 18px;
`;

export const InputUser = styled.input`
  padding: 10px;
  border: 1px solid #E8E8E8;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const BlockInputPassword = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 20px;
`;

export const InputPasswordTitle = styled.div`
  margin-bottom: 5px;
  color: #000;
  font-size: 18px;
`;

export const InputPassword = styled.input`
  padding: 10px;
  border: 1px solid #E8E8E8;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const AcessButton = styled.a`
  padding: 10px 15px;
  border: 1px solid #FFF;
  background: #5AAAFF;
  border-radius: 5px;
  font-size: 15px;
  color: #FFF;
  cursor: pointer;
  transition: transform 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: scale(1.07);
  }
`;

export const ParagraphError = styled.div`
  margin: 10px 0px;
  color: red;
`;

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;