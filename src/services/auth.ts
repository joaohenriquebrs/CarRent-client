import api from './api';

type signInRequestType = {
    email: string;
    password: string;
};

export async function signInRequest({ email, password }: signInRequestType) {
    const response = await api.post('/sessions', {
        email,
        password,
    });
    return response.data;
}

export async function signOutRequest() {
    const response = await api.delete('/sessions');
    return response.data;
}
