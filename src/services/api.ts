import axios from 'axios';
import { CarData } from './interfaces';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

export const createCar = async (carData: CarData): Promise<CarData> => {
  try {
    const response = await api.post('/cars', carData);
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

export default api;
