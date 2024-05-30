import React, { useState, useEffect } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import {
    MainContent,
    PageContainer,
    SearchContainer,
    SearchInput,
    ButtonActions,
    ActionButtonsWrapper,
    CardsPerPage,
    LabelCards,
    PaginationContainer,
    OptionSelect,
    SelectContainer,
    HeaderTable,
    TableContainer
} from './styles';
import HeaderAdmin from 'components/HeaderAdmin';
import Alert from 'components/Alert';
import { editCarData, deleteCar, getCarsData } from 'services/VehicleService';
import { CarData } from 'services/interfaces';
import Modal from 'components/Modal';
import styled, { css } from 'styled-components';

interface PaginationButtonProps {
    active?: boolean;
}

const PaginationButton = styled.button<PaginationButtonProps>`
  background-color: transparent;
  border: none;
  padding: 4px;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  background: #f5f5f5;
  outline: none;
  border-radius: 4px;

  ${props =>
        props.active &&
        css`
      font-weight: bold;
    `}

  @media (min-width: 300px) and (max-width: 500px) {
    font-size: 13px;
    margin: -3px;
  }
`;

const PaginationEllipsis = styled.span`
  font-size: 16px;
  color: #333;

  @media (min-width: 300px) and (max-width: 500px) {
    font-size: 13px;
    margin: 0px -10px;
  }
`;

export default function AdminHome() {
    const [data, setData] = useState<CarData[]>([]);
    const [filterText, setFilterText] = useState('');
    const [filteredData, setFilteredData] = useState<CarData[]>([]);
    const [editableRowId, setEditableRowId] = useState<number | null>(null);
    const [editData, setEditData] = useState<Partial<CarData>>({});
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [countTotal, setCountTotal] = useState<number>(0);
    const [pageButtons, setPageButtons] = useState<(number | null)[]>([1]);
    const [showModal, setShowModal] = useState(false);
    const [confirmMessage, setConfirmMessage] = useState('');
    const [carIdToDelete, setCarIdToDelete] = useState<number | null>(null);
    const [showEditConfirmModal, setShowEditConfirmModal] = useState(false);

    const closeConfirmationModal = () => {
        setShowModal(false);
        setConfirmMessage('');
        setCarIdToDelete(null);
    };

    const closeEditConfirmModal = () => {
        setShowEditConfirmModal(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, meta } = await getCarsData(currentPage, perPage);
                setData(data);
                setFilteredData(data);
                setTotalPages(Math.ceil(meta.total / perPage));
                setCountTotal(meta.total);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        fetchData();
    }, [currentPage, perPage]);

    useEffect(() => {
        const filteredItems = data.filter(
            item =>
                item.id.toString().includes(filterText) ||
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

    const handleEditRow = (id: number, rowData: CarData) => {
        setEditableRowId(id);
        setEditData(rowData);
    };

    const handleCancelEditRow = () => {
        setEditableRowId(null);
        setEditData({});
    };

    const handleConfirmEditRow = () => {
        setShowEditConfirmModal(true);
    };

    const handleSaveEditRow = async () => {
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
        closeEditConfirmModal();
    };

    const handleDeleteRow = async (id: number) => {
        setCarIdToDelete(id);
        setConfirmMessage('Tem certeza de que deseja excluir este carro?');
        setShowModal(true);
    };

    const handleDeleteConfirmed = async (id: number) => {
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
        { name: 'ID', selector: (row: CarData) => row.id.toString(), cell: (row: CarData) => (editableRowId === row.id ? <input type="number" value={editData.id?.toString() || ''} onChange={(e) => setEditData({ ...editData, id: parseInt(e.target.value) })} /> : row.id) },
        { name: 'Marca', selector: (row: CarData) => row.brand, cell: (row: CarData) => (editableRowId === row.id ? <input type="text" value={editData.brand} onChange={(e) => setEditData({ ...editData, brand: e.target.value })} /> : row.brand) },
        { name: 'Nome', selector: (row: CarData) => row.name, cell: (row: CarData) => (editableRowId === row.id ? <input type="text" value={editData.name} onChange={(e) => setEditData({ ...editData, name: e.target.value })} /> : row.name) },
        { name: 'Preço', selector: (row: CarData) => row.price, cell: (row: CarData) => (editableRowId === row.id ? <input type="number" value={editData.price} onChange={(e) => setEditData({ ...editData, price: parseFloat(e.target.value) })} /> : row.price) },
        { name: 'Especificações', selector: (row: CarData) => row.specifications, cell: (row: CarData) => (editableRowId === row.id ? <input type="text" value={editData.specifications} onChange={(e) => setEditData({ ...editData, specifications: e.target.value })} /> : row.specifications) },
        { name: 'Quilometragem', selector: (row: CarData) => row.km, cell: (row: CarData) => (editableRowId === row.id ? <input type="text" value={editData.km} onChange={(e) => setEditData({ ...editData, km: e.target.value })} /> : row.km) },
        { name: 'Ano', selector: (row: CarData) => row.year, cell: (row: CarData) => (editableRowId === row.id ? <input type="text" value={editData.year} onChange={(e) => setEditData({ ...editData, year: e.target.value })} /> : row.year) },
        {
            name: 'Imagem', selector: (row: CarData) => row.image, cell: (row: CarData) => (<div>{editableRowId === row.id ? (
                <input
                    type="text"
                    value={editData.image}
                    onChange={(e) => setEditData({ ...editData, image: e.target.value })}
                />
            ) : (
                <span title={row.image}>{`${row.image.slice(0, 50)}${row.image.length > 50 ? '...' : ''}`}</span>
            )}
            </div>
            ),
        },
        { name: 'Cor', selector: (row: CarData) => row.color, cell: (row: CarData) => (editableRowId === row.id ? <input type="text" value={editData.color} onChange={(e) => setEditData({ ...editData, color: e.target.value })} /> : row.color) },
        { name: 'Combustível', selector: (row: CarData) => row.fuel, cell: (row: CarData) => (editableRowId === row.id ? <input type="text" value={editData.fuel} onChange={(e) => setEditData({ ...editData, fuel: e.target.value })} /> : row.fuel) },
        { name: 'Consumo Urbano', selector: (row: CarData) => row.fuelUrban, cell: (row: CarData) => (editableRowId === row.id ? <input type="text" value={editData.fuelUrban} onChange={(e) => setEditData({ ...editData, fuelUrban: e.target.value })} /> : row.fuelUrban) },
        { name: 'Consumo Rodoviário', selector: (row: CarData) => row.fuelRoad, cell: (row: CarData) => (editableRowId === row.id ? <input type="text" value={editData.fuelRoad} onChange={(e) => setEditData({ ...editData, fuelRoad: e.target.value })} /> : row.fuelRoad) },
        { name: 'Ficha Técnica', selector: (row: CarData) => row.dataSheet, cell: (row: CarData) => (editableRowId === row.id ? <input type="text" value={editData.dataSheet} onChange={(e) => setEditData({ ...editData, dataSheet: e.target.value })} /> : row.dataSheet) },
        {
            name: '',
            cell: (row: CarData) =>
                editableRowId === row.id ? (
                    <></>
                ) : (
                    <ButtonActions onClick={() => handleEditRow(row.id, row)
                    } > Editar</ButtonActions >
                ),
        },
        {
            name: '',
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

    const goToPage = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPerPage(Number(event.target.value));
        setCurrentPage(1);
    };

    const getPageButtons = (countTotal: number) => {
        const currentPageIndex = currentPage - 1;
        const pageButtons: (number | null)[] = [];

        if (totalPages <= countTotal) {
            for (let i = 1; i <= totalPages; i++) {
                pageButtons.push(i);
            }
        } else {
            if (currentPageIndex < countTotal - 1 || totalPages <= countTotal + 1) {
                for (let i = 1; i <= countTotal; i++) {
                    pageButtons.push(i);
                }
                if (totalPages > countTotal + 1) {
                    pageButtons.push(null);
                    pageButtons.push(totalPages);
                }
            } else if (currentPageIndex >= totalPages - countTotal + 1) {
                pageButtons.push(1);
                pageButtons.push(null);
                for (let i = totalPages - countTotal + 2; i <= totalPages; i++) {
                    pageButtons.push(i);
                }
            } else {
                pageButtons.push(1);
                pageButtons.push(null);
                const middlePage = currentPageIndex + 1;
                const offset = Math.floor(countTotal / 2);
                for (let i = middlePage - offset; i <= middlePage + offset; i++) {
                    pageButtons.push(i);
                }
                if (totalPages > countTotal + 1) {
                    pageButtons.push(null);
                    pageButtons.push(totalPages);
                }
            }
        }
        return pageButtons;
    };

    useEffect(() => {
        const pageButtons = getPageButtons(countTotal);
        if (pageButtons) {
            setPageButtons(pageButtons);
        }
    }, [countTotal, totalPages])

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
                <HeaderTable>
                    <SearchContainer>
                        <SearchInput
                            type="text"
                            placeholder="Buscar..."
                            value={filterText}
                            onChange={e => setFilterText(e.target.value)}
                        />
                        {editableRowId && (
                            <ActionButtonsWrapper>
                                <ButtonActions onClick={handleConfirmEditRow}>Confirmar</ButtonActions>
                                <ButtonActions onClick={handleCancelEditRow}>Cancelar</ButtonActions>
                            </ActionButtonsWrapper>
                        )}
                    </SearchContainer>
                    <CardsPerPage>
                        <LabelCards htmlFor="cardsPerPage">Carros por página: </LabelCards>
                        <SelectContainer
                            id="perPage"
                            value={perPage}
                            onChange={handlePerPageChange}
                        >
                            <OptionSelect value={10}>10</OptionSelect>
                            <OptionSelect value={20}>20</OptionSelect>
                            <OptionSelect value={50}>50</OptionSelect>
                            <OptionSelect value={100}>100</OptionSelect>
                        </SelectContainer>
                    </CardsPerPage>
                </HeaderTable>
                <DataTable
                    columns={columns}
                    data={filteredData}
                    paginationPerPage={perPage}
                    paginationTotalRows={totalPages * perPage}
                    paginationRowsPerPageOptions={[10, 20, 30]}
                    onChangeRowsPerPage={(currentRowsPerPage, currentPage) => {
                        setPerPage(currentRowsPerPage);
                        setCurrentPage(currentPage);
                    }}
                    paginationComponentOptions={{
                        rowsPerPageText: 'Linhas por página',
                        rangeSeparatorText: 'de',
                        noRowsPerPage: false,
                        selectAllRowsItem: true,
                        selectAllRowsItemText: 'Todos',
                    }}

                />
                <PaginationContainer>
                    <PaginationButton onClick={prevPage}>Anterior</PaginationButton>
                    {pageButtons.map((pageNumber, index) => (
                        <React.Fragment key={index}>
                            {pageNumber === null ? (
                                <PaginationEllipsis>...</PaginationEllipsis>
                            ) : (
                                <PaginationButton
                                    onClick={() => goToPage(pageNumber as number)}
                                    active={pageNumber === currentPage}
                                >
                                    {pageNumber}
                                </PaginationButton>
                            )}
                        </React.Fragment>
                    ))}
                    <PaginationButton onClick={nextPage}>Próxima</PaginationButton>
                </PaginationContainer>
            </MainContent>
            <Modal
                show={showModal}
                message={confirmMessage}
                onConfirm={async () => {
                    if (carIdToDelete !== null) {
                        await handleDeleteConfirmed(carIdToDelete);
                        closeConfirmationModal();
                    }
                }}
                onCancel={closeConfirmationModal}
            />
            <Modal
                show={showEditConfirmModal}
                message="Tem certeza de que deseja salvar as alterações?"
                onConfirm={handleSaveEditRow}
                onCancel={closeEditConfirmModal}
            />
            {showAlert && <Alert message={alertMessage} onClose={handleCloseAlert} />}
        </PageContainer>
    );
}
