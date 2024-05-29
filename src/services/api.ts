import axios from 'axios';
import { CarData } from './interfaces';

export type Car = {
  id: string;
  brand: string;
  name: string;
  price: number;
  specifications: string;
  dataSheet: string;
  year: number;
  km: number;
  color: string;
  fuel: string;
  fuelUrban: string;
  fuelRoad: string;
};

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

export const createCar = async (carData: Omit<CarData, 'id'>): Promise<CarData> => {
  try {
    const newCarData: CarData = {
      id: '',
      ...carData
    };

    const response = await api.post('/cars', newCarData);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao adicionar carro');
  }
};

export const getCarsData = async (): Promise<CarData[]> => {
  try {
    const response = await api.get('/static/test.json');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data');
  }
};

export const editCarData = async (id: string, carData: Partial<CarData>): Promise<void> => {
  try {
    await api.put(`/cars/${id}`, carData);
  } catch (error) {
    throw new Error('Error editing car data');
  }
};

export const deleteCar = async (id: string): Promise<void> => {
  try {
    await api.delete(`/cars/${id}`);
  } catch (error) {
    throw new Error('Error deleting car');
  }
};

export async function fetchCarData() {
  try {
    const response = await api.get('/static/test.json');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function fetchCarsData(): Promise<CarData[]> {
  try {
    const response = await api.get<CarData[]>('/static/test.json');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    throw error;
  }
}


export async function fetchCarDataById(id: string): Promise<Car | null> {
  try {
    const response = await axios.get<Car[]>('http://localhost:3000/static/test.json');
    const car = response.data.find((car) => car.id === id);
    return car || null;
  } catch (error) {
    console.error('Erro ao buscar os dados do carro:', error);
    throw error;
  }
}

export default api;
