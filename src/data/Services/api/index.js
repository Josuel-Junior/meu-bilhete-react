import axios from 'axios';

const api = axios.create({
    baseURL: 'https://loteriascaixa-api.herokuapp.com/api/'
})
export default api;