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

export const CarCarouselComponent = (props: { media: string[] }) => {
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
      <SRLWrapper>
        <CardCarousel ref={carousel}>
          {props?.media?.length > 0 && props?.media?.map((item, index) => (
            <Card key={index}>
              <BlockImage href={item}>
                <img
                  src={item}
                  alt={'Imagem do carro'}
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
