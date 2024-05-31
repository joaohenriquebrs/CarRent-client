import React, { useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
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

type Brand = 'Chevrolet' | 'Fiat' | 'Ford' | 'Honda' | 'Jeep' | 'Mercedes' | 'Nissan' | 'Peugeot' | 'Renault' | 'Toyota' | 'Audi' | 'BMW' | 'Cherry' | 'Volkswagen';

const logoMappings: Record<Brand, StaticImageData> = {
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

export const CarouselComponent = () => {
  const carousel = useRef<HTMLDivElement | null>(null);

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

  return (
    <CarouselContainer>
      <CardCarousel ref={carousel}>
        {Object.keys(logoMappings).map((brand) => (
          <Card key={brand}>
            <BlockImage>
              <Image
                src={logoMappings[brand as Brand]}
                alt={brand}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </BlockImage>
            <CardTitle>{brand}</CardTitle>
          </Card>
        ))}
      </CardCarousel>

      <ButtonContainer>
        <ButtonLeft onClick={handleLeftClick}>
          <Image src={RightArrow} alt="Left Arrow"
            style={{
              width: '100%',
              height: 'auto',
            }} />
        </ButtonLeft>
        <ButtonRight onClick={handleRightClick}>
          <Image src={RightArrow} alt="Right Arrow"
            style={{
              width: '100%',
              height: 'auto',
            }} />
        </ButtonRight>
      </ButtonContainer>
    </CarouselContainer>
  );
};
