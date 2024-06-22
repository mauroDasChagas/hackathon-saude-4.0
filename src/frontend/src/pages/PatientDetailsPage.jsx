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
                <h2 className="text-2xl mb-2">{patient.name}</h2>
                <p className="mb-2"><strong>Idade:</strong> {patient.age}</p>
                <p className="mb-2"><strong>Tratamento:</strong> {patient.treatment}</p>
                <p className="mb-2"><strong>ID do Tratamento:</strong> {patient.treatmentId}</p>
                <p className="mb-2"><strong>Data de Início:</strong> {patient.startDate}</p>
                <p className="mb-2"><strong>Médico Responsável:</strong> {patient.doctor}</p>
                <p className="mb-2"><strong>Próxima Consulta:</strong> {patient.nextAppointment}</p>
            </div>

            <h1 className="text-3xl mt-6 mb-6 text-secondary mb-6">Histórico do paciente</h1>
            <div className="bg-primary px-4 py-6 rounded-md">

            </div>
        </div>
    );
}

export default PatientDetails;
