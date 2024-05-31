import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
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
  SelectContainer,
  SearchInput,
  SearchContainerContent,
  LeftSearch,
  RightSearch
} from './style';
import { BannerFirst, OrderIcon } from 'assets';
import { CarouselComponent } from 'components/CarouselBrands';
import { CardCentral } from 'components/CardCentral';
import { CarData } from 'services/interfaces';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { getCarsData } from 'services/VehicleService';

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
  const [vehicleData, setDataVehicle] = useState<CarData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ascendingOrder, setAscendingOrder] = useState(false);
  const [cardsPerPage, setCardsPerPage] = useState(9);
  const [countTotal, setCountTotal] = useState<number>(0);
  const [pageButtons, setPageButtons] = useState<(number | null)[]>([1]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [searchText, setSearchText] = useState('');

  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const orderDirection = ascendingOrder ? 'asc' : 'desc';
        const { data, meta } = await getCarsData(currentPage, cardsPerPage, `price-${orderDirection}`, searchText);
        setDataVehicle(data);
        setCountTotal(meta.total);

        if (meta.total > 0 && meta.perPage > 0) {
          setTotalPages(Math.ceil(meta.total / meta.perPage));
        }
      } catch (error) {
        console.error('Erro ao obter dados:', error);
      }
    };

    fetchData();
  }, [ascendingOrder, currentPage, cardsPerPage, searchText]);


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

  const getPageButtons = (countTotal: number) => {
    const currentPageIndex = currentPage - 1;
    const pageButtons: (number | null)[] = [];

    if (totalPages <= countTotal) {
      for (let i = 1; i <= totalPages; i++) {
        pageButtons.push(i);
      }
    } else {
      if (currentPageIndex < countTotal - 1) {
        for (let i = 1; i <= countTotal; i++) {
          pageButtons.push(i);
        }
        pageButtons.push(null);
        pageButtons.push(totalPages);
      } else if (currentPageIndex >= totalPages - countTotal + 1) {
        pageButtons.push(1);
        pageButtons.push(null);
        for (let i = totalPages - countTotal + 2; i <= totalPages; i++) {
          pageButtons.push(i);
        }
      } else {
        pageButtons.push(1);
        pageButtons.push(null);
        const middlePage = currentPageIndex + 1;
        const offset = Math.floor(countTotal / 2);
        for (let i = middlePage - offset; i <= middlePage + offset; i++) {
          pageButtons.push(i);
        }
        pageButtons.push(null);
        pageButtons.push(totalPages);
      }
    }
    return pageButtons;
  };

  useEffect(() => {
    const pageButtons = getPageButtons(countTotal);
    if (pageButtons) {
      setPageButtons(pageButtons);
    }
  }, [countTotal, totalPages])

  const handleCardsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCardsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  return (
    <>
      <PageContainer>
        <BannerContainer>
          <Image
            src={BannerFirst}
            alt="Banner com um texto no meio"
            priority
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </BannerContainer>

        <AdjustMargin>

          <ContentMain ref={mainContentRef}>
            <CarouselMain>
              <CarouselComponent />
            </CarouselMain>
          </ContentMain>

          <SearchContainer>
            <LeftSearch>
              <SearchContainerContent>
                <SearchInput
                  type="text"
                  placeholder="Pesquisar por nome..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </SearchContainerContent>
            </LeftSearch>

            <RightSearch>
              <CardsPerPage>
                <LabelCards htmlFor="cardsPerPage">Carros por página: </LabelCards>
                <SelectContainer
                  id="cardsPerPage"
                  value={cardsPerPage}
                  onChange={handleCardsPerPageChange}
                >
                  <OptionSelect value={9}>9</OptionSelect>
                  <OptionSelect value={18}>18</OptionSelect>
                  <OptionSelect value={27}>27</OptionSelect>
                  <OptionSelect value={54}>54</OptionSelect>
                </SelectContainer>
              </CardsPerPage>

              <OrderByContainer onClick={toggleOrder}>
                <OrderByText>
                  Ordenar por preço: {ascendingOrder ? 'menor a maior' : 'maior a menor'}
                </OrderByText>
                <Image
                  src={OrderIcon}
                  alt="Icone de ordenamento"
                  style={{
                    width: '15px',
                    height: '15px',
                  }}
                />
              </OrderByContainer>
            </RightSearch>
          </SearchContainer>
          <MainContent>
            <ProductsFound>
              <Emphasis>{countTotal}</Emphasis> veículos encontrados
            </ProductsFound>
            <BlockCards>
              {vehicleData.map((carItemData) => (
                <CardCentral key={carItemData.id} carData={carItemData} />
              ))}
            </BlockCards>
            <PaginationContainer>
              <PaginationButton onClick={prevPage}>Anterior</PaginationButton>
              {pageButtons.map((pageNumber, index) => (
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
      </PageContainer>
    </>
  );
}
