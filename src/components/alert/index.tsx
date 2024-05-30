import React from 'react';
import styled from 'styled-components';

const AlertContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AlertText = styled.p`
  font-size: 18px;
  color: #333;

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 14px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 12px;
  }
`;

const CloseButton = styled.button`
  background-color: #ff6347;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 12px;
    padding: 6px 12px;
  }
`;

interface AlertProps {
  message: string;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, onClose }) => {
  return (
    <AlertContainer>
      <AlertText>{message}</AlertText>
      <CloseButton onClick={onClose}>Fechar</CloseButton>
    </AlertContainer>
  );
};

export default Alert;
