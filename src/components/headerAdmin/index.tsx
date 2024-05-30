import React, { useState, useContext } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { HeaderAdm, LogoHeaderContainer, MenuAdm, LinkMenu, HamburgerContainer, HamburgerIcon, HamburgerBar, MobileMenu, MobileMenuLink } from './styles';
import { LogoHeader } from 'assets';
import { AuthContext } from 'services/contexts/AuthContext';

export default function HeaderAdmin() {
    const [showHamburger, setShowHamburger] = useState(false);
    const router = useRouter();
    const { signOut } = useContext(AuthContext);

    const toggleHamburger = () => {
        setShowHamburger(!showHamburger);
    };

    const handleLogout = async () => {
        try {
            await signOut();
            router.push('/Login');
        } catch (error) {
            console.error('Erro ao efetuar logout:', error);
        }
    };

    return (
        <HeaderAdm>
            <LogoHeaderContainer href="/">
                <Image src={LogoHeader} alt="Logo da empresa"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }} />
            </LogoHeaderContainer>
            <MenuAdm>
                <LinkMenu href='/'>Home</LinkMenu>
                <LinkMenu href='/Admin/HomeAdm'>Adm Home</LinkMenu>
                <LinkMenu href='/Admin/CreateCar'>Adicionar carro</LinkMenu>
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
                    <MobileMenuLink href="/Admin/HomeAdm">Adm Home</MobileMenuLink>
                    <MobileMenuLink href="/Admin/CreateCar">Adicionar carro</MobileMenuLink>
                    <MobileMenuLink onClick={handleLogout}>Sair</MobileMenuLink>
                </MobileMenu>
            )}
        </HeaderAdm>
    );
}
