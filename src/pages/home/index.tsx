import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import {
  MainContent,
  PageContainer,
  CarouselMain,
  ContentMain,
  BannerContainer,
  SearchContainer,
  SearchBar,
  SearchIcon,
  SearchInput,
  OrderByContainer,
  OrderByText,
  BlockCards,
  ProductsFound,
  Emphasis
} from './styles';
import { BannerFirst, Lupa, OrderIcon } from 'assets';
import Header from 'components/header';
import Footer from 'components/footer';

export default function Home() {

  return (
    <>
      <PageContainer>
        <Header />
        <BannerContainer>
          <Image
            src={BannerFirst}
            alt="Banner com um texto no meio"
            layout="responsive"
          />
        </BannerContainer>

        <ContentMain>
          <CarouselMain>
          </CarouselMain>
        </ContentMain>

        <SearchContainer>
          <SearchBar>
            <SearchInput placeholder="Pesquisar..." />
            <SearchIcon>
              <Image src={Lupa} alt="Lupa de pesquisa" layout='responsive' />
            </SearchIcon>
          </SearchBar>

          <OrderByContainer>
            <OrderByText>Ordernar por</OrderByText>
            <Image
              src={OrderIcon}
              alt="Icone de ordenamento"
              layout="Responsive"
            />
          </OrderByContainer>
        </SearchContainer>
        <MainContent>
          Conteudo
        </MainContent>

        <Footer />
      </PageContainer>
    </>
  );
}
