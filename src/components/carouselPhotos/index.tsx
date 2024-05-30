import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { SRLWrapper } from 'simple-react-lightbox';
import {
  CarouselContainer,
  CardCarousel,
  Card,
  ButtonRight,
  ButtonLeft,
  ButtonContainer,
  BlockImage
} from './styles';
import {
  RightArrow,
  RenegadeMainImage,
  RenegadeSecondImage,
  RenegadeThirdImage,
  RenegadeFourthImage,
  RenegadeFifthImage,
  RenegadeSexthImage
} from 'assets';

export const CarCarouselComponent = () => {
  const [data] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 }
  ]);

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

  const carImages = [
    RenegadeMainImage,
    RenegadeSecondImage,
    RenegadeThirdImage,
    RenegadeFourthImage,
    RenegadeFifthImage,
    RenegadeSexthImage
  ];

  return (
    <CarouselContainer>
      <SRLWrapper>
        <CardCarousel ref={carousel}>
          {data.map((item, index) => (
            <Card key={item.id}>
              <BlockImage href={carImages[index].src}>
                <Image
                  src={carImages[index]}
                  alt={`Image ${index + 1}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </BlockImage>
            </Card>
          ))}
        </CardCarousel>
      </SRLWrapper>

      <ButtonContainer>
        <ButtonLeft onClick={handleLeftClick}>
          <Image src={RightArrow} alt="Seta Esquerda"
            style={{
              width: '100%',
              height: 'auto',
            }} />
        </ButtonLeft>
        <ButtonRight onClick={handleRightClick}>
          <Image src={RightArrow} alt="Seta Direita"
            style={{
              width: '100%',
              height: 'auto',
            }} />
        </ButtonRight>
      </ButtonContainer>
    </CarouselContainer>
  );
};
