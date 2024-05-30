import styled from 'styled-components';

export const PageContainer = styled.div`
  height: 100vh;
  font-family: Montserrat, sans-serif;
`;

export const MainContent = styled.div`
  margin-top: 123px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleContainer = styled.div`
  background: #f5f5f5;
  margin-bottom: 50px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 140px;
  font-size: 34px;
  color: #616161;
  font-weight: 600;

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 30px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 28px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 26px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 24px;
    margin-bottom: 40px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 22px;
    margin-bottom: 30px;
  }
`;

export const TextAboutContent = styled.div`
  margin-bottom: 40px;
  font-size: 18px;
  color: #616161;
  letter-spacing: 0.2px;
  line-height: 22px;
  width: 87%;

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 16px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

export const ParagraphSpacing = styled.div`
  height: 30px;

  @media (min-width: 500px) and (max-width: 700px) {
    height: 20px;
  }

  @media (min-width: 300px) and (max-width: 500px) {
    height: 10px;
  }
`;

export const ServiveContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 87%;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ServiceTitle = styled.div`
  font-size: 34px;
  color: #424242;
  font-weight: 600;
  margin-bottom: 30px;

  @media (min-width: 768px) and (max-width: 800px) {
    font-size: 30px;
  }
`;

export const ServiceDown = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const ServiceText = styled.div`
  width: 50%;
`;

export const ServiceContact = styled.div`
  width: 50%;
  background: #f5f5f5;
  padding: 40px 30px;
  border-radius: 10px;
`;

export const ServiceFirstImage = styled.div`
  margin-bottom: 20px;
`;

export const ServiceSecondText = styled.div`
  line-height: 28px;
  font-size: 16px;
  color: #616161;
  letter-spacing: 0.4px;
  line-height: 22px;
  font-weight: 600;
`;

export const ContactText = styled.div`
  line-height: 28px;
  font-size: 16px;
  color: #616161;
  letter-spacing: 0.4px;
  line-height: 22px;
  font-weight: 600;
  margin-bottom: 10px;

  @media (min-width: 768px) and (max-width: 800px) {
    font-size: 14px;
  }
`;

export const ButtonWppContact = styled.a`
  margin-bottom: 10px;
  font-size: 16px;
  color: #ffffff;
  background: #25d366;
  letter-spacing: 0.4px;
  line-height: 22px;
  font-weight: 600;
  width: 35%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  text-decoration: none;

  &:hover {
    background: #1da851;
  }

  &:active {
    border: 2px solid #d3d3d3;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 12px;
    width: 45%;
  }
`;

export const BlockImage = styled.div`
  margin-bottom: -5px;
  margin-right: 5px;
`;

export const ContactSecondText = styled.div`
  line-height: 28px;
  font-size: 16px;
  color: #616161;
  letter-spacing: 0.4px;
  line-height: 22px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const ButtonNumberContact = styled.a`
  font-size: 16px;
  color: #000000;
  letter-spacing: 0.4px;
  line-height: 22px;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  width: 140px;
  &:hover {
    color: #757575;
  }
`;
