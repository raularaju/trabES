import {  AxiosError } from 'axios';
import api from './api';

export const getAllProducts = async () => {
    try {
      const response =await api.get('/product/');
      console.log(response)
      return response
    } catch (error) {
      console.error('Erro ao retornar produtos:', error);
      throw error;
    }
  };

export const createProduct = async (name:string, brand:string, expirationDate:string, quantity: number) => {
    const response = await api.post('/product/', {name, brand, expirationDate, quantity })
    return response;
}