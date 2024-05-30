import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { HeaderAdm, LogoHeaderContainer, MenuAdm, LinkMenu, HamburgerContainer, HamburgerIcon, HamburgerBar, MobileMenu, MobileMenuLink } from './styles';
import { LogoHeader } from 'assets';
import { signOutRequest } from 'services/auth';

export default function HeaderAdmin() {
    const [showHamburger, setShowHamburger] = useState(false);
    const router = useRouter();

    const toggleHamburger = () => {
        setShowHamburger(!showHamburger);
    };

    const handleLogout = async () => {
        try {
            await signOutRequest();
            router.push('/login');
        } catch (error) {
            console.error('Erro ao efetuar logout:', error);
        }
    };

    return (
        <HeaderAdm>
            <LogoHeaderContainer href="/">
                <Image src={LogoHeader} alt="Logo da empresa" layout="responsive" />
            </LogoHeaderContainer>
            <MenuAdm>
                <LinkMenu href='/'>Home</LinkMenu>
                <LinkMenu href='/AdminHome'>Adm Home</LinkMenu>
                <LinkMenu href='/CreateCar'>Adicionar carro</LinkMenu>
                <LinkMenu onClick={handleLogout}>Sair</LinkMenu>
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
                    <MobileMenuLink href="/">Home</MobileMenuLink>
                    <MobileMenuLink href="/AdminHome">Adm Home</MobileMenuLink>
                    <MobileMenuLink href="/CreateCar">Adicionar carro</MobileMenuLink>
                    <MobileMenuLink onClick={handleLogout}>Sair</MobileMenuLink>
                </MobileMenu>
            )}
        </HeaderAdm>
    );
}
