import axios from 'axios';
import { errorHandler } from '../util/errorHandler';

const api = axios.create({
  baseURL: 'https://5fea108e8ede8b0017ff14fe.mockapi.io',
});

api.interceptors.response.use((response) => {
  return response.data;
}, (error) => {
  errorHandler(error);
});

export default api;
