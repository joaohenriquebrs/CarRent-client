import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
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
  OthersDetailsContainer,
  TitleOthers,
  OthersContainer,
  InfoOthers,
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
  BlockLogoCar,
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
  CardContactMobile
} from './styles';

import {
  JeepLogo,
  IconShift,
  IconCalendar,
  IconColor,
  IconKm,
  IconDiesel,
  IconOk,
  IconWpp,
  IconPhone,
  IconLocation
} from 'assets';

import { CarCarouselComponent } from 'components';
import Header from 'components/Header';
import Footer from 'components/Footer';

type Car = {
  id: string;
  brand: string;
  name: string;
  price: number;
  specifications: string;
  dataSheet: string;
  year: number;
  km: number;
  color: string;
  fuel: string;
  fuelUrban: string;
  fuelRoad: string;
};

export default function CarPage() {
  const [carData, setCarData] = useState<Car | null>(null);

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/static/test.json');
        console.log('Fetched data:', response.data);
        setCarData(response.data[0]);
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    };

    fetchCarData();
  }, []);

  if (!carData) return <div>Loading...</div>;

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
                <BlockLogoCar>
                  <Image src={JeepLogo} alt={`Imagem da logo da ${carData.brand}`} />
                </BlockLogoCar>
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
                    <NewPrice>
                      por R$ <EmphasisPrice>{carData.price}</EmphasisPrice>
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
            <OthersDetailsContainer>
              <TitleOthers>OPCIONAIS</TitleOthers>
              <OthersContainer>
                <InfoOthers>
                  <BlockIconContainer>
                    <Image src={IconOk} alt="Ícone de um símbolo de ok" />
                  </BlockIconContainer>
                  Airbag motorista
                </InfoOthers>
                <InfoOthers>
                  <BlockIconContainer>
                    <Image src={IconOk} alt="Ícone de um símbolo de ok" />
                  </BlockIconContainer>
                  Airbag passageiro
                </InfoOthers>
                <InfoOthers>
                  <BlockIconContainer>
                    <Image src={IconOk} alt="Ícone de um símbolo de ok" />
                  </BlockIconContainer>
                  Ar-condicionado
                </InfoOthers>
                <InfoOthers>
                  <BlockIconContainer>
                    <Image src={IconOk} alt="Ícone de um símbolo de ok" />
                  </BlockIconContainer>
                  Bancos de couro
                </InfoOthers>
                <InfoOthers>
                  <BlockIconContainer>
                    <Image src={IconOk} alt="Ícone de um símbolo de ok" />
                  </BlockIconContainer>
                  Computador de bordo
                </InfoOthers>
                <InfoOthers>
                  <BlockIconContainer>
                    <Image src={IconOk} alt="Ícone de um símbolo de ok" />
                  </BlockIconContainer>
                  Direção elétrica
                </InfoOthers>
                <InfoOthers>
                  <BlockIconContainer>
                    <Image src={IconOk} alt="Ícone de um símbolo de ok" />
                  </BlockIconContainer>
                  Distribuição eletrônica de frenagem
                </InfoOthers>
                <InfoOthers>
                  <BlockIconContainer>
                    <Image src={IconOk} alt="Ícone de um símbolo de ok" />
                  </BlockIconContainer>
                  Escapamento Esportivo
                </InfoOthers>
                <InfoOthers>
                  <BlockIconContainer>
                    <Image src={IconOk} alt="Ícone de um símbolo de ok" />
                  </BlockIconContainer>
                  Farol de neblina
                </InfoOthers>
                <InfoOthers>
                  <BlockIconContainer>
                    <Image src={IconOk} alt="Ícone de um símbolo de ok" />
                  </BlockIconContainer>
                  Freios ABS
                </InfoOthers>
                <InfoOthers>
                  <BlockIconContainer>
                    <Image src={IconOk} alt="Ícone de um símbolo de ok" />
                  </BlockIconContainer>
                  Rodas de liga leve
                </InfoOthers>
                <InfoOthers>
                  <BlockIconContainer>
                    <Image src={IconOk} alt="Ícone de um símbolo de ok" />
                  </BlockIconContainer>
                  Ajuste de altura
                </InfoOthers>
                <InfoOthers>
                  <BlockIconContainer>
                    <Image src={IconOk} alt="Ícone de um símbolo de ok" />
                  </BlockIconContainer>
                  Alarme
                </InfoOthers>
                <InfoOthers>
                  <BlockIconContainer>
                    <Image src={IconOk} alt="Ícone de um símbolo de ok" />
                  </BlockIconContainer>
                  Aquecimento dos bancos
                </InfoOthers>
                <InfoOthers>
                  <BlockIconContainer>
                    <Image src={IconOk} alt="Ícone de um símbolo de ok" />
                  </BlockIconContainer>
                  Ar Condicionado Digital
                </InfoOthers>
                <InfoOthers>
                  <BlockIconContainer>
                    <Image src={IconOk} alt="Ícone de um símbolo de ok" />
                  </BlockIconContainer>
                  Ar-quente
                </InfoOthers>
                <InfoOthers>
                  <BlockIconContainer>
                    <Image src={IconOk} alt="Ícone de um símbolo de ok" />
                  </BlockIconContainer>
                  Assistente de Partida em Rampa
                </InfoOthers>
                <InfoOthers>
                  <BlockIconContainer>
                    <Image src={IconOk} alt="Ícone de um símbolo de ok" />
                  </BlockIconContainer>
                  Câmbio automático
                </InfoOthers>
                <InfoOthers>
                  <BlockIconContainer>
                    <Image src={IconOk} alt="Ícone de um símbolo de ok" />
                  </BlockIconContainer>
                  Câmera de Ré
                </InfoOthers>
                <InfoOthers>
                  <BlockIconContainer>
                    <Image src={IconOk} alt="Ícone de um símbolo de ok" />
                  </BlockIconContainer>
                  Chamada assistência de emergência
                </InfoOthers>
                <InfoOthers>
                  <BlockIconContainer>
                    <Image src={IconOk} alt="Ícone de um símbolo de ok" />
                  </BlockIconContainer>
                  Chave presença
                </InfoOthers>
                <InfoOthers>
                  <BlockIconContainer>
                    <Image src={IconOk} alt="Ícone de um símbolo de ok" />
                  </BlockIconContainer>
                  Comando de áudio e telefone no volante
                </InfoOthers>
                <InfoOthers>
                  <BlockIconContainer>
                    <Image src={IconOk} alt="Ícone de um símbolo de ok" />
                  </BlockIconContainer>
                  Conexão Bluetooth
                </InfoOthers>
              </OthersContainer>
            </OthersDetailsContainer>
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