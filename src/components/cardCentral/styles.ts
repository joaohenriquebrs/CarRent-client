import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 32.3%;
  display: flex;
  height: 13.5%;
  flex-direction: column;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 30px;

  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 700px) and (max-width: 1150px) {
    height: 13%;
  }

  @media (min-width: 500px) and (max-width: 700px) {
    height: 12.5%;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    height: 12%;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    height: 11.6%;
  }
`;

export const ContentContainer = styled.div`
  padding-left: 15px;
  padding-top: 30px;

  @media (min-width: 600px) and (max-width: 700px) {
    padding-top: 20px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    padding-top: 18px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    padding-top: 15px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    padding-top: 12px;
  }
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

  @media (min-width: 800px) and (max-width: 900px) {
    font-size: 22px;
  }

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 20px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 18px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 13px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 12px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 9px;
  }
`;

export const BlockLogoCar = styled.div`
  margin-top: -6px;
  margin-right: 10px;

  @media (min-width: 500px) {
    min-width: 40px;
    min-height: 40px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    min-width: 20px;
    min-height: 20px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    min-width: 15px;
    min-height: 15px;
    margin-right: 5px;
    margin-top: -3px;
  }
`;

export const CarSpecifications = styled.div`
  color: #616161;
  font-size: 15px;
  font-weight: 700;

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 14px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 13px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 10px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 8px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 6px;
  }
`;

export const YearKmContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 12px;
  margin-bottom: 30px;

  @media (min-width: 500px) and (max-width: 600px) {
    margin-top: 10px;
    margin-bottom: 25px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    margin-top: 8px;
    margin-bottom: 20px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    margin-top: 6px;
    margin-bottom: 15px;
  }
`;

export const CarDate = styled.div`
  color: #616161;
  font-size: 15px;
  margin-right: 15px;
  display: flex;
  flex-direction: row;

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 14px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 13px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 11px;
    margin-right: 12px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 9px;
    margin-right: 9px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 7px;
    margin-right: 6px;
  }
`;

export const KmText = styled.div`
  color: #616161;
  font-size: 15px;
  display: flex;
  flex-direction: row;

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 14px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 13px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 11px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 9px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 7px;
  }
`;

export const BlockIconYearKm = styled.div`
  width: 13px;
  margin-right: 5px;

  @media (min-width: 400px) and (max-width: 500px) {
    width: 10px;
    margin-right: 3px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    width: 8px;
    margin-right: 3px;
  }
`;

export const BlockIconKm = styled.div`
  width: 16px;
  margin-right: 5px;

  @media (min-width: 400px) and (max-width: 500px) {
    width: 10px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    width: 8px;
  }
`;

export const FooterCard = styled.div`
  display: flex;
  flex-direction: row;
  background: #f7f7f7;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  border-radius-bottom: 10px;
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

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 13px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 12px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 10px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 9px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 7px;
  }
`;

export const PriceEmphasis = styled.div`
  font-size: 24px;
  margin-left: 7px;
  font-weight: 700;
  margin-bottom: -2px;

  @media (min-width: 700px) and (max-width: 800px) {
    font-size: 22px;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    font-size: 18px;
    margin-left: 5px;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 16px;
    margin-left: 4px;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 14px;
    margin-left: 3px;
  }

  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 12px;
    margin-left: 2px;
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
