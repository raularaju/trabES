import {  AxiosError } from 'axios';
import api from './api';

export const getAllProducts = async () => {
    try {
      const response = await api.get('/product/');
      return response;
    } catch (error) {
      console.error('Erro ao retornar produtos:', error);
      throw error;
    }
  };