import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth'; // Replace with your backend URL

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { username, password });
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response.data;
    } catch (error) {
        console.error('Login error:', error.response?.data || error.message);
        throw error;
    }
};


export const logout = () => {
    localStorage.removeItem('token');
};
