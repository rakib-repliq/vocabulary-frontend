import { axiosInstance } from '@/lib/axios/instance';

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

export const login = async (credentials: LoginCredentials) => {
  const response = await axiosInstance.post('/auth/login', credentials);
  return response.data;
};

export const register = async (credentials: RegisterCredentials) => {
  const response = await axiosInstance.post('/auth/register', credentials);
  return response.data;
};
