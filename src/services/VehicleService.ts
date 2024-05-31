import axiosInstance from './AxiosInstance';
import { CarData, CarDataPagination } from './interfaces';

export type Car = {
  id: number;
  brand: string;
  name: string;
  price: number;
  specifications: string;
  dataSheet: string;
  year: number;
  image: string;
  km: number;
  color: string;
  fuel: string;
  fuelUrban: string;
  fuelRoad: string;
};

const BASE_ENDPOINT = '/vehicle';

export const getCarsData = async (currentPage: number, perPage: number, order?: string, search?: string): Promise<CarDataPagination> => {
  try {
    const params = new URLSearchParams();
    params.append('page', currentPage.toString());
    params.append('perPage', perPage.toString());

    if (order && order.split("-").length == 2) {
      params.append('order', order);
    }

    if (search) {
      params.append('search', search);
    }

    const response = await axiosInstance.get<CarDataPagination>(`${BASE_ENDPOINT}?${params.toString()}`);
    return response.data;
  } catch (error) {
    console.log('error ao buscar listagem de veiculos', error)
    throw new Error('Error buscando listagem de veículos');
  }
};

export async function fetchCarDataById(id: number): Promise<Car> {
  try {
    const response = await axiosInstance.get<Car>(`${BASE_ENDPOINT}/${id}`);
    return response?.data;
  } catch (error) {
    console.error('Erro ao buscar os dados do carro:', error);
    throw ('Erro buscando carro por id');
  }
}

export const createCar = async (carData: Omit<CarData, 'id'>): Promise<void> => {
  try {
    await axiosInstance.post(BASE_ENDPOINT, carData);
  } catch (error) {
    console.log('Erro ao adicionar carro', error)
    throw new Error('Erro ao adicionar carro');
  }
};

export const editCarData = async (id: number, carData: Partial<CarData>): Promise<void> => {
  try {
    await axiosInstance.put(`${BASE_ENDPOINT}/${id}`, carData);
  } catch (error) {
    console.log('Erro ao editar carro', error)
    throw new Error('Erro editando carro');
  }
};

export const deleteCar = async (id: number): Promise<void> => {
  try {
    await axiosInstance.delete(`${BASE_ENDPOINT}/${id}`);
  } catch (error) {
    throw new Error('Error deletando carro');
  }
};