import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-beautysalon.rubensguimaraes.com',
  // baseURL: 'http://167.99.2.107:3333',
});

export default api;
