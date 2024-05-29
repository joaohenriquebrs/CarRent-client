import React, { useState } from 'react';
import Image from 'next/image';
import {
    HeaderAdm,
    LogoHeaderContainer,
    MenuAdm,
    LinkMenu,
    HamburgerContainer,
    HamburgerIcon,
    HamburgerBar,
    MobileMenu,
    MobileMenuLink,
} from './styles';
import { LogoHeader } from 'assets';

export default function HeaderAdmin() {
    const [showHamburger, setShowHamburger] = useState(false);

    const toggleHamburger = () => {
        setShowHamburger(!showHamburger);
    };

    return (
        <HeaderAdm>
            <LogoHeaderContainer href="/">
                <Image src={LogoHeader} alt="Logo da empresa" layout="responsive" />
            </LogoHeaderContainer>
            <MenuAdm>
                <LinkMenu href='/AdminHome'>Adm Home</LinkMenu>
                <LinkMenu href='/CreateCar'>Adicionar carro</LinkMenu>
                <LinkMenu href='#'>Sair</LinkMenu>
            </MenuAdm>
            <HamburgerContainer>
                <HamburgerIcon onClick={toggleHamburger}>
                    <HamburgerBar />
                    <HamburgerBar />
                    <HamburgerBar />
                </HamburgerIcon>
            </HamburgerContainer>
            {showHamburger && (
                <MobileMenu>
                    <MobileMenuLink href="/AdminHome">Adm Home</MobileMenuLink>
                    <MobileMenuLink href="/CreateCar">Adicionar carro</MobileMenuLink>
                    <MobileMenuLink href="#">Sair</MobileMenuLink>
                </MobileMenu>
            )}
        </HeaderAdm>
    );
}
