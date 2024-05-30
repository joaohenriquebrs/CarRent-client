import { useRouter } from 'next/router';
import { useContext, ReactNode } from 'react';
import { AuthContext } from 'services/contexts/AuthContext';

type PrivateRouteProps = {
    children: ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const router = useRouter();
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        router.push('/Login');
        return null;
    }

    return <>{children}</>;
};

export default PrivateRoute;
