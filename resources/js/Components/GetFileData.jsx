// services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

export const getFilesData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/files`);
        return response.data;
    } catch (error) {
        // Manejo de errores
        console.error('Error al obtener datos de archivos:', error);
        throw error;
    }
};
