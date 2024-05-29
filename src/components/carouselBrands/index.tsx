import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import axios from 'axios';
import {
  CarouselContainer,
  CardCarousel,
  Card,
  CardTitle,
  ButtonRight,
  ButtonLeft,
  ButtonContainer,
  BlockImage
} from './styles';
import {
  RightArrow,
  AudiLogo,
  BmwLogo,
  CherryLogo,
  ChrevroletLogo,
  FiatLogo,
  FordLogo,
  HondaLogo,
  JeepLogo,
  MercedesLogo,
  NissanLogo,
  PeugeotLogo,
  RenaultLogo,
  ToyotaLogo,
  VolkswagenLogo
} from 'assets';
import { fetchCarData } from 'services/api';

export const CarouselComponent = () => {
  const [data, setData] = useState([]);
  const carousel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        const data = await fetchCarData();
        setData(data);
      } catch (error) {
        console.error('Error setting car data:', error);
      }
    };

    fetchDataAndSetState();
  }, []);

  const handleLeftClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (carousel.current) {
      const scrollAmount = carousel.current.offsetWidth / 2;
      carousel.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (carousel.current) {
      const scrollAmount = carousel.current.offsetWidth / 2;
      carousel.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const logoMappings = {
    Chevrolet: ChrevroletLogo,
    Fiat: FiatLogo,
    Ford: FordLogo,
    Honda: HondaLogo,
    Jeep: JeepLogo,
    Mercedes: MercedesLogo,
    Nissan: NissanLogo,
    Peugeot: PeugeotLogo,
    Renault: RenaultLogo,
    Toyota: ToyotaLogo,
    Audi: AudiLogo,
    BMW: BmwLogo,
    Cherry: CherryLogo,
    Volkswagen: VolkswagenLogo
  };

  return (
    <CarouselContainer>
      <CardCarousel ref={carousel}>
        {data.map((item) => {
          const { id, brand } = item;
          return (
            <Card key={id}>
              <BlockImage>
                <Image
                  src={logoMappings[brand]}
                  alt={brand}
                  layout="responsive"
                />
              </BlockImage>
              <CardTitle>{brand}</CardTitle>
            </Card>
          );
        })}
      </CardCarousel>

      <ButtonContainer>
        <ButtonLeft onClick={handleLeftClick}>
          <Image src={RightArrow} alt="Left Arrow" layout="responsive" />
        </ButtonLeft>
        <ButtonRight onClick={handleRightClick}>
          <Image src={RightArrow} alt="Right Arrow" layout="responsive" />
        </ButtonRight>
      </ButtonContainer>
    </CarouselContainer>
  );
};
