import React, { useState, MouseEvent, useContext } from 'react';
import Header from 'components/Header';
import { MainContent, PageContainer, LoginTitle, BlockInputUser, InputUserTitle, InputUser, BlockInputPassword, InputPasswordTitle, InputPassword, AcessButton, ParagraphError, FormContainer } from './styles';
import AdminHome from 'pages/Admin/ControlPanel';
import { AuthContext, TSignInData } from 'services/contexts/AuthContext';
import { signInRequest } from 'services/AuthenticationService';
import Router from 'next/router';
import { USER_DATA_KEY, ACCESS_TOKEN_KEY } from 'services/constants';

export default function AdminLogin() {
    const { user, setUser, setIsAuthenticated } = useContext(AuthContext);

    const [login, setlogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    async function signIn({ login, password }: TSignInData) {
        try {
            const data = await signInRequest({ login, password });
            const { usuario, token } = data;

            localStorage.setItem(USER_DATA_KEY, JSON.stringify(usuario));
            localStorage.setItem(ACCESS_TOKEN_KEY, token);

            setUser(usuario);
            setIsAuthenticated(true);

            console.log(usuario)

            Router.push('/Admin/ControlPanel');
        } catch (error: any) {
            console.log(error.data)
            setError(error?.response?.data?.message ?? 'Erro na requisiçao')
        }

    }

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        signIn({ login, password });
    };

    return (
        <>
            <PageContainer>
                <Header />
                {user == null ? (
                    <MainContent>
                        <LoginTitle>Login</LoginTitle>
                        <FormContainer>
                            <BlockInputUser>
                                <InputUserTitle>Usuário</InputUserTitle>
                                <InputUser type="login"
                                    name="login"
                                    placeholder="login"
                                    required
                                    onChange={(e) => setlogin(e.target.value)}
                                />
                            </BlockInputUser>
                            <BlockInputPassword>
                                <InputPasswordTitle>Senha</InputPasswordTitle>
                                <InputPassword type="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                    onChange={(e) => setPassword(e.target.value)} />
                            </BlockInputPassword>
                            <ParagraphError>{error}</ParagraphError>
                            <AcessButton type="submit"
                                onClick={(e) => handleLogin(e)}>Login</AcessButton>
                        </FormContainer>
                    </MainContent>
                ) : (
                    <AdminHome />
                )}
            </PageContainer>
        </>
    );
}
