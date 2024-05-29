import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const RotatingSpinner = styled(FaSpinner)`
  animation: ${spin} 1s linear infinite; 
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <RotatingSpinner />
    </LoadingContainer>
  );
};

export default Loading;