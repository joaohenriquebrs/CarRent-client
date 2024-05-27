import styled from 'styled-components';

/* Footer */

export const FooterContainer = styled.div`
  background: #FFF;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center
  font-family: 'Ubuntu', sans-serif;
`;

export const BlockHeaderFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 160px;
  background: #FFF;

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 21px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 19px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 17px;
    margin-top: -20px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 16px;
    margin-top: -20px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 14px;
    margin-top: -30px;
  }
`;

export const TitleFooter = styled.h2`
  color: #616161;
  font-size: 23px;
  font-weight: bold;
  font-family: sans-serif;

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 21px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 19px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 17px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 16px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 14px;
  }
`;

export const SocialMedias = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 40px;
`;

export const BlockInsta = styled.a`
  margin-right: 25px;

  @media (min-width: 600px) {
    min-width: 32px;
    min-height: 32px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    min-width: 28px;
    min-height: 28px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    min-width: 26px;
    min-height: 26px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    min-width: 24px;
    min-height: 24px;
  }
`;

export const BlockFace = styled.a`
  @media (min-width: 600px) {
    min-width: 32px;
    min-height: 32px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    min-width: 28px;
    min-height: 28px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    min-width: 26px;
    min-height: 26px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    min-width: 24px;
    min-height: 24px;
  }
`;

export const Degrade = styled.div`
  background: linear-gradient(to bottom, #fff, #cfcfcf);
  width: 100%;
  height: 10px;
  margin-bottom: -20px;
`;

export const ContentFooterContainer = styled.div`
  padding-left: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 500px;
  background: linear-gradient(to bottom, #fff, #f0f0f0);

  @media (min-width: 500px) and (max-width: 600px) {
    height: 480px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    height: 460px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    height: 440px;
  }
`;

export const LeftContent = styled.div`
  margin-right: 40px;
  width: 50%;
`;

export const MapStyle = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;
`;

export const RightContent = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
`;

export const Location1 = styled.div`
  margin-bottom: 30px;
`;

export const Location2 = styled.div``;

export const TitleLocation1 = styled.h3`
  color: #616161;
  font-size: 23px;
  font-weight: bold;
  font-family: sans-serif;
  margin-bottom: 12px;

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 21px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 19px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 17px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 16px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 14px;
  }
`;

export const Infos = styled.a`
  font-size: 16px;
  color: #212121;
  font-family: sans-serif;
  margin-bottom: 12px;
  display: flex;
  flex-direction: row;
  text-decoration: none;
  letter-spacing: 0.5px;

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 15px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 14px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 13px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 12px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 11px;
  }
`;

export const IconInfo = styled.div`
  margin-right: 10px;
`;

export const EmailDiv1 = styled.a`
  font-size: 13px;
  color: #212121;
  font-family: sans-serif;
  display: flex;
  flex-direction: row;
  text-decoration: none;
`;

export const TitleLocation2 = styled.h3`
  color: #616161;
  font-size: 23px;
  font-weight: bold;
  font-family: sans-serif;
  margin-bottom: 12px;

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 21px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 19px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 17px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 16px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 14px;
  }
`;

export const EmailDiv2 = styled.a`
  font-size: 13px;
  color: #212121;
  font-family: sans-serif;
  display: flex;
  flex-direction: row;
  text-decoration: none;
`;

/* Footer Base */

export const FooterBase = styled.div`
  height: 80px;
  background: linear-gradient(to top, #fff, #f4f4f4);
`;

export const AdjustFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 98%;
  padding: 30px 20px;
`;

export const RightsContainer = styled.div`
  font-size: 14px;
  font-family: 'Ubuntu', sans-serif;
  color: #616161;

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 13px;
    width: 180px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 12px;
    width: 150px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 11px;
    width: 150px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 10px;
    width: 150px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 9px;
    width: 80px;
  }
`;

export const ContentFooterBase = styled.div`
  margin-left: -130px;
  display: flex;
  flex-direction: row;

  @media (min-width: 700px) and (max-width: 800px) {
    margin-left: -80px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    margin-left: -50px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    margin-left: -30px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    margin-left: -30px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    margin-left: -10px;
  }
`;

export const TermsDiv = styled.a`
  font-size: 17px;
  font-family: 'Ubuntu', sans-serif;
  color: #616161;
  margin-right: 20px;
  text-decoration: none;

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 13px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 12px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 11px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 10px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 9px;
  }
`;

export const Privacy = styled.a`
  font-size: 17px;
  font-family: 'Ubuntu', sans-serif;
  color: #616161;
  text-decoration: none;

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 13px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 12px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 11px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 10px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 9px;
  }
`;

export const BlockContentBase = styled.a`
  text-decoration: none;

  @media (min-width: 600px) {
    min-width: 106px;
    min-height: 28px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    min-width: 86px;
    min-height: 25px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    min-width: 76px;
    min-height: 23px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    min-width: 66px;
    min-height: 21px;
  }
`;
