import React from 'react';
import Image from 'next/image';
import Header from 'components/Header';
import Footer from 'components/Footer';

import {
  PageContainer,
  MainContent,
  TitlesContainer,
  TitleMain,
  SubtitleMain,
  FormsContainer,
  FormsContent,
  CarDatas,
  TitleCarDatas,
  InputCarDatas,
  ExampleCarDatas,
  ContactDatas,
  ContactNameContainer,
  TitleContactName,
  InputContactName,
  ContactPhoneContainer,
  TitleContactPhone,
  InputContactPhone,
  ContactEmailContainer,
  TitleContactEmail,
  InputContactEmail,
  NextStepsContainer,
  TitleNextSteps,
  BlockNextSteps,
  BlockImage,
  OptionsContainer,
  TitleOptions,
  BlockOptions,
  Options,
  CardNumber,
  Title,
  Description,
  TitleContactDatas,
  ButtonSend
} from './styles';
import { StepsImage1, StepsImage2, StepsImage3 } from 'assets';

export default function SellYourCar() {
  return (
    <PageContainer>
      <Header />
      <MainContent>
        <TitlesContainer>
          <TitleMain>Quer vender seu veículo?</TitleMain>
          <SubtitleMain>Solicite a avaliação agora!</SubtitleMain>
        </TitlesContainer>

        <FormsContainer>
          <FormsContent>
            <CarDatas>
              <TitleCarDatas>DADOS DO VEÍCULO</TitleCarDatas>
              <InputCarDatas placeholder="Seu veículo..." />
              <ExampleCarDatas>Ex: Gol 2018</ExampleCarDatas>
            </CarDatas>
            <ContactDatas>
              <TitleContactDatas>DADOS DE CONTATO</TitleContactDatas>
              <ContactNameContainer>
                <TitleContactName>Seu nome</TitleContactName>
                <InputContactName></InputContactName>
              </ContactNameContainer>

              <ContactPhoneContainer>
                <TitleContactPhone>Seu celular</TitleContactPhone>
                <InputContactPhone></InputContactPhone>
              </ContactPhoneContainer>

              <ContactEmailContainer>
                <TitleContactEmail>Seu e-mail</TitleContactEmail>
                <InputContactEmail></InputContactEmail>
              </ContactEmailContainer>
            </ContactDatas>

            <ButtonSend>Enviar</ButtonSend>
          </FormsContent>
          <NextStepsContainer>
            <TitleNextSteps>QUAIS SÃO OS PRÓXIMOS PASSOS?</TitleNextSteps>
            <BlockNextSteps>
              <BlockImage>
                <Image src={StepsImage1} alt="Ícones de usuários e mensagens" />
              </BlockImage>
              Entramos em contato
            </BlockNextSteps>
            <BlockNextSteps>
              <BlockImage>
                <Image src={StepsImage2} alt="Ícone de uma caderneta" />
              </BlockImage>
              Avaliamos seu veículo
            </BlockNextSteps>
            <BlockNextSteps>
              <BlockImage>
                <Image src={StepsImage3} alt="Ícone de um aperto de maõs" />
              </BlockImage>
              Fechamos negócio
            </BlockNextSteps>
          </NextStepsContainer>
        </FormsContainer>

        <OptionsContainer>
          <TitleOptions>Conheça as suas opções</TitleOptions>
          <BlockOptions>
            <Options>
              <CardNumber>01</CardNumber>
              <Title>VENDA NA HORA!</Title>
              <Description>
                Para quem precisa de dinheiro na hora! Compramos o seu veículo e
                pagamos à vista. Simples assim.
              </Description>
            </Options>
            <Options>
              <CardNumber>02</CardNumber>
              <Title>TROCO NA TROCA</Title>
              <Description>
                Para quem quer sair de carro novo! Você pode trocar o seu
                veículo por outro de maior ou menor valor. Se for maior,
                negociamos a diferença. Se for menor, já sai com o dinheiro no
                bolso.
              </Description>
            </Options>
            <Options>
              <CardNumber>03</CardNumber>
              <Title>CONSIGNAÇÃO</Title>
              <Description>
                Mais segurança e rentabilidade para você! Anunciamos seu veículo
                nos principais portais e passamos as propostas. Quando vendido,
                você recebe o valor à vista.
              </Description>
            </Options>
          </BlockOptions>
        </OptionsContainer>
      </MainContent>
      <Footer />
    </PageContainer>
  );
}
