import React, { useEffect, useState, useRef } from 'react';
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
  Emphasis,
  AdjustMargin,
  PaginationContainer,
  PaginationButton
} from './styles';
import { BannerFirst, Lupa, OrderIcon } from 'assets';
import { CarouselComponent } from 'components/carouselBrands';
import { CardCentral, CarData } from 'components/cardCentral';
import Header from 'components/header';
import Footer from 'components/footer';

const CARDS_PER_PAGE = 6;

export default function Home() {
  const [fakeData, setFakeData] = useState<CarData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<CarData[]>(
          'http://localhost:3000/static/test.json'
        );
        const data = response.data;
        setFakeData(data);
      } catch (error) {
        console.error('Erro ao obter dados:', error);
      }
    };

    fetchData();
  }, []);

  const nextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
    scrollToMainContent();
  };

  const prevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    scrollToMainContent();
  };

  const scrollToMainContent = () => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  let endIndex = startIndex + CARDS_PER_PAGE;
  if (endIndex > fakeData.length) {
    endIndex = fakeData.length;
  }

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

        <AdjustMargin>

          <ContentMain ref={mainContentRef}>
            <CarouselMain>
              <CarouselComponent />
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
            <ProductsFound>
              <Emphasis>{fakeData.length}</Emphasis> veículos encontrados
            </ProductsFound>
            <BlockCards>
              {fakeData.slice(startIndex, endIndex).map((carItemData) => (
                <CardCentral key={carItemData.id} carData={carItemData} />
              ))}
            </BlockCards>
            <PaginationContainer>
              <PaginationButton onClick={prevPage}>Anterior</PaginationButton>
              <PaginationButton onClick={nextPage}>Próxima</PaginationButton>
            </PaginationContainer>
          </MainContent>

        </AdjustMargin>

        <Footer />
      </PageContainer>
    </>
  );
}


