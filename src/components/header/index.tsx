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
  HamburgerBar,
  MobileIconMenuLink
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
          <LogoHeaderContainer href="/">
            <Image src={LogoHeader} alt="Logo da empresa"
              style={{
                width: '100%',
                height: 'auto',
              }} />
          </LogoHeaderContainer>
          <Menu>
            <LinkMenu href="/">Home</LinkMenu>
            <LinkMenu href="/Finance">Financie</LinkMenu>
            <LinkMenu href="/About">Sobre</LinkMenu>
            <PhoneLinkMenu href="https://wa.me/55119983251154" target='_blank'>
              <IconLink>
                <FaPhone />
              </IconLink>
              Telefone
            </PhoneLinkMenu>
            <LinkMenuAdm href="/Login">
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
          <MobileMenuLink href="/">Home</MobileMenuLink>
          <MobileMenuLink href="/Finance">Financie</MobileMenuLink>
          <MobileMenuLink href="/About">Sobre</MobileMenuLink>
          <MobileIconMenuLink href="https://wa.me/55119983251154" target='_blank'>
            <IconLink>
              <FaPhone />
            </IconLink>
            Telefone
          </MobileIconMenuLink>
          <MobileIconMenuLink href="/Login">
            <IconLink>
              <FaUser />
            </IconLink>Login
          </MobileIconMenuLink>
        </MobileMenu>
      )}
    </HeaderContainer>
  );
}
