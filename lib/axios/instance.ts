import axios from 'axios';

export const baseURL = 'http://localhost:5000/api';

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
