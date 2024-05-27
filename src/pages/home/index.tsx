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
import { CarouselComponent } from 'components/carouselBrands';
import { CardCentral, CarData } from 'components/cardCentral';
import Header from 'components/header';
import Footer from 'components/footer';

export default function Home() {
  const [fakeData, setFakeData] = useState<CarData[]>([]);

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
            {fakeData.map((carItemData) => (
              <CardCentral key={carItemData.id} carData={carItemData} />
            ))}
          </BlockCards>
        </MainContent>

        <Footer />
      </PageContainer>
    </>
  );
}
