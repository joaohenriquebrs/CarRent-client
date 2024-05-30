import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  MainContent,
  PageContainer,
  LeftContainer,
  TitleCarContainer,
  TitleCar,
  UnderContent,
  TitleCarText,
  NewPrice,
  DatasheetContainer,
  TitleDatasheet,
  DetailsDatasheet,
  InfoDatasheet,
  Info5Datasheet,
  FuelType,
  ConsuptionUrban,
  ConsuptionHighway,
  GuaranteeContainer,
  TitleGuarantee,
  TextGuarantee,
  InformationsContainer,
  TitleInformations,
  TextInformations,
  RightContainer,
  CardContact,
  ButtonSendMessage,
  ContactWpp,
  ContactNumber,
  AdressText,
  TitleCarLocation,
  ButtonContactDown,
  BorderTitleContainer,
  ContentTitle,
  Emphasis,
  EmphasisPrice,
  PricesBlock,
  NamesCarContainer,
  BlockIconContainer,
  TextCarLocation,
  PhotosCarContainer,
  PhotoMainContainer,
  CardContactMobile,
} from './styles';

import {
  JeepLogo,
  IconShift,
  IconCalendar,
  IconColor,
  IconKm,
  IconDiesel,
  IconWpp,
  IconPhone,
  IconLocation
} from 'assets';

import { CarCarouselComponent } from 'components';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Loading from 'components/Loading';
import OthersDetailsComponent from 'components/OthersDetails';
import { useRouter } from 'next/router';
import { fetchCarDataById, Car } from 'services/VehicleService';

