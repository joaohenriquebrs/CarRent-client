import React from 'react';
import Image from 'next/image';
import {
    HeaderAdm,
    LogoHeaderContainer,
    MenuAdm,
    LinkMenu
} from './styles';
import { LogoHeader } from 'assets';

export default function HeaderAdmin() {

    return (
        <HeaderAdm>
            <LogoHeaderContainer href="/home">
                <Image src={LogoHeader} alt="Logo da empresa" layout="responsive" />
            </LogoHeaderContainer>
            <MenuAdm>
                <LinkMenu href='#'>Minha Conta</LinkMenu>
                <LinkMenu href='#'>Sair</LinkMenu>
            </MenuAdm>
        </HeaderAdm>
    );
}
