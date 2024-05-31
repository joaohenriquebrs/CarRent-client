import { createContext, useEffect, useState } from 'react';
import Router from 'next/router';
import { USER_DATA_KEY } from 'services/constants';


export enum Role {
    ADMINISTRATOR = 'ADMINISTRATOR',
}

export type TUser = {
    id: number,
    name: string,
    login: string,
    createdAt: Date,
    status: string,
    role: Role,
};

export type TSignInData = {
    login: string;
    password: string;
};

type AuthContextType = {
    isAuthenticated: boolean;
    user?: TUser | null;
    setUser: (user: TUser) => void;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
    signOut: () => void;
    hasPermission: (requiredRole: Role) => boolean
};

type AuthProviderType = {
    children: React.ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProviderType) {
    const [user, setUser] = useState<TUser | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(!!user);

    useEffect(() => {
        async function fetchData() {
            const authData = localStorage.getItem(USER_DATA_KEY);
            if (authData) {
                const loggedUser = JSON.parse(authData);

                setUser(loggedUser);
                setIsAuthenticated(true);
            }
        }

        fetchData();
    }, []);

    const signOut = () => {
        localStorage.clear();
        setUser(null);
        setIsAuthenticated(false);
        Router.push('/');
    }

    const hasPermission = (requiredRole: Role): boolean => {
        if (!user) return false;
        return user.role === requiredRole;
    };


    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated,
                setUser,
                setIsAuthenticated,
                signOut,
                hasPermission
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
