import React from 'react';
import Image from 'next/image';
import {
  HeaderContainer,
  FirstHeader,
  SecondHeader,
  OpeningHoursLabel,
  OpeningHoursInfo,
  LogoHeaderContainer,
  Menu,
  LinkMenu,
  PhoneLinkMenu,
  ContentSecondHeader,
  LogoWppPhone,
  LinkMenuAdm
} from './styles';
import { LogoHeader, WppLogo } from 'assets';

export default function Header() {
  return (
    <HeaderContainer>
      <FirstHeader>
        <OpeningHoursLabel>Horário de atendimento:</OpeningHoursLabel>
        <OpeningHoursInfo>
          Aberto de Seg à Sex das 08h às 18h | Sáb das 08h às 17h
        </OpeningHoursInfo>
      </FirstHeader>
      <SecondHeader>
        <ContentSecondHeader>
          <LogoHeaderContainer href="/home">
            <Image src={LogoHeader} alt="Logo da empresa" layout="responsive" />
          </LogoHeaderContainer>
          <Menu>
            <LinkMenu href="/sellYourCar">Venda seu carro</LinkMenu>
            <LinkMenu href="/finance">Financie</LinkMenu>
            <LinkMenu href="/about">Sobre</LinkMenu>
            <PhoneLinkMenu href="#">
              <LogoWppPhone><Image src={WppLogo} alt="Imagem da logo do WhatsApp" layout='responsive' /></LogoWppPhone>
              Telefone
            </PhoneLinkMenu>
            <LinkMenuAdm href="/adminLogin">Login</LinkMenuAdm>
          </Menu>
        </ContentSecondHeader>
      </SecondHeader>
    </HeaderContainer>

  );
}
