import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import axios from 'axios';
import styled, { css } from 'styled-components';
import {
  MainContent,
  PageContainer,
  CarouselMain,
  ContentMain,
  BannerContainer,
  SearchContainer,
  OrderByContainer,
  OrderByText,
  BlockCards,
  ProductsFound,
  Emphasis,
  AdjustMargin,
  PaginationContainer,
  CardsPerPage,
  LabelCards,
  OptionSelect,
  SelectContainer
} from './style';
import { BannerFirst, OrderIcon } from 'assets';
import { CarouselComponent } from 'components/CarouselBrands';
import { CardCentral } from 'components/CardCentral';
import { CarData } from 'services/interfaces';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { getCarsData } from 'services/api';

const MAX_PAGES_DISPLAYED = 3;

interface PaginationButtonProps {
  active?: boolean;
}

const PaginationButton = styled.button<PaginationButtonProps>`
  background-color: transparent;
  border: none;
  padding: 4px;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  background: #f5f5f5;
  outline: none;
  border-radius: 4px;

  ${props =>
    props.active &&
    css`
      font-weight: bold;
    `}

  @media (min-width: 300px) and (max-width: 500px) {
    font-size: 13px;
    margin: -3px;
  }
`;

const PaginationEllipsis = styled.span`
  font-size: 16px;
  color: #333;

  @media (min-width: 300px) and (max-width: 500px) {
    font-size: 13px;
    margin: 0px -10px;
  }
`;

export default function Home() {
  const [fakeData, setFakeData] = useState<CarData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ascendingOrder, setAscendingOrder] = useState(false);
  const [cardsPerPage, setCardsPerPage] = useState(6);
  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCarsData();
        setFakeData(data);
      } catch (error) {
        console.error('Erro ao obter dados:', error);
      }
    };

    fetchData();
  }, []);

  const sortByPrice = () => {
    const sortedData = fakeData.slice().sort((a, b) => {
      if (ascendingOrder) {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setFakeData(sortedData);
  };

  useEffect(() => {
    sortByPrice();
  }, [ascendingOrder]);

  const toggleOrder = () => {
    setAscendingOrder(prev => !prev);
  };

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    scrollToMainContent();
  };

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

  const totalPages = Math.ceil(fakeData.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const getPageButtons = () => {
    const currentPageIndex = currentPage - 1;
    const pageButtons: (number | null)[] = [];

    if (totalPages <= MAX_PAGES_DISPLAYED) {
      for (let i = 1; i <= totalPages; i++) {
        pageButtons.push(i);
      }
    } else {
      if (currentPageIndex < MAX_PAGES_DISPLAYED - 1) {
        for (let i = 1; i <= MAX_PAGES_DISPLAYED; i++) {
          pageButtons.push(i);
        }
        pageButtons.push(null);
        pageButtons.push(totalPages);
      } else if (currentPageIndex >= totalPages - MAX_PAGES_DISPLAYED + 1) {
        pageButtons.push(1);
        pageButtons.push(null);
        for (let i = totalPages - MAX_PAGES_DISPLAYED + 2; i <= totalPages; i++) {
          pageButtons.push(i);
        }
      } else {
        pageButtons.push(1);
        pageButtons.push(null);
        const middlePage = currentPageIndex + 1;
        const offset = Math.floor(MAX_PAGES_DISPLAYED / 2);
        for (let i = middlePage - offset; i <= middlePage + offset; i++) {
          pageButtons.push(i);
        }
        pageButtons.push(null);
        pageButtons.push(totalPages);
      }
    }
    return pageButtons;
  };

  const handleCardsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCardsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

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
            <CardsPerPage>
              <LabelCards htmlFor="cardsPerPage">Cartões por página: </LabelCards>
              <SelectContainer
                id="cardsPerPage"
                value={cardsPerPage}
                onChange={handleCardsPerPageChange}
              >
                <OptionSelect value={6}>6</OptionSelect>
                <OptionSelect value={12}>12</OptionSelect>
                <OptionSelect value={18}>18</OptionSelect>
                <OptionSelect value={100}>100</OptionSelect>
              </SelectContainer>
            </CardsPerPage>

            <OrderByContainer onClick={toggleOrder}>
              <OrderByText>
                Ordenar por preço: {ascendingOrder ? 'maior a menor' : 'menor a maior'}
              </OrderByText>
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
              {getPageButtons().map((pageNumber, index) => (
                <React.Fragment key={index}>
                  {pageNumber === null ? (
                    <PaginationEllipsis>...</PaginationEllipsis>
                  ) : (
                    <PaginationButton
                      onClick={() => goToPage(pageNumber as number)}
                      active={pageNumber === currentPage}
                    >
                      {pageNumber}
                    </PaginationButton>
                  )}
                </React.Fragment>
              ))}
              <PaginationButton onClick={nextPage}>Próxima</PaginationButton>
            </PaginationContainer>
          </MainContent>
        </AdjustMargin>
        <Footer />
      </PageContainer>
    </>
  );
}

