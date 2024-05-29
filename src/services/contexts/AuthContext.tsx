import { createContext, useEffect, useState } from 'react';
import { setCookie, destroyCookie } from 'nookies';
import Router from 'next/router';
import { signInRequest } from '../auth';
import api from 'services/api';

type User = {
    id: string;
    name: string;
    email: string;
};

type SignInData = {
    email: string;
    password: string;
};

type AuthContextType = {
    isAuthenticated: boolean;
    user?: User | null;
    signIn: ({ email, password }: SignInData) => Promise<void>;
    signOut: () => void;
};

type AuthProviderType = {
    children: React.ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProviderType) {
    const [user, setUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(!!user);

    useEffect(() => {
        async function fetchData() {
            const authData = localStorage.getItem('authData');
            if (authData) {
                const { loggedUser } = JSON.parse(authData);
                const userId = loggedUser?.id;
                if (userId) {
                    const updatedUserResponse = await api.get(`/user/${userId}`);
                    const updatedUser = updatedUserResponse.data.data;
                    setUser(updatedUser);
                    setIsAuthenticated(true);
                }
            }
        }
        fetchData();
    }, []);

    async function signIn({ email, password }: SignInData) {
        const data = await signInRequest({ email, password });
        const { loggedUser, accessToken } = data.data;

        localStorage.setItem('authData', JSON.stringify({ loggedUser }));

        api.defaults.headers['Authorization'] = `Bearer ${accessToken}`;

        setUser(loggedUser);
        setIsAuthenticated(true);

        const isAdmin = loggedUser?.isAdmin === true;
        const redirectPath = isAdmin ? '/admin' : `/user/${loggedUser.id}`;
        setCookie(undefined, 'nextauth.isAdmin', isAdmin ? 'true' : 'false', {
            maxAge: 60 * 60 * 1 // 1 hour
        });

        Router.push(redirectPath);
    }

    async function signOut() {
        localStorage.clear();
        destroyCookie(undefined, 'nextauth.token');
        destroyCookie(undefined, 'nextauth.isAdmin');
        setIsAuthenticated(false);
        delete api.defaults.headers['Authorization'];

        setUser(null);
        Router.push('/');
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated,
                signIn,
                signOut
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
