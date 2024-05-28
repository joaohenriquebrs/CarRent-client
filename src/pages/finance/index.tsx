import React from 'react';
import Image from 'next/image';
import Header from 'components/Header';
import Footer from 'components/Footer';

import {
  MainContent,
  PageContainer,
  TitlesContainer,
  TitleMain,
  SubtitleMain,
  FinanceDescriptionContainer,
  DescriptionLeft,
  TitleDescription,
  BlockFinanciers,
  Financiers,
  BlockImageFinanciers,
  FinanciersName,
  DescriptionRight,
  TitleDescriptionRight,
  ButtonDescription,
  ProcessContainer,
  TitleProcess,
  BlockProcess,
  Process,
  CardImage,
  Title,
  Description,
  ContentRight
} from './styles';
import {
  BradescoLogo,
  BvLogo,
  IconLupaFinance,
  IconPencilDocument,
  IconProfileDocument,
  ItauLogo,
  PanLogo,
  SafraLogo,
  SantanderLogo
} from 'assets';

export default function Finance() {
  return (
    <PageContainer>
      <Header />
      <MainContent>
        <TitlesContainer>
          <TitleMain>Financiar</TitleMain>
          <SubtitleMain>
            A GRUPO AUTOS tem parceria com as principais financiadoras do
            mercado.
          </SubtitleMain>
        </TitlesContainer>

        <FinanceDescriptionContainer>
          <DescriptionLeft>
            <TitleDescription>
              Faça o financiamento de veículo particular aqui com a gente. A
              GRUPO R1 AUTOS tem parceria com as principais financiadoras do
              mercado.
            </TitleDescription>
            <BlockFinanciers>
              <Financiers>
                <BlockImageFinanciers>
                  <Image src={BradescoLogo} alt="Logo do banco Bradesco" layout='responsive' />
                </BlockImageFinanciers>
                <FinanciersName>Bradesco</FinanciersName>
              </Financiers>
              <Financiers>
                <BlockImageFinanciers>
                  <Image src={ItauLogo} alt="Logo do banco Itaú" layout='responsive' />
                </BlockImageFinanciers>
                <FinanciersName>Itaú</FinanciersName>
              </Financiers>
              <Financiers>
                <BlockImageFinanciers>
                  <Image src={SantanderLogo} alt="Logo do banco Santander" layout='responsive' />
                </BlockImageFinanciers>
                <FinanciersName>Santander</FinanciersName>
              </Financiers>
              <Financiers>
                <BlockImageFinanciers>
                  <Image src={PanLogo} alt="Logo do banco Pan" layout='responsive' />
                </BlockImageFinanciers>
                <FinanciersName>Banco Pan</FinanciersName>
              </Financiers>
              <Financiers>
                <BlockImageFinanciers>
                  <Image src={SafraLogo} alt="Logo do banco Safra" layout='responsive' />
                </BlockImageFinanciers>
                <FinanciersName>Banco Safra</FinanciersName>
              </Financiers>
              <Financiers>
                <BlockImageFinanciers>
                  <Image src={BvLogo} alt="Logo do banco BV Financeira" layout='responsive' />
                </BlockImageFinanciers>
                <FinanciersName>BV Financeira</FinanciersName>
              </Financiers>
            </BlockFinanciers>
          </DescriptionLeft>
          <DescriptionRight>
            <ContentRight>
              <TitleDescriptionRight>
                Nossos consultores avaliam qual é a{' '}
                <strong>melhor taxa de juros para o seu perfil.</strong>
              </TitleDescriptionRight>
              <ButtonDescription href="https://wa.me/55119983251154" target='_blank'>Enviar mensagem</ButtonDescription>
            </ContentRight>
          </DescriptionRight>
        </FinanceDescriptionContainer>

        <ProcessContainer>
          <TitleProcess>Veja como o processo é fácil</TitleProcess>
          <BlockProcess>
            <Process>
              <CardImage>
                <Image src={IconLupaFinance} alt="Ícone de uma lupa" />
              </CardImage>
              <Title>PESQUISA</Title>
              <Description>
                Fazemos a pesquisa de taxas nos bancos com base nos seus dados
                básicos, do veículo e valor a ser financiado.
              </Description>
            </Process>
            <Process>
              <CardImage>
                <Image src={IconProfileDocument} alt="Ícone de um documento" />
              </CardImage>
              <Title>APROVAÇÃO</Title>
              <Description>
                Você escolhe a melhor opção e passamos todos os seus dados ao
                banco para aprovação.
              </Description>
            </Process>
            <Process>
              <CardImage>
                <Image
                  src={IconPencilDocument}
                  alt="Ícone de uma caneta anotando em um documento"
                />
              </CardImage>
              <Title>PRONTO!</Title>
              <Description>
                Agora é só assinar o contrato com a GRUPO AUTOS e realizar o
                pagamento.
              </Description>
            </Process>
          </BlockProcess>
        </ProcessContainer>
      </MainContent>
      <Footer />
    </PageContainer>
  );
}
