import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable, { TableColumn } from 'react-data-table-component';
import {
    MainContent,
    PageContainer,
    SearchContainer,
    SearchInput,
    ButtonActions,
    ActionButtonsWrapper,
    InputField,
} from './styles';
import HeaderAdmin from 'components/HeaderAdmin';

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
    const [filterText, setFilterText] = useState('');
    const [filteredData, setFilteredData] = useState<CarData[]>([]);
    const [editableRowId, setEditableRowId] = useState<string | null>(null);
    const [editData, setEditData] = useState<Partial<CarData>>({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<CarData[]>('http://localhost:3000/static/test.json');
                setData(response.data);
                setFilteredData(response.data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const filteredItems = data.filter(
            item =>
                item.id.toLowerCase().includes(filterText.toLowerCase()) ||
                item.brand.toLowerCase().includes(filterText.toLowerCase()) ||
                item.name.toLowerCase().includes(filterText.toLowerCase()) ||
                item.price.toString().includes(filterText) ||
                item.beforePrice.toString().includes(filterText) ||
                item.specifications.toLowerCase().includes(filterText.toLowerCase()) ||
                item.km.toLowerCase().includes(filterText.toLowerCase()) ||
                item.year.toLowerCase().includes(filterText.toLowerCase()) ||
                item.type.toLowerCase().includes(filterText.toLowerCase()) ||
                item.color.toLowerCase().includes(filterText.toLowerCase()) ||
                item.fuel.toLowerCase().includes(filterText.toLowerCase()) ||
                item.fuelUrban.toLowerCase().includes(filterText.toLowerCase()) ||
                item.fuelRoad.toLowerCase().includes(filterText.toLowerCase()) ||
                item.dataSheet.toLowerCase().includes(filterText.toLowerCase())
        );
        setFilteredData(filteredItems);
    }, [filterText, data]);

    const handleEditRow = (id: string, rowData: CarData) => {
        setEditableRowId(id);
        setEditData(rowData);
    };

    const handleCancelEditRow = () => {
        setEditableRowId(null);
        setEditData({});
    };

    const handleConfirmEditRow = () => {
        if (editableRowId) {
            const updatedData = data.map(item =>
                item.id === editableRowId ? { ...item, ...editData } : item
            );
            setData(updatedData);
            setEditableRowId(null);
            setEditData({});
        }
    };

    const handleDeleteRow = async (id: string) => {
        try {
            await axios.delete(`http://localhost:3000/cars/${id}`);
            const updatedData = data.filter(item => item.id !== id);
            setData(updatedData);
            setFilteredData(updatedData);
            alert('Carro excluído com sucesso!');
        } catch (error) {
            console.error('Erro ao excluir carro:', error);
            alert('Erro ao excluir carro. Por favor, tente novamente mais tarde.');
        }
    };

    const columns: TableColumn<CarData>[] = [
        { name: 'ID', selector: (row: CarData) => row.id },
        { name: 'Marca', selector: (row: CarData) => row.brand },
        { name: 'Nome', selector: (row: CarData) => row.name },
        { name: 'Preço', selector: (row: CarData) => row.price },
        { name: 'Preço Antes', selector: (row: CarData) => row.beforePrice },
        { name: 'Especificações', selector: (row: CarData) => row.specifications },
        { name: 'Quilometragem', selector: (row: CarData) => row.km },
        { name: 'Ano', selector: (row: CarData) => row.year },
        { name: 'Tipo', selector: (row: CarData) => row.type },
        { name: 'Imagem', selector: (row: CarData) => row.image },
        { name: 'Cor', selector: (row: CarData) => row.color },
        { name: 'Combustível', selector: (row: CarData) => row.fuel },
        { name: 'Consumo Urbano', selector: (row: CarData) => row.fuelUrban },
        { name: 'Consumo Rodoviário', selector: (row: CarData) => row.fuelRoad },
        { name: 'Ficha Técnica', selector: (row: CarData) => row.dataSheet },
        {
            name: 'Ações',
            cell: (row: CarData) =>
                editableRowId === row.id ? (
                    <ActionButtonsWrapper>
                        <ButtonActions onClick={handleConfirmEditRow}>Confirmar</ButtonActions>
                        <ButtonActions onClick={handleCancelEditRow}>Cancelar</ButtonActions>
                    </ActionButtonsWrapper>
                ) : (
                    <ButtonActions onClick={() => handleEditRow(row.id, row)}>Editar</ButtonActions>
                ),
        },
        {
            name: 'Excluir',
            cell: (row: CarData) => (
                <ButtonActions onClick={() => handleDeleteRow(row.id)}>Excluir</ButtonActions>
            ),
        },
    ];

    const paginationComponentOptions = {
        rowsPerPageText: 'Linhas por página',
        rangeSeparatorText: 'de',
        noRowsPerPage: false,
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    return (
        <PageContainer>
            <HeaderAdmin />
            <MainContent>
                <SearchContainer>
                    <SearchInput
                        type="text"
                        placeholder="Buscar..."
                        value={filterText}
                        onChange={e => setFilterText(e.target.value)}
                    />
                </SearchContainer>
                <DataTable
                    columns={columns}
                    data={filteredData}
                    pagination
                    paginationComponentOptions={paginationComponentOptions}
                />
            </MainContent>
        </PageContainer>
    );
}
