import React from 'react';
import Image from 'next/image';
import {
  CardContainer,
  BlockImageCard,
  TitleCard,
  CarSpecifications,
  CarDate,
  FooterCard,
  CarPrice,
  SeeMore,
  ContentContainer,
  YearKmContainer,
  KmText,
  BlockIconYearKm,
  PriceEmphasis,
  BlockIconKm,
  TopContentContainer,
  ImgCard
} from './styles';
import { YearIcon, KmIcon } from 'assets';
import { CarData } from 'services/interfaces';

interface CardCentralProps {
  carData: CarData;
}

export const CardCentral: React.FC<CardCentralProps> = ({ carData }) => {
  const handleClick = () => {
    console.log('ID do carro:', carData.id);
  };

  return (
    <CardContainer>
      {carData && (
        <>
          <BlockImageCard href={`/CarPage?id=${carData.id}`} onClick={handleClick}>
            <ImgCard src={carData.image}
              style={{
                width: '100%',
              }}
            />
          </BlockImageCard>

          <ContentContainer>
            <TopContentContainer>
              <TitleCard>
                {carData.brand} {carData.name}
              </TitleCard>
              <CarSpecifications>{carData.specifications}</CarSpecifications>
              <YearKmContainer>
                <CarDate>
                  <BlockIconYearKm>
                    <Image

                      src={YearIcon}
                      alt="Ícone de um calendário"
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                    />
                  </BlockIconYearKm>
                  {carData.year}
                </CarDate>
                <KmText>
                  <BlockIconKm>
                    <Image

                      src={KmIcon}
                      alt="Ícone de um calendário"
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                    />
                  </BlockIconKm>
                  {carData.km} km
                </KmText>
              </YearKmContainer>
            </TopContentContainer>
            <FooterCard>
              <CarPrice>
                R$ <PriceEmphasis>{carData.price}</PriceEmphasis>
              </CarPrice>
              <SeeMore href={`/CarPage?id=${carData.id}`} onClick={handleClick}>Ver mais</SeeMore>
            </FooterCard>
          </ContentContainer>
        </>
      )}
    </CardContainer>
  );
};
