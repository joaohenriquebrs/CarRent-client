import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

interface EditButtonProps {
    carId: number;
}

const ButtonEdit = styled.button`
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

const EditButton: React.FC<EditButtonProps> = ({ carId }) => {
    const router = useRouter();

    const handleEditClick = () => {
        router.push(`/Admin/CarBuilder?id=${carId}`);
    };

    return (
        <ButtonEdit onClick={handleEditClick}>Editar</ButtonEdit>
    );
};

export default EditButton;
