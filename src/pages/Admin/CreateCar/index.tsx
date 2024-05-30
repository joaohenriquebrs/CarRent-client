import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext, Role } from 'services/contexts/AuthContext';
import HeaderAdmin from 'components/HeaderAdmin';
import Alert from 'components/Alert';
import { createCar } from 'services/VehicleService';
import {
    MainContent,
    PageContainer,
    CarBlock,
    CarTitle,
    CarInput,
    SubmitButton,
    BlockLeft,
    BlockRight,
    Form
} from './styles';

const AdminLogin: React.FC = () => {
    const { isAuthenticated, hasPermission } = useContext(AuthContext);
    const router = useRouter();
    const [carData, setCarData] = useState({
        brand: '',
        name: '',
        price: '',
        specifications: '',
        km: '',
        year: '',
        image: '',
        color: '',
        fuel: '',
        fuelUrban: '',
        fuelRoad: '',
        dataSheet: '',
    });

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCarData({ ...carData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const carDataWithParsedPrice = {
                ...carData,
                price: parseFloat(carData.price)
            };
            await createCar(carDataWithParsedPrice);
            setAlertMessage('Carro adicionado com sucesso!');
            setShowAlert(true);
        } catch (error) {
            console.error('Erro ao adicionar carro:', error);
            setAlertMessage('Erro ao adicionar carro. Por favor, tente novamente mais tarde.');
            setShowAlert(true);
        }
    };

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (showAlert) {
            timer = setTimeout(() => {
                setShowAlert(false);
            }, 2000);
        }

        return () => clearTimeout(timer);
    }, [showAlert]);

    useEffect(() => {
        if (!isAuthenticated || !hasPermission(Role.ADMINISTRATOR)) {
            router.push('/login');
        }
    }, [isAuthenticated, hasPermission, router]);

    return (
        <PageContainer>
            <HeaderAdmin />
            <MainContent>
                {showAlert && <Alert message={alertMessage} onClose={() => setShowAlert(false)} />}
                <Form onSubmit={handleSubmit}>
                    <BlockLeft>
                        <CarBlock>
                            <CarTitle>Marca</CarTitle>
                            <CarInput name="brand" value={carData.brand} onChange={handleChange} placeholder='Jeep' />
                        </CarBlock>
                        <CarBlock>
                            <CarTitle>Nome</CarTitle>
                            <CarInput name="name" value={carData.name} onChange={handleChange} placeholder='Renegade' />
                        </CarBlock>
                        <CarBlock>
                            <CarTitle>Preço</CarTitle>
                            <CarInput name="price" type="number" value={carData.price} onChange={handleChange} placeholder='130.999' />
                        </CarBlock>
                        <CarBlock>
                            <CarTitle>Especificações</CarTitle>
                            <CarInput name="specifications" value={carData.specifications} onChange={handleChange} placeholder='1.8 16V FLEX LONGITUDE 4P' />
                        </CarBlock>
                        <CarBlock>
                            <CarTitle>Km</CarTitle>
                            <CarInput name="km" value={carData.km} onChange={handleChange} placeholder='48.320' />
                        </CarBlock>
                        <CarBlock>
                            <CarTitle>Ano</CarTitle>
                            <CarInput name="year" value={carData.year} onChange={handleChange} placeholder='2020/2021' />
                        </CarBlock>
                        <CarBlock>
                            <CarTitle>Link da foto</CarTitle>
                            <CarInput name="image" value={carData.image} onChange={handleChange} placeholder='https://url' />
                        </CarBlock>
                        <CarBlock>
                            <CarTitle>Cor</CarTitle>
                            <CarInput name="color" value={carData.color} onChange={handleChange} placeholder='Cinza' />
                        </CarBlock>
                        <CarBlock>
                            <CarTitle>Combustível</CarTitle>
                            <CarInput name="fuel" value={carData.fuel} onChange={handleChange} placeholder='Diesel' />
                        </CarBlock>
                        <CarBlock>
                            <CarTitle>Km/l urbano</CarTitle>
                            <CarInput name="fuelUrban" value={carData.fuelUrban} onChange={handleChange} placeholder='13km/l' />
                        </CarBlock>
                        <CarBlock>
                            <CarTitle>Km/l rodovia</CarTitle>
                            <CarInput name="fuelRoad" value={carData.fuelRoad} onChange={handleChange} placeholder='15km/l' />
                        </CarBlock>
                        <CarBlock>
                            <CarTitle>Marcha</CarTitle>
                            <CarInput name="dataSheet" value={carData.dataSheet} onChange={handleChange} placeholder='Automático' />
                        </CarBlock>
                    </BlockLeft>
                    <BlockRight>
                        <SubmitButton type="submit">Adicionar Carro</SubmitButton>
                    </BlockRight>
                </Form>
            </MainContent>
        </PageContainer>
    );
}

export default AdminLogin;
