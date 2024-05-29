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
  BlockLogoCar,
  BlockIconYearKm,
  PriceEmphasis,
  BlockIconKm,
  TopContentContainer
} from './styles';
import { YearIcon, KmIcon, JeepLogo, RenagadeImage } from 'assets';
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
          <BlockImageCard href={`http://localhost:3000/CarPage?id=${carData.id}`} onClick={handleClick}>
            <Image
              src={RenagadeImage}
              alt={`Imagem de um carro, um ${carData.brand} ${carData.name}`}
              layout="responsive"
            />
          </BlockImageCard>

          <ContentContainer>
            <TopContentContainer>
              <TitleCard>
                <BlockLogoCar>
                  <Image src={JeepLogo} alt="Imagem da logo da Jeep" layout='responsive' />
                </BlockLogoCar>
                {carData.brand} {carData.name}
              </TitleCard>
              <CarSpecifications>{carData.specifications}</CarSpecifications>
              <YearKmContainer>
                <CarDate>
                  <BlockIconYearKm>
                    <Image
                      src={YearIcon}
                      alt="Ícone de um calendário"
                      layout="responsive"
                    />
                  </BlockIconYearKm>
                  {carData.year}
                </CarDate>
                <KmText>
                  <BlockIconKm>
                    <Image
                      src={KmIcon}
                      alt="Ícone de um calendário"
                      layout="responsive"
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
              <SeeMore href="/CarPage">Ver mais</SeeMore>
            </FooterCard>
          </ContentContainer>
        </>
      )}
    </CardContainer>
  );
};
