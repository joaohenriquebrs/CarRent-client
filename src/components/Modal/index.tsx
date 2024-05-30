import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

interface ModalProps {
    show: boolean;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ModalContainer = styled.div<{ show: boolean }>`
    display: ${props => (props.show ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    animation: ${props => (props.show ? fadeIn : fadeOut)} 0.3s linear;
`;

const ModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const Message = styled.p`
    font-size: 16px;
    margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Button = styled.button`
    margin-left: 10px;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    outline: none;
`;

const LoadingContainer = styled.div`
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const RotatingSpinner = styled(FaSpinner)`
    animation: ${spin} 1s linear infinite; 
`;

const Modal: React.FC<ModalProps> = ({ show, message, onConfirm, onCancel }) => {
    return (
        <ModalContainer show={show}>
            <ModalContent>
                <Message>{message}</Message>
                <ButtonContainer>
                    <Button onClick={onCancel}>Cancelar</Button>
                    <Button onClick={onConfirm}>Confirmar</Button>
                </ButtonContainer>
            </ModalContent>
        </ModalContainer>
    );
};

export default Modal;
