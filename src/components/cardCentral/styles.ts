import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 32.3%;
  display: flex;
  height: 13.5%;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 30px;

  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 768px) and (max-width: 1150px) {
    height: 13%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContentContainer = styled.div`
  padding-left: 15px;
  padding-top: 30px;
`;

export const BlockImageCard = styled.a`
  width: 100%;
`;

export const TitleCard = styled.div`
  display: flex;
  flex-direction: row;
  color: #424242;
  font-size: 24px;
  font-weight: 700;

  @media (min-width: 768px) and (max-width: 900px) {
    font-size: 22px;
  }
`;

export const BlockLogoCar = styled.div`
  margin-top: -6px;
  margin-right: 10px;

  @media (min-width: 500px) {
    min-width: 40px;
    min-height: 40px;
  }
`;

export const CarSpecifications = styled.div`
  color: #616161;
  font-size: 15px;
  font-weight: 700;

  @media (min-width: 768px) and (max-width: 800px) {
    font-size: 14px;
  }
`;

export const YearKmContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 12px;
  margin-bottom: 30px;
`;

export const CarDate = styled.div`
  color: #616161;
  font-size: 15px;
  margin-right: 15px;
  display: flex;
  flex-direction: row;

  @media (min-width: 768px) and (max-width: 800px) {
    font-size: 14px;
  }
`;

export const KmText = styled.div`
  color: #616161;
  font-size: 15px;
  display: flex;
  flex-direction: row;

  @media (min-width: 768px) and (max-width: 800px) {
    font-size: 14px;
  }
`;

export const BlockIconYearKm = styled.div`
  width: 13px;
  margin-right: 5px;
`;

export const BlockIconKm = styled.div`
  width: 16px;
  margin-right: 5px;
`;

export const FooterCard = styled.div`
  display: flex;
  flex-direction: row;
  background: #f7f7f7;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-left: -15px;
  padding: 14px;
`;

export const CarPrice = styled.div`
  display: flex;
  flex-direction: row;
  color: #6a6c6a;
  font-size: 14px;
  font-weight: 600;
  align-items: end;

  @media (min-width: 768px) and (max-width: 800px) {
    font-size: 13px;
  }
`;

export const PriceEmphasis = styled.div`
  font-size: 24px;
  margin-left: 7px;
  font-weight: 700;
  margin-bottom: -2px;

  @media (min-width: 768px) and (max-width: 800px) {
    font-size: 22px;
  }
`;

export const SeeMore = styled.a`
  margin-right: 20px;
  color: #6a6c6a;
  padding: 10px 10px;
  font-size: 15px;
  text-decoration: none;
  border: 1px solid #6a6c6a;
  border-radius: 5px;

  &:hover {
    color: #fff;
    background-color: #6a6c6a;
    font-weight: 600;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;
