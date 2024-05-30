import api from './api';

type signInRequestType = {
    login: string;
    password: string;
};

export async function signInRequest({ login, password }: signInRequestType) {
    const response = await api.post('/sessions', {
        login,
        password,
    });
    return response.data;
}

export async function signOutRequest() {
    const response = await api.delete('/sessions');
    return response.data;
}
