import axiosInstance from './AxiosInstance';
import { TSignInData, TUser } from './contexts/AuthContext';

export type TResponseLogin = {
    usuario: TUser,
    token: string;
}

export const signInRequest = async ({ login, password }: TSignInData): Promise<TResponseLogin> => {
    const response = await axiosInstance.post<TResponseLogin>('/auth', {
        login,
        password,
    });

    return response.data;
}
