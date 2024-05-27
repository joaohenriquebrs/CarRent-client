import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.white};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImageContainer = styled.div``;
