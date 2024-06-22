import React from 'react';
import { useParams } from 'react-router-dom';
import { mockData } from '../mockedData/patientsDataLake';

const PatientDetailsPage = () => {
    const { id } = useParams();
    const patient = mockData.find(p => p._id === parseInt(id));

    if (!patient) {
        return <div className="p-4 bg-stone-100 min-h-screen text-white">Paciente não encontrado</div>;
    }

    const activeTreatments = patient.treatments.filter(treatment => treatment.status === 'ongoing');
    const completedTreatments = patient.treatments.filter(treatment => treatment.status === 'completed');

    return (
        <div className="p-4 bg-stone-100 min-h-screen text-white">
            <h1 className="text-3xl text-secondary mb-6">Detalhes do Paciente: {patient.name}</h1>

            <h2 className="text-2xl text-secondary mb-6">Tratamento em andamento</h2>
            {activeTreatments.length > 0 ? (
                activeTreatments.map(treatment => (
                    <div key={treatment.treatmentId} className="bg-primary px-4 py-6 rounded-md mb-4">
                        <p className="mb-2"><strong>Descrição:</strong> {treatment.description}</p>
                        <p className="mb-2"><strong>ID do Tratamento:</strong> {treatment.treatmentId}</p>
                        <p className="mb-2"><strong>Data de Início:</strong> {treatment.startDate}</p>
                        <p className="mb-2"><strong>Médico Responsável:</strong> {treatment.doctor}</p>
                        <p className="mb-2"><strong>Próxima Consulta:</strong> {treatment.nextAppointment}</p>
                    </div>
                ))
            ) : (
                <p className="text-secondary mb-6">Nenhum tratamento em andamento.</p>
            )}

            <h2 className="text-2xl text-secondary mb-6">Histórico de tratamentos</h2>
            {completedTreatments.length > 0 ? (
                completedTreatments.map(treatment => (
                    <div key={treatment.treatmentId} className="bg-primary px-4 py-6 rounded-md mb-4">
                        <p className="mb-2"><strong>Descrição:</strong> {treatment.description}</p>
                        <p className="mb-2"><strong>ID do Tratamento:</strong> {treatment.treatmentId}</p>
                        <p className="mb-2"><strong>Data de Início:</strong> {treatment.startDate}</p>
                        <p className="mb-2"><strong>Data de Término:</strong> {treatment.endDate}</p>
                        <p className="mb-2"><strong>Médico Responsável:</strong> {treatment.doctor}</p>
                        <p className="mb-2"><strong>Status:</strong> {treatment.status}</p>
                    </div>
                ))
            ) : (
                <p className="text-secondary mb-6">Nenhum tratamento concluído.</p>
            )}
        </div>
    );
}

export default PatientDetailsPage;