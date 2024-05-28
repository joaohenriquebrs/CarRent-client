import styled from 'styled-components';

/* Standards */

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Montserrat, sans-serif;
`;

export const PhotosCarContainer = styled.div`
  margin-top: 123px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PhotoMainContainer = styled.div`
  width: 90vw;
`;

export const MainContent = styled.div`
  margin: 35px 0px 70px 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1100px) {
    align-items: center;
    justify-content: center;
    margin: 0px 0px 70px 0px;
  }
`;

export const LeftContainer = styled.div`
  margin-left: 30px;
  width: 65%;

  @media (min-width: 300px) and (max-width: 600px) {
    margin-left: 0px;
  }
`;

export const TitleCarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;

  @media (min-width: 700px) and (max-width: 800px) {
    margin-bottom: 40px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    margin-bottom: 30px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    margin-bottom: 20px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    margin-bottom: 20px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    margin-bottom: 20px;
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BorderTitleContainer = styled.div`
  border-bottom: 1px solid #f5f5f5;
  height: 1px;
  width: 100%;
  margin-top: 20px;
`;

export const TitleCar = styled.div`
  font-size: 22px;
  color: #616161;

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 20px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 18px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 16px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 14px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 12px;
  }
`;

export const NamesCarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BlockLogoCar = styled.div``;

export const Emphasis = styled.div`
  font-weight: bold;
`;

export const UnderContent = styled.div`
  margin-top: 8px;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: auto;
`;

export const TitleCarText = styled.div`
  font-size: 18px;
  color: #424242;
  margin-top: 10px;
  font-weight: 500;

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 16px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 14px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 12px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 10px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 8px;
  }
`;

export const NewPrice = styled.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  font-weight: 600;

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 14px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 12px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 10px;
    margin-left: 30px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 9px;
    margin-left: 20px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 8px;
    margin-left: 20px;
  }
`;

export const EmphasisPrice = styled.div`
  font-weight: 700;
  margin-left: 5px;
  font-size: 28px;
  color: #6a6c6a;

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 24px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 22px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 20px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 18px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 16px;
  }
`;

export const PricesBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  margin-left: 60px;

  @media (min-width: 500px) and (max-width: 600px) {
    margin-left: 30px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    margin-left: 20px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    margin-left: 15px;
  }
`;

export const DatasheetContainer = styled.div`
  margin-bottom: 100px;

  @media (min-width: 700px) and (max-width: 800px) {
    margin-bottom: 40px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    margin-bottom: 30px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    margin-bottom: 20px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    margin-bottom: 20px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    margin-bottom: 20px;
  }
`;

export const TitleDatasheet = styled.div`
  color: #212121;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 20px;

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 17px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 15px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 12px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 10px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 8px;
  }
`;

export const DetailsDatasheet = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
`;

export const InfoDatasheet = styled.div`
  color: #616161;
  font-size: 16px;
  width: 33.33%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 13px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 12px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 11px;
    margin-bottom: 20px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 10px;
    margin-bottom: 15px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 9px;
    margin-bottom: 10px;
  }
`;

export const BlockIconContainer = styled.div`
  margin-right: 8px;

  @media (min-width: 300px) and (max-width: 400px) {
  }
`;

export const Info5Datasheet = styled.div`
  color: #616161;
  font-size: 16px;

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

export const FuelType = styled.div`
  font-weight: 600;
  display: flex;
  flex-direction: row;
`;

export const ConsuptionUrban = styled.div`
  margin-left: 19px;
  margin-top: 6px;
`;

export const ConsuptionHighway = styled.div`
  margin-left: 19px;
  margin-top: 6px;
`;

export const OthersDetailsContainer = styled.div`
  margin-bottom: 50px;
  width: 100%;

  @media (min-width: 700px) and (max-width: 800px) {
    margin-bottom: 40px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    margin-bottom: 30px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    margin-bottom: 20px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    margin-bottom: 20px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    margin-bottom: 20px;
  }
`;

export const TitleOthers = styled.div`
  color: #212121;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 20px;

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 18px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 16px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 14px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 12px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 10px;
  }
`;

export const OthersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 5px;
`;

export const InfoOthers = styled.div`
  display: flex;
  flex-direction: row;
  width: 33.33%;
  margin-bottom: 20px;
  font-size: 16px;
  color: #616161;

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
    font-size: 8px;
  }
`;

export const GuaranteeContainer = styled.div`
  margin-bottom: 50px;

  @media (min-width: 700px) and (max-width: 800px) {
    margin-bottom: 40px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    margin-bottom: 30px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    margin-bottom: 20px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    margin-bottom: 20px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    margin-bottom: 20px;
  }
`;

export const TitleGuarantee = styled.div`
  color: #212121;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 20px;

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 18px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 16px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 14px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 12px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 10px;
  }
`;

export const TextGuarantee = styled.div`
  font-size: 16px;
  color: #616161;

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

export const InformationsContainer = styled.div`
  width: 95%;
`;

export const TitleInformations = styled.div`
  color: #212121;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 20px;

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 18px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 16px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 14px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 12px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 10px;
  }
`;

export const TextInformations = styled.div`
  font-size: 14px;
  color: #616161;
  line-height: 28px;
  font-weight: 500;

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 12px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 11px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 10px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 9px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 8px;
  }
`;

export const RightContainer = styled.div`
  margin-right: 30px;
  width: 300px;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const CardContact = styled.div`
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  border-radius: 10px;
  position: sticky;
  top: 150px;
  max-height: calc(100vh - 105px);
  overflow-y: auto;
`;

export const ButtonSendMessage = styled.button`
  border: none;
  cursor: pointer;
  background: #6a6c6a;
  margin: 0px 20px;
  border-radius: 5px;
  padding: 14px 0px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 25px;

  transition:
    transform 0.4s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.07);
  }

  @media (min-width: 300px) and (max-width: 800px) {
    font-size: 15px;
    padding: 12px 0px;
  }
`;

export const ContactWpp = styled.div`
  color: #6a6c6a;
  font-size: 16px;
  margin-bottom: 10px;
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 12px;
  }
`;

export const ContactNumber = styled.div`
  color: #6a6c6a;
  font-size: 16px;
  margin-bottom: 10px;
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 12px;
  }
`;

export const AdressText = styled.div`
  color: #6a6c6a;
  font-size: 16px;
  margin-bottom: 15px;
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 11px;
  }
`;

export const TitleCarLocation = styled.div`
  padding-left: 20px;
  color: #616161;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 12px;
  }
`;

export const TextCarLocation = styled.div`
  color: #6a6c6a;
  font-size: 16px;
  margin-bottom: 15px;
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 11px;
  }
`;

export const ButtonContactDown = styled.a`
  border: none;
  cursor: pointer;
  background: #000;
  margin: 0px 20px;
  border-radius: 5px;
  padding: 14px 0px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 25px;
  text-decoration: none;
  display: flex;
  justify-content: center;

  transition:
    transform 0.4s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.07);
  }

  @media (min-width: 300px) and (max-width: 800px) {
    font-size: 15px;
    padding: 12px 0px;
  }
`;

export const CardContactMobile = styled.div`
  width: 100%;
  padding: 0px 50px;
  margin-bottom: 40px;

  @media (min-width: 1100px) {
    display: none;
  }
`;