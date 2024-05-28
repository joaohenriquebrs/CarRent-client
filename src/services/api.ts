import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

export const createCar = async (carData: any) => {
  try {
    const response = await api.post('/cars', carData);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao adicionar carro');
  }
};

export const getCarsData = async () => {
  try {
    const response = await axios.get('/static/test.json');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data');
  }
};

export const editCarData = async (id: string, carData: any) => {
  try {
    await api.put(`/cars/${id}`, carData);
  } catch (error) {
    throw new Error('Error editing car data');
  }
};

export const deleteCar = async (id: string) => {
  try {
    await api.delete(`/cars/${id}`);
  } catch (error) {
    throw new Error('Error deleting car');
  }
};

export default api;
