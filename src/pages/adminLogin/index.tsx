import React, { useState, MouseEvent } from 'react';
import Header from 'components/Header';
import { MainContent, PageContainer, LoginTitle, BlockInputUser, InputUserTitle, InputUser, BlockInputPassword, InputPasswordTitle, InputPassword, AcessButton, ParagraphError, FormContainer } from './styles';
import AdminHome from 'pages/AdminHome';
import { signInRequest } from 'services/auth';

export default function AdminLogin() {
    const [login, setlogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        console.log(login, password);

        try {
            const data = await signInRequest({ login, password });
            console.log(data);
            setUser(data);
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
