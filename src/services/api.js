import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.github.com"
    //baseURL: "https://api.pexels.com/v1"
});

export default api;