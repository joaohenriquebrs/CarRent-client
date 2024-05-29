import React, { useState, MouseEvent } from 'react';
import axios from 'axios';
import Header from 'components/Header';
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
    AcessButton,
    ParagraphError,
    FormContainer
} from './styles';
import AdminHome from 'pages/AdminHome';

export default function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        console.log(email, password);

        try {
            const response = await axios.post(
                'http://localhost:3000/login',
                JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );

            console.log(response.data);
            setUser(response.data);
        } catch (error: any) {
            if (error.response) {
                if (error.response.status === 401) {
                    setError('Usuário ou senha inválidos');
                } else {
                    setError('Erro ao acessar o servidor');
                }
            } else {
                setError('Erro ao acessar o servidor');
            }
        }
    };

    const handleLogout = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setUser(null);
        setError('');
    };

    return (
        <>
            <PageContainer>
                <Header />
                {user === null ? (
                    <MainContent>
                        <LoginTitle>Login</LoginTitle>
                        <FormContainer className='login-form'>
                            <BlockInputUser>
                                <InputUserTitle>Usuário</InputUserTitle>
                                <InputUser type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
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
                                className='btn-login'
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
