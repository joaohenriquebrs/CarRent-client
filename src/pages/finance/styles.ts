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
  margin-bottom: 50px;
`;

export const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fafafa;
  height: 170px;
  width: 100%;
  margin-bottom: 80px;
`;

export const TitleMain = styled.div`
  font-size: 32px;
  color: #616161;
  margin-bottom: 10px;
  font-weight: 600;
`;

export const SubtitleMain = styled.div`
  font-size: 17px;
  color: #616161;
  font-weight: 400;
`;

export const FinanceDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;
  margin-left: 140px;
  gap: 150px;
`;

export const DescriptionLeft = styled.div`
  width: 55%;
`;

export const TitleDescription = styled.div`
  font-size: 16px;
  color: #616161;
  line-height: 28px;
  letter-spacing: 1px;
  margin-bottom: 30px;
`;

export const BlockFinanciers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
`;

export const Financiers = styled.div`
  width: 30%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const BlockImageFinanciers = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const FinanciersName = styled.div`
  font-size: 14px;
  color: #424242;
  text-align: center;
`;

export const DescriptionRight = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentRight = styled.div`
  background: #f5f5f5;
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const TitleDescriptionRight = styled.div`
  font-size: 16px;
  color: #616161;
  width: 90%;
  line-height: 24px;
  letter-spacing: 0.8px;
  margin-bottom: 20px;
`;

export const ButtonDescription = styled.div`
  background: #000;
  font-size: 16px;
  color: #fff;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0px;
  border-radius: 5px;
`;

export const ProcessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
`;

export const TitleProcess = styled.div`
  color: #616161;
  font-size: 28px;
  font-weight: 600;
  margin: 65px 0px 20px 0px;
`;

export const BlockProcess = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 96%;
  gap: 25px;
  height: 400px;
`;

export const Process = styled.div`
  width: 33.3%;
  height: 76%;
  margin-bottom: 35px;
  background: #fff;
  padding: 0px 50px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const CardImage = styled.div`
  color: #6a6c6a;
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const Title = styled.div`
  color: #424242;
  font-size: 20px;
  margin-bottom: 15px;
  font-weight: 600;
  letter-spacing: 0.6px;
`;

export const Description = styled.div`
  color: #616161;
  font-size: 19px;
  letter-spacing: 0.6px;
  line-height: 28px;
`;

export const FormsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 50px;
`;

export const FormsLeft = styled.div`
  width: 50%;
`;

export const TextLeft = styled.div`
  font-size: 40px;
  color: #424242;
  width: 30%;
  position: relative;
  float: right;
  margin-right: 26%;
  text-align: right;
  font-weight: bold;
`;

export const FormsRight = styled.div`
  width: 50%;
`;

export const CarDatas = styled.div`
  margin-bottom: 30px;
`;

export const TitleCarDatas = styled.div`
  font-size: 16px;
  color: #757575;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const SubTitleCarDatas = styled.div`
  font-size: 16px;
  color: #616161;
  margin-bottom: 15px;
`;

export const InputCarDatas = styled.input`
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  width: 85%;
  margin-bottom: 5px;
  padding: 14px 0px 14px 10px;
`;

export const ExampleCarDatas = styled.div`
  font-size: 14px;
  color: #616161;
`;

export const TitleContactDatas = styled.div`
  font-size: 16px;
  color: #757575;
  font-weight: 700;
  margin-bottom: 22px;
`;

export const ContactDatas = styled.div`
  color: #616161;
  font-size: 14px;
  margin-bottom: 12px;
`;

export const ContactNameContainer = styled.div``;

export const TitlesContact = styled.div`
  margin-bottom: 8px;
  font-size: 16px;
`;

export const InputContainer = styled.input`
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  width: 85%;
  margin-bottom: 20px;
  padding: 14px 0px 14px 10px;
`;

export const ContactPhoneContainer = styled.div``;

export const ContactEmailContainer = styled.div``;

export const ButtonSend = styled.div`
  background: #6a6c6a;
  width: 85%;
  display: flex;
  justify-content: center;
  padding: 14px 0px;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: -12px;

  &:active {
    transform: scale(1.02);
  }
`;
