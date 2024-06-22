import axios from 'axios';

const geminiApiClient = axios.create({
    baseURL: 'http://localhost:8000/gemini',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const generateTreatmentSuggestions = async (prompt) => {
    const response = await geminiApiClient.post('/generate', { prompt });
    return response.data;
};