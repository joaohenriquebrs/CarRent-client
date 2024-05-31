import React, { useContext, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
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
  MobileIconMenuLink,
  HeaderAdm,
  MenuAdm
} from './styles';
import { LogoHeader } from 'assets';
import { FaPhone, FaUser } from 'react-icons/fa';
import { AuthContext } from 'services/contexts/AuthContext';

export default function Header() {
  const [showHamburger, setShowHamburger] = useState(false);
  const { user, signOut } = useContext(AuthContext);
  const router = useRouter();

  const toggleHamburger = () => {
    setShowHamburger(!showHamburger);
  };

  const handleLogout = () => {
    try {
      signOut();
      router.push('/');
    } catch (error) {
      console.error('Erro ao efetuar logout:', error);
    }
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
            {
              user == null &&
              <LinkMenuAdm href='/Login'>
                <IconLink>
                  <FaUser />
                </IconLink>
                Login
              </LinkMenuAdm>
            }
            {
              user != null &&
              <>
                <LinkMenu href='/Admin/ControlPanel'>Painel admnistrativo</LinkMenu>
                <LinkMenu href='/Admin/CarBuilder'>Adicionar carro</LinkMenu>
                <LinkMenu onClick={handleLogout}>Sair</LinkMenu>
              </>
            }
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
          {
            user != null &&
            <>
              <MobileMenuLink href="/Admin/ControlPanel">Painel admnistrativo</MobileMenuLink>
              <MobileMenuLink href="/Admin/CarBuilder">Adicionar carro</MobileMenuLink>
              <MobileMenuLink onClick={handleLogout}>Sair</MobileMenuLink>
            </>
          }
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
  )
};
