import styled from 'styled-components';

export const PageContainer = styled.div`
  height: 100%;
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
  padding: 50px 0px;
  width: 100%;
  margin-bottom: 80px;

  @media (max-width: 500px) {
    margin-bottom: 20px;
  }
`;

export const TitleMain = styled.div`
  font-size: 32px;
  color: #616161;
  margin-bottom: 10px;
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
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 22px;
  }
`;

export const SubtitleMain = styled.div`
  font-size: 17px;
  color: #616161;
  font-weight: 400;
  text-align: center;
  padding: 0px 25px;

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 16px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 15px;
  }

  @media (min-width: 400px) and (max-width: 600px) {
    font-size: 13px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 12px;
  }
`;

export const FinanceDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;
  gap: 15%;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-bottom: 20px;
  }
`;

export const DescriptionLeft = styled.div`
  width: 55%;

  @media (max-width: 500px) {
    width: 80%;
    margin-bottom: 20px;
  }
`;

export const TitleDescription = styled.div`
  font-size: 16px;
  color: #616161;
  line-height: 28px;
  letter-spacing: 1px;
  margin-bottom: 30px;

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 14px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 13px;
    line-height: 24px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 12px;
    line-height: 20px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 12px;
    line-height: 20px;
    text-align: center;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 13px;
    line-height: 18px;
    text-align: center;
  }
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
  align-items: center;
`;

export const BlockImageFinanciers = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  width: 46px;
  height: 46px;

  @media (min-width: 700px) and (max-width: 800px) {
    width: 42px;
    height: 42px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    width: 40px;
    height: 40px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    width: 38px;
    height: 38px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    width: 36px;
    height: 36px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    width: 34px;
    height: 34px;
  }
`;

export const FinanciersName = styled.div`
  font-size: 14px;
  color: #424242;
  text-align: center;

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 13px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 12px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 11px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 10px;
  }
`;

export const DescriptionRight = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    width: 60%;
  }
`;

export const ContentRight = styled.div`
  background: #f5f5f5;
  width: 100%;
  padding: 20px 10px;
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

  @media (min-width: 700px) and (max-width: 800px) {
    line-height: 22px;
    font-size: 14px;
  }

  @media (min-width: 500px) and (max-width: 700px) {
    margin-bottom: 10px;
    letter-spacing: 1px;
    line-height: 20px;
    font-size: 12px;
  }

  @media (min-width: 300px) and (max-width: 500px) {
    margin-bottom: 10px;
    letter-spacing: 1px;
    line-height: 20px;
    font-size: 14px;
  }
`;

export const ButtonDescription = styled.a`
  background: #000;
  font-size: 16px;
  color: #fff;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0px;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;

  @media (min-width: 500px) and (max-width: 700px) {
    font-size: 12px;
  }

  @media (min-width: 300px) and (max-width: 500px) {
    font-size: 14px;
  }
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

  @media (min-width: 800px) and (max-width: 900px) {
    font-size: 26px;
  }

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 24px;
    margin: 55px 0px 20px 0px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 22px;
    margin: 45px 0px 20px 0px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 20px;
    margin: 35px 0px 20px 0px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 18px;
    margin: 25px 0px 20px 0px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 16px;
    margin: 25px 0px 20px 0px;
  }
`;

export const BlockProcess = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 96%;
  gap: 25px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
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
  height: 280px;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const CardImage = styled.div`
  margin-bottom: 15px;
`;

export const Title = styled.div`
  color: #424242;
  font-size: 20px;
  margin-bottom: 15px;
  font-weight: 600;
  letter-spacing: 0.6px;

  @media (min-width: 700px) and (max-width: 1000px) {
    font-size: 16px;
    margin-bottom: 10px;
  }

  @media (min-width: 500px) and (max-width: 700px) {
    font-size: 14px;
    margin-bottom: 10px;
  }

  @media (min-width: 300px) and (max-width: 500px) {
    font-size: 12px;
    margin-bottom: 10px;
  }
`;

export const Description = styled.div`
  color: #616161;
  font-size: 19px;
  letter-spacing: 0.6px;
  line-height: 28px;

  @media (min-width: 900px) and (max-width: 1000px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media (min-width: 800px) and (max-width: 900px) {
    font-size: 16px;
    line-height: 23px;
  }

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.2px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 17px;
    line-height: 24px;
    letter-spacing: 0.4px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.3px;
  }
`;