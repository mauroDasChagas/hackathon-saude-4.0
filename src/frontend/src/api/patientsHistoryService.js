import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://localhost:32770/patientsHistoryService',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getPatients = async () => {
    const response = await apiClient.get('/patients');
    return response.data;
};

export const getPatientById = async (id) => {
    const response = await apiClient.get(`/patients/${id}`);
    return response.data;
};

export const createPatient = async (patient) => {
    const response = await apiClient.post('/patients', patient);
    return response.data;
};

export const updatePatient = async (id, patient) => {
    const response = await apiClient.put(`/patients/${id}`, patient);
    return response.data;
};

export const deletePatient = async (id) => {
    const response = await apiClient.delete(`/patients/${id}`);
    return response.data;
};

export const addTreatment = async (patientId, treatment) => {
    const response = await apiClient.post(`/patients/${patientId}/treatments`, treatment);
    return response.data;
}
