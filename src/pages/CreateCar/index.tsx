import React, { useState } from 'react';
import axios from 'axios';
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
import HeaderAdmin from 'components/HeaderAdmin';

export default function AdminLogin() {
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

    const handleChange = (e: any) => {
        setCarData({ ...carData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/cars', carData);
            alert('Carro adicionado com sucesso!');
        } catch (error) {
            console.error('Erro ao adicionar carro:', error);
            alert('Erro ao adicionar carro. Por favor, tente novamente mais tarde.');
        }
    };

    return (
        <PageContainer>
            <HeaderAdmin />
            <MainContent>
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
                            <CarTitle>Km/l Cidade</CarTitle>
                            <CarInput name="fuelUrban" value={carData.fuelUrban} onChange={handleChange} placeholder='13km/l urbano' />
                        </CarBlock>
                        <CarBlock>
                            <CarTitle>Km/l rodovia</CarTitle>
                            <CarInput name="fuelRoad" value={carData.fuelRoad} onChange={handleChange} placeholder='15km/l rodovia' />
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