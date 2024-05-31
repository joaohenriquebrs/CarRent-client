import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext, Role } from 'services/contexts/AuthContext';
import Header from 'components/Header';
import Alert from 'components/Alert';
import { createCar } from 'services/VehicleService';
import {
    MainContent,
    PageContainer,
    CarBlock,
    CarTitle,
    CarInput,
    CarSelect,
    SubmitButton,
    BlockLeft,
    BlockRight,
    Form,
    OptionButton,
    KmLInputContainer,
    KmLInput,
    KmLText
} from './styles';

const AdminLogin: React.FC = () => {
    const { isAuthenticated, hasPermission } = useContext(AuthContext);
    const router = useRouter();
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (value.length >= 255) {
            setShowAlert(true);
            setAlertMessage('Número máximo de caracteres excedido (255 caracteres permitidos).');
            return;
        }

        if ((name === 'price' || name === 'fuelUrban' || name === 'fuelRoad' || name === 'km') && isNaN(Number(value))) {
            setAlertMessage('Este campo deve conter apenas números.');
            setShowAlert(true);
            return;
        }

        if (name === 'brand' || name === 'specifications') {
            setCarData({ ...carData, [name]: value.slice(0, 255) });
        } else {
            setCarData({ ...carData, [name]: value });
        }
    };



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isAnyFieldEmpty = Object.values(carData).some(value => value === '');
        if (isAnyFieldEmpty) {
            setAlertMessage('Por favor, preencha todos os campos.');
            setShowAlert(true);
            return;
        }

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
            <MainContent>
                {showAlert && <Alert message={alertMessage} onClose={() => setShowAlert(false)} />}
                <Form onSubmit={handleSubmit}>
                    <BlockLeft>
                        <CarBlock>
                            <CarTitle>Marca</CarTitle>
                            <CarInput name="brand" value={carData.brand} onChange={handleChange} placeholder='Jeep' maxLength={255} />
                        </CarBlock>
                        <CarBlock>
                            <CarTitle>Nome</CarTitle>
                            <CarInput name="name" value={carData.name} onChange={handleChange} placeholder='Renegade' maxLength={255} />
                        </CarBlock>
                        <CarBlock>
                            <CarTitle>Preço</CarTitle>
                            <CarInput name="price" type="text" inputMode="numeric" value={carData.price} onChange={handleChange} placeholder='130.999' maxLength={255} />
                        </CarBlock>
                        <CarBlock>
                            <CarTitle>Especificações</CarTitle>
                            <CarInput name="specifications" value={carData.specifications} onChange={handleChange} placeholder='1.8 16V FLEX LONGITUDE 4P' maxLength={255} />
                        </CarBlock>
                        <CarBlock>
                            <CarTitle>Km</CarTitle>
                            <CarInput name="km" value={carData.km} onChange={handleChange} placeholder='48.320' maxLength={255} />
                        </CarBlock>
                        <CarBlock>
                            <CarTitle>Ano</CarTitle>
                            <CarInput name="year" value={carData.year} onChange={handleChange} placeholder='2020/2021' maxLength={255} />
                        </CarBlock>
                        <CarBlock>
                            <CarTitle>Link da foto</CarTitle>
                            <CarInput name="image" value={carData.image} onChange={handleChange} placeholder='https://url' maxLength={255} />
                        </CarBlock>
                        <CarBlock>
                            <CarTitle>Cor</CarTitle>
                            <CarSelect name="color" value={carData.color} onChange={handleChange}>
                                <OptionButton value="">Selecione</OptionButton>
                                <OptionButton value="Preto">Preto</OptionButton>
                                <OptionButton value="Branco">Branco</OptionButton>
                                <OptionButton value="Prata">Prata</OptionButton>
                                <OptionButton value="Azul">Azul</OptionButton>
                                <OptionButton value="Cinza">Cinza</OptionButton>
                                <OptionButton value="Vermelho">Vermelho</OptionButton>
                                <OptionButton value="Laranja">Laranja</OptionButton>
                                <OptionButton value="Marrom">Marrom</OptionButton>
                                <OptionButton value="Verde">Verde</OptionButton>
                                <OptionButton value="Outro">Outro</OptionButton>
                            </CarSelect>
                        </CarBlock>
                        <CarBlock>
                            <CarTitle>Combustível</CarTitle>
                            <CarSelect name="fuel" value={carData.fuel} onChange={handleChange}>
                                <OptionButton value="">Selecione</OptionButton>
                                <OptionButton value="Gasolina">Gasolina</OptionButton>
                                <OptionButton value="Etanol">Etanol</OptionButton>
                                <OptionButton value="Flex">Flex</OptionButton>
                                <OptionButton value="Diesel">Diesel</OptionButton>
                                <OptionButton value="Outro">Outro</OptionButton>
                            </CarSelect>
                        </CarBlock>
                        <CarBlock>
                            <CarTitle>Km/l urbano</CarTitle>
                            <KmLInputContainer>
                                <KmLInput
                                    name="fuelUrban"
                                    type="number"
                                    value={carData.fuelUrban}
                                    onChange={handleChange}
                                    placeholder='13'
                                />
                                <KmLText>Km/l</KmLText>
                            </KmLInputContainer>
                        </CarBlock>
                        <CarBlock>
                            <CarTitle>Km/l rodovia</CarTitle>
                            <KmLInputContainer>
                                <KmLInput
                                    name="fuelRoad"
                                    type="number"
                                    value={carData.fuelRoad}
                                    onChange={handleChange}
                                    placeholder='15'
                                />
                                <KmLText>Km/l</KmLText>
                            </KmLInputContainer>
                        </CarBlock>
                        <CarBlock>
                            <CarTitle>Marcha</CarTitle>
                            <CarSelect name="dataSheet" value={carData.dataSheet} onChange={handleChange}>
                                <OptionButton value="">Selecione</OptionButton>
                                <OptionButton value="Automático">Automático</OptionButton>
                                <OptionButton value="Manual">Manual</OptionButton>
                            </CarSelect>
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