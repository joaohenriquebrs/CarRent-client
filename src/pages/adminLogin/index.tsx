import React from 'react';
import {
    MainContent,
    PageContainer,
    LoginTitle,
    BlockInputUser,
    InputUserTitle,
    InputUser,
    BlockInputPassword,
    InputPasswordTitle,
    InputPassword,
    AcessButton
} from './styles';
import Header from 'components/Header';

export default function AdminLogin() {

    return (
        <>
            <PageContainer>
                <Header />
                <MainContent>
                    <LoginTitle>LOGIN</LoginTitle>
                    <BlockInputUser>
                        <InputUserTitle>Usuário</InputUserTitle>
                        <InputUser type='text' placeholder='Seu usuário' />
                    </BlockInputUser>
                    <BlockInputPassword>
                        <InputPasswordTitle>Senha</InputPasswordTitle>
                        <InputPassword type='password' placeholder='Informe a senha' />
                    </BlockInputPassword>
                    <AcessButton href="/AdminHome">Acessar</AcessButton>
                </MainContent>
            </PageContainer>
        </>
    );
}
