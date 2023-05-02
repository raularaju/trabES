import {  AxiosError } from 'axios';
import api from './api';

export const signup = async (name: string, email:string, password:string) => {
  const response = await api.post('/users/', { name, email, password }).catch(
    (error: AxiosError) => {
      if (error.response) {
        throw error.response.data;
      }
  });

  return response;
}

export const createUser = async (name:string, email:string, cpf:string, phone_number:string, password:string) => {
    const response = await api.post('/user/', { name, email, cpf, phone_number, password}).catch(
      (error: AxiosError) => {
        if (error.response) {
          throw error.response.data;
        }
    });
  
  return response;
}

export const login = async (email:string, password:string) => {
  const response = await api.post('/user/login/', { email, password }).catch(
    (error: AxiosError) => {
      if (error.response) {
        throw error.response.data;
      }
  });

  return response;
}

export const logout = async () => {
  const response = await api.post('/user/logout/').catch(
    (error: AxiosError) => {
      if (error.response) {
        throw error.response.data;
      }
  });

  return response;
}