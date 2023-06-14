import axios from 'axios';

const api = axios.create({
    baseURL: 'https://apiloterias.com.br/app/'
})
export default api;