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
} from './styles';
import HeaderAdmin from 'components/HeaderAdmin';
import Alert from 'components/Alert';
import { editCarData, deleteCar } from 'services/api';
import { CarData } from 'services/interfaces';

export default function AdminLogin() {
    const [data, setData] = useState<CarData[]>([]);
    const [filterText, setFilterText] = useState('');
    const [filteredData, setFilteredData] = useState<CarData[]>([]);
    const [editableRowId, setEditableRowId] = useState<string | null>(null);
    const [editData, setEditData] = useState<Partial<CarData>>({});
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

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
                item.specifications.toLowerCase().includes(filterText.toLowerCase()) ||
                item.km.toLowerCase().includes(filterText.toLowerCase()) ||
                item.year.toLowerCase().includes(filterText.toLowerCase()) ||
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

    const handleConfirmEditRow = async () => {
        if (editableRowId && editData) {
            try {
                await editCarData(editableRowId, editData);
                const updatedData = data.map(item =>
                    item.id === editableRowId ? { ...item, ...editData } : item
                );
                setData(updatedData);
                setFilteredData(updatedData);
                setEditableRowId(null);
                setEditData({});
                setAlertMessage('Carro editado com sucesso!');
                setShowAlert(true);
            } catch (error) {
                console.error('Erro ao editar carro:', error);
                setAlertMessage('Erro ao editar carro. Por favor, tente novamente mais tarde.');
                setShowAlert(true);
            }
        }
    };

    const handleDeleteRow = async (id: string) => {
        try {
            await deleteCar(id);
            const updatedData = data.filter(item => item.id !== id);
            setData(updatedData);
            setFilteredData(updatedData);
            setAlertMessage('Carro excluído com sucesso!');
            setShowAlert(true);
        } catch (error) {
            console.error('Erro ao excluir carro:', error);
            setAlertMessage('Erro ao excluir carro. Por favor, tente novamente mais tarde.');
            setShowAlert(true);
        }
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    const columns: TableColumn<CarData>[] = [
        { name: 'ID', selector: (row: CarData) => row.id, cell: (row: CarData) => (editableRowId === row.id ? <input type="text" value={editData.id} onChange={(e) => setEditData({ ...editData, id: e.target.value })} /> : row.id) },
        { name: 'Marca', selector: (row: CarData) => row.brand, cell: (row: CarData) => (editableRowId === row.id ? <input type="text" value={editData.brand} onChange={(e) => setEditData({ ...editData, brand: e.target.value })} /> : row.brand) },
        { name: 'Nome', selector: (row: CarData) => row.name, cell: (row: CarData) => (editableRowId === row.id ? <input type="text" value={editData.name} onChange={(e) => setEditData({ ...editData, name: e.target.value })} /> : row.name) },
        { name: 'Preço', selector: (row: CarData) => row.price, cell: (row: CarData) => (editableRowId === row.id ? <input type="number" value={editData.price} onChange={(e) => setEditData({ ...editData, price: parseFloat(e.target.value) })} /> : row.price) },
        { name: 'Especificações', selector: (row: CarData) => row.specifications, cell: (row: CarData) => (editableRowId === row.id ? <input type="text" value={editData.specifications} onChange={(e) => setEditData({ ...editData, specifications: e.target.value })} /> : row.specifications) },
        { name: 'Quilometragem', selector: (row: CarData) => row.km, cell: (row: CarData) => (editableRowId === row.id ? <input type="text" value={editData.km} onChange={(e) => setEditData({ ...editData, km: e.target.value })} /> : row.km) },
        { name: 'Ano', selector: (row: CarData) => row.year, cell: (row: CarData) => (editableRowId === row.id ? <input type="text" value={editData.year} onChange={(e) => setEditData({ ...editData, year: e.target.value })} /> : row.year) },
        { name: 'Imagem', selector: (row: CarData) => row.image, cell: (row: CarData) => (editableRowId === row.id ? <input type="text" value={editData.image} onChange={(e) => setEditData({ ...editData, image: e.target.value })} /> : row.image) },
        { name: 'Cor', selector: (row: CarData) => row.color, cell: (row: CarData) => (editableRowId === row.id ? <input type="text" value={editData.color} onChange={(e) => setEditData({ ...editData, color: e.target.value })} /> : row.color) },
        { name: 'Combustível', selector: (row: CarData) => row.fuel, cell: (row: CarData) => (editableRowId === row.id ? <input type="text" value={editData.fuel} onChange={(e) => setEditData({ ...editData, fuel: e.target.value })} /> : row.fuel) },
        { name: 'Consumo Urbano', selector: (row: CarData) => row.fuelUrban, cell: (row: CarData) => (editableRowId === row.id ? <input type="text" value={editData.fuelUrban} onChange={(e) => setEditData({ ...editData, fuelUrban: e.target.value })} /> : row.fuelUrban) },
        { name: 'Consumo Rodoviário', selector: (row: CarData) => row.fuelRoad, cell: (row: CarData) => (editableRowId === row.id ? <input type="text" value={editData.fuelRoad} onChange={(e) => setEditData({ ...editData, fuelRoad: e.target.value })} /> : row.fuelRoad) },
        { name: 'Ficha Técnica', selector: (row: CarData) => row.dataSheet, cell: (row: CarData) => (editableRowId === row.id ? <input type="text" value={editData.dataSheet} onChange={(e) => setEditData({ ...editData, dataSheet: e.target.value })} /> : row.dataSheet) },
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

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (showAlert) {
            timer = setTimeout(() => {
                setShowAlert(false);
            }, 2000);
        }

        return () => clearTimeout(timer);
    }, [showAlert]);

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
            {showAlert && (
                <Alert message={alertMessage} onClose={handleCloseAlert} />
            )}
        </PageContainer>
    );
}
