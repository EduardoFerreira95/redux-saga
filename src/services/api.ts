import axios from 'axios';

const api = axios.create({
  baseURL: 'https://5fea108e8ede8b0017ff14fe.mockapi.io',
});

export default api;