export default function CarPage() {
  const [carData, setCarData] = useState<Car | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const { id } = router.query;
        console.log('ID do carro:', id);
        if (typeof id === 'string') {
          const carId = parseInt(id, 10);
          if (!isNaN(carId)) {
            const car = await fetchCarDataById(carId);
            if (car) {
              setCarData(car);
            } else {
              console.error('Carro não encontrado');
            }
          } else {
            console.error('ID do carro inválido:', id);
          }
        }
      } catch (error) {
        console.error('Erro ao buscar os dados do carro:', error);
      }
    };

    if (router.query.id) {
      fetchCarData();
    }
  }, [router.query]);


  if (!carData) return <Loading />;

  return (
    <>
      <PageContainer>
        <Header />

        <PhotosCarContainer>
          <PhotoMainContainer>
            <CarCarouselComponent />
          </PhotoMainContainer>
        </PhotosCarContainer>

        <MainContent>
          <LeftContainer key={carData.id}>
            <TitleCarContainer>
              <ContentTitle>
                <UnderContent>
                  <NamesCarContainer>
                    <TitleCar>
                      <Emphasis>{carData.brand} {carData.name}</Emphasis>
                    </TitleCar>
                    <TitleCarText>
                      {carData.brand} {carData.name} {carData.specifications}
                    </TitleCarText>
                  </NamesCarContainer>
                  <PricesBlock>
                    <NewPrice> R$ <EmphasisPrice>{carData.price}</EmphasisPrice>
                    </NewPrice>
                  </PricesBlock>
                </UnderContent>
              </ContentTitle>
              <BorderTitleContainer></BorderTitleContainer>
            </TitleCarContainer>

            <DatasheetContainer>
              <TitleDatasheet>FICHA TÉCNICA</TitleDatasheet>
              <DetailsDatasheet>
                <InfoDatasheet>
                  <BlockIconContainer>
                    <Image src={IconShift} alt="Ícone de um câmbio de carro" />
                  </BlockIconContainer>
                  {carData.dataSheet}
                </InfoDatasheet>
                <InfoDatasheet>
                  <BlockIconContainer>
                    <Image src={IconCalendar} alt="Ícone de um câmbio de carro" />
                  </BlockIconContainer>
                  {carData.year}
                </InfoDatasheet>
                <InfoDatasheet>
                  <BlockIconContainer>
                    <Image src={IconKm} alt="Ícone de um câmbio de carro" />
                  </BlockIconContainer>
                  {carData.km} km
                </InfoDatasheet>
                <InfoDatasheet>
                  <BlockIconContainer>
                    <Image src={IconColor} alt="Ícone de um câmbio de carro" />
                  </BlockIconContainer>
                  {carData.color}
                </InfoDatasheet>
                <Info5Datasheet>
                  <FuelType>
                    <BlockIconContainer>
                      <Image src={IconDiesel} alt="Ícone de um câmbio de carro" />
                    </BlockIconContainer>
                    {carData.fuel}
                  </FuelType>
                  <ConsuptionUrban>{carData.fuelUrban} urbano</ConsuptionUrban>
                  <ConsuptionHighway>{carData.fuelRoad} rodovia</ConsuptionHighway>
                </Info5Datasheet>
              </DetailsDatasheet>
            </DatasheetContainer>
            <OthersDetailsComponent />
            <GuaranteeContainer>
              <TitleGuarantee>GARANTIA</TitleGuarantee>
              <TextGuarantee>Garantia da Loja (3 meses)</TextGuarantee>
            </GuaranteeContainer>
            <InformationsContainer>
              <TitleInformations>+ INFORMAÇÕES</TitleInformations>
              <TextInformations>
                A procura de um {carData.brand} {carData.name} {carData.specifications} - {carData.color} - {carData.year} seminovo? Aqui tem. 3 Meses de garantia. Ano: {carData.year} KM: {carData.km} km. Potência: {carData.dataSheet}. Consumo: Urbano: {carData.fuelUrban} Km/l - Rodovia: {carData.fuelRoad} Km/l. Gostou deste carro? Temos uma equipe de atendimento on-line pronta para te atender. Tire todas suas dúvidas de forma rápida e descomplicada, através do nosso WhatsApp (11)998325-1154, ou se preferir, faça uma visita. Nosso endereço é Avenida Marechal Paulo, nº 124, Pina, São Paulo - São Paulo. Te esperamos!
              </TextInformations>
            </InformationsContainer>
          </LeftContainer>
          <RightContainer>
            <CardContact>
              <ButtonSendMessage href='https://wa.me/55119983251154' target='_blank'>Enviar mensagem</ButtonSendMessage>
              <ContactWpp>
                <BlockIconContainer>
                  <Image src={IconWpp} alt="Ícone do whatsapp" />
                </BlockIconContainer>
                (11)998325-1154
              </ContactWpp>
              <ContactNumber>
                <BlockIconContainer>
                  <Image src={IconPhone} alt="Ícone de um telefone" />
                </BlockIconContainer>
                (11)3690-2653
              </ContactNumber>
              <AdressText>
                <BlockIconContainer>
                  <Image src={IconLocation} alt="Ícone de localização" />
                </BlockIconContainer>
                Onde estamos
              </AdressText>
              <TitleCarLocation>Este veículo está na loja</TitleCarLocation>
              <TextCarLocation>
                <BlockIconContainer>
                  <Image src={IconLocation} alt="Ícone de localização" />
                </BlockIconContainer>
                GRUPO AUTOS
              </TextCarLocation>
              <ButtonContactDown href="https://wa.me/55119983251154" target='_blank'>Avalie seu carro</ButtonContactDown>
            </CardContact>
          </RightContainer>
        </MainContent>
        <CardContactMobile>
          <CardContact>
            <ButtonSendMessage href='https://wa.me/55119983251154' target='_blank'>Enviar mensagem</ButtonSendMessage>
            <ContactWpp>
              <BlockIconContainer>
                <Image src={IconWpp} alt="Ícone do whatsapp" />
              </BlockIconContainer>
              (11)998325-1154
            </ContactWpp>
            <ContactNumber>
              <BlockIconContainer>
                <Image src={IconPhone} alt="Ícone de um telefone" />
              </BlockIconContainer>
              (11)3690-2653
            </ContactNumber>
            <AdressText>
              <BlockIconContainer>
                <Image src={IconLocation} alt="Ícone de localização" />
              </BlockIconContainer>
              Onde estamos
            </AdressText>
            <TitleCarLocation>Este veículo está na loja</TitleCarLocation>
            <TextCarLocation>
              <BlockIconContainer>
                <Image src={IconLocation} alt="Ícone de localização" />
              </BlockIconContainer>
              GRUPO AUTOS
            </TextCarLocation>
            <ButtonContactDown href="https://wa.me/55119983251154r" target='_blank'>Avalie seu carro</ButtonContactDown>
          </CardContact>
        </CardContactMobile>
        <Footer />
      </PageContainer>
    </>
  );
}