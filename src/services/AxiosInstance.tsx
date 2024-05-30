import axios from "axios";
import { ACCESS_TOKEN_KEY } from "./constants";
import { ReactNode, useContext, useEffect } from "react";
import { AuthContext } from "./contexts/AuthContext";

const axiosInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_BASE_ENDPOINT}`,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

export type AxiosInterceptorProps = {
    children: ReactNode;
}

const AxiosInterceptor = ({ children }: AxiosInterceptorProps) => {
    const { signOut } = useContext(AuthContext);

    useEffect(() => {
        const requestInterceptor = axiosInstance.interceptors.request.use(
            (config) => {
                const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

                if (accessToken) {
                    config.headers.Authorization = `Bearer ${accessToken}`;
                }

                return config;
            },
            (error) => Promise.reject(error)
        );

        const responseInterceptor = axiosInstance.interceptors.response.use(
            (response) => response,
            async (error) => {
                console.log('Request error', error)

                if (error.response?.status === 401) {
                    signOut();
                }

                return Promise.reject(error);
            }
        );

        return () => {
            axios.interceptors.request.eject(requestInterceptor);
            axios.interceptors.response.eject(responseInterceptor);
        };
    }, [signOut]);

    return <>{children}</>;
};

export default axiosInstance;
export { AxiosInterceptor };
