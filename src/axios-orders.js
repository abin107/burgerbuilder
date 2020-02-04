import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerapp-cc725.firebaseio.com/'
});

export default instance;