import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

export const register = async (userData) => {
    const res = await api.post('/auth/register', userData);
    return res.data;
};

export const login = async (userData) => {
    const res = await api.post('/auth/login', userData);
    return res.data;
};

export const getProducts = async () => {
    const res = await api.get('/products');
    return res.data;
};

export const createProduct = async (productData) => {
    const res = await api.post('/products', productData);
    return res.data;
};
