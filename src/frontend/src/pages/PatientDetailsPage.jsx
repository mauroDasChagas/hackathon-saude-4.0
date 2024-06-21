import React from 'react';
import { useParams } from 'react-router-dom';
import { mockData } from '../mockedData/patients';

const PatientDetails = () => {
    const { id } = useParams();
    const patient = mockData.find(p => p.id === parseInt(id));

    if (!patient) {
        return <div className="p-4 bg-stone-100 min-h-screen text-white">Paciente não encontrado</div>;
    }

    return (
        <div className="p-4 bg-stone-100 min-h-screen text-white">
            <h1 className="text-3xl text-secondary mb-6">Detalhes do Paciente</h1>
            <div className="bg-primary px-4 py-6 rounded-md">
                <h2 className="text-2xl mb-2">{patient.title}</h2>
                <p>{patient.description}</p>
            </div>
        </div>
    );
}

export default PatientDetails;
