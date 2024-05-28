import React from 'react';
import Image from 'next/image';
import {
  PageContainer,
  MainContent,
  TitleContainer,
  TextAboutContent,
  ServiveContainer,
  ServiceTitle,
  ServiceDown,
  ServiceText,
  ServiceContact,
  ServiceFirstImage,
  ServiceSecondText,
  ContactText,
  ButtonWppContact,
  ContactSecondText,
  ButtonNumberContact,
  BlockImage,
  ParagraphSpacing
} from './styles';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { IconPhone, LogoWppService, ServiceImage } from 'assets';

export default function About() {
  return (
    <PageContainer>
      <Header />
      <MainContent>
        <TitleContainer>Sobre nós</TitleContainer>
        <TextAboutContent>
          Em nossa década de atuação, ultrapassamos a marca de 5000 veículos
          vendidos, transformando clientes em parceiros!
          <ParagraphSpacing />
          Com o compromisso de oferecer veículos seminovos de alta qualidade e
          procedência, o Grupo Autos expandiu sua presença, dando origem à R3
          Multimarcas e à R5, que hoje se unem sob a bandeira do GRUPO AUTOS,
          com duas lojas: nossa megaloja na GRUPO AUTOS, na Avenida Marechal
          Paulo, no Pina, em São Paulo/SP, CEP 61010000, e a filial Grupo AUTOS
          SHOPPING, localizada na Avenida Goés Terceiro, na Imbiribeira, também
          em São Paulo/SP, CEP 61172000, juntas com um estoque que ultrapassa 80
          veículos, de todas as marcas e modelos.
          <ParagraphSpacing />
          Nosso compromisso com a QUALIDADE é evidente desde a avaliação dos
          veículos até a preparação para venda, garantindo que nossos clientes
          encontrem o seminovo dos sonhos em nossas lojas.
          <ParagraphSpacing />
          Além disso, o GRUPO AUTOS é composto por entusiastas e especialistas
          em automóveis. Nossa equipe de consultores está pronta para oferecer o
          melhor atendimento e negociação, proporcionando transparência e
          confiança em todas as etapas da compra.
          <ParagraphSpacing />
          Visite-nos ou entre em contato conosco através de nossos canais: site,
          WhatsApp, Instagram e Facebook.
        </TextAboutContent>
        <ServiveContainer>
          <ServiceTitle>ATENDIMENTO</ServiceTitle>
          <ServiceDown>
            <ServiceText>
              <ServiceFirstImage>
                <Image src={ServiceImage} alt="Logo da empresa" />
              </ServiceFirstImage>
              <ServiceSecondText>
                Vendemos e compramos carros seminovos com transparência,
                segurança e o conforto que você merece.
              </ServiceSecondText>
            </ServiceText>
            <ServiceContact>
              <ContactText>
                Entre em contato pelo Whatsapp do GRUPO AUTOS
              </ContactText>
              <ButtonWppContact href="https://wa.me/55119983251154" target='_blank'>
                <BlockImage>
                  <Image src={LogoWppService} alt="Logo do Whatsapp" />
                </BlockImage>
                &#40;11&#41;998325-1154
              </ButtonWppContact>
              <ContactSecondText>Ou ligue agora para:</ContactSecondText>
              <ButtonNumberContact href="#">
                <BlockImage>
                  <Image src={IconPhone} alt="Ícone de um telefone" />
                </BlockImage>
                &#40;11&#41;3690-2653
              </ButtonNumberContact>
            </ServiceContact>
          </ServiceDown>
        </ServiveContainer>
      </MainContent>
      <Footer />
    </PageContainer>
  );
}
