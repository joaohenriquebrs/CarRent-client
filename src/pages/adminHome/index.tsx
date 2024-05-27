import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import 'datatables.net-responsive-dt';
import 'datatables.net';
import $ from 'jquery';
import {
    MainContent,
    PageContainer,
    ButtonActions
} from './styles';
import HeaderAdmin from 'components/headerAdmin';

interface CarData {
    id: string;
    brand: string;
    name: string;
    price: number;
    beforePrice: number;
    specifications: string;
    km: string;
    year: string;
    type: string;
    image: string;
    color: string;
    fuel: string;
    fuelUrban: string;
    fuelRoad: string;
    dataSheet: string;
}

export default function AdminLogin() {
    const [data, setData] = useState<CarData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<CarData[]>('http://localhost:3000/static/test.json');
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Error fetching data. Please try again later.');
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (!isLoading) {
            $('#myTable').DataTable({
                responsive: true,
                pageLength: 10
            });
        }
    }, [isLoading]);

    const deleteRow = async (index: number) => {
        const confirmation = window.confirm('Tem certeza que deseja excluir?');
        if (confirmation) {
            try {
                const id = data[index].id;
                await axios.delete(`http://localhost:3000/api/data/${id}`);
                setData(prevData => prevData.filter((_, i) => i !== index));
                alert('Row deleted successfully!');
            } catch (error) {
                console.error('Error deleting row:', error);
                alert('Error deleting row. Please try again later.');
            }
        }
    };

    const editRow = (index: number) => {
    };

    const confirmEdit = async (index: number) => {
        // Implementar lógica para confirmar a edição de uma linha
    };

    const cancelEdit = () => {
        // Implementar lógica para cancelar a edição de uma linha
    };

    const addRow = () => {
        // Implementar lógica para adicionar uma nova linha
    };

    const cancelAdd = () => {
        // Implementar lógica para cancelar adição
    };

    const confirmAdd = async () => {
        // Implementar lógica para confirmar a adição de uma nova linha
    };

    return (
        <PageContainer>
            <HeaderAdmin />
            <MainContent>
                <table id="myTable" className="display">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Marca</th>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Preço Antes</th>
                            <th>Especificações</th>
                            <th>Quilometragem</th>
                            <th>Ano</th>
                            <th>Tipo</th>
                            <th>Imagem</th>
                            <th>Cor</th>
                            <th>Combustível</th>
                            <th>Consumo Urbano</th>
                            <th>Consumo Rodoviário</th>
                            <th>Ficha Técnica</th>
                            <th>Excluir</th>
                            <th>Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.brand}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.beforePrice}</td>
                                <td>{item.specifications}</td>
                                <td>{item.km}</td>
                                <td>{item.year}</td>
                                <td>{item.type}</td>
                                <td>{item.image}</td>
                                <td>{item.color}</td>
                                <td>{item.fuel}</td>
                                <td>{item.fuelUrban}</td>
                                <td>{item.fuelRoad}</td>
                                <td>{item.dataSheet}</td>
                                <td>
                                    <ButtonActions onClick={() => deleteRow(index)}>Excluir</ButtonActions>
                                </td>
                                <td>
                                    <ButtonActions onClick={() => editRow(index)}>Editar</ButtonActions>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </MainContent>
        </PageContainer>
    );
}
