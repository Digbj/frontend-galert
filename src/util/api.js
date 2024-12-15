import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/alerts'; 
const API_URL = import.meta.env.VITE_BACKEND_URL;


export const getAlerts = async (params) => {
    try {
        const response = await axios.get(API_URL, { params }); 
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching alerts:', error);
        throw error;
    }
};

export const getCategories = async () => {
    try {
        const response = await axios.get(`${API_URL}/categories`); 
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};