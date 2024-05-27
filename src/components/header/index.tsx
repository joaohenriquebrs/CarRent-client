import React, { useState } from 'react';
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
  IconLink,
  LinkMenuAdm,
  HamburgerIcon,
  MobileMenu,
  MobileMenuLink,
  HamburgerContainer,
  HamburgerBar
} from './styles';
import { LogoHeader } from 'assets';
import { FaPhone, FaUser } from 'react-icons/fa';

export default function Header() {
  const [showHamburger, setShowHamburger] = useState(false);

  const toggleHamburger = () => {
    setShowHamburger(!showHamburger);
  };

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
              <IconLink>
                <FaPhone />
              </IconLink>
              Telefone
            </PhoneLinkMenu>
            <LinkMenuAdm href="/adminLogin">
              <IconLink>
                <FaUser />
              </IconLink>
              Login
            </LinkMenuAdm>
          </Menu>
          <HamburgerContainer>
            <HamburgerIcon onClick={toggleHamburger}>
              <HamburgerBar />
              <HamburgerBar />
              <HamburgerBar />
            </HamburgerIcon>
          </HamburgerContainer>
        </ContentSecondHeader>
      </SecondHeader>
      {showHamburger && (
        <MobileMenu>
          <MobileMenuLink href="/sellYourCar">Venda seu carro</MobileMenuLink>
          <MobileMenuLink href="/finance">Financie</MobileMenuLink>
          <MobileMenuLink href="/about">Sobre</MobileMenuLink>
          <MobileMenuLink href="#">Telefone</MobileMenuLink>
          <MobileMenuLink href="/adminLogin">Login</MobileMenuLink>
        </MobileMenu>
      )}
    </HeaderContainer>
  );
}
