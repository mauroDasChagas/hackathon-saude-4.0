import React, { useState, useEffect } from 'react';
import { getPatientById } from '../api/patientsHistoryService';

const PatientHome = () => {
    const [patient, setPatient] = useState(null);

    const patientId = '6676e4b496195046b9d0d532'; // vai mudar após o sistema de autenticação e sessão

    useEffect(() => {
        const fetchPatient = async () => {
            const data = await getPatientById(patientId);
            setPatient(data);
        }

        fetchPatient();
    }, [patientId]);

    if (!patient) {
        return <div className="p-4 bg-stone-100 min-h-screen text-white">Carregado dados do paciente...</div>;
    }

    const activeTreatments = patient.treatments.filter(treatment => treatment.status === 'ongoing');
    const completedTreatments = patient.treatments.filter(treatment => treatment.status === 'completed');

    return (
        <div className="p-4 bg-stone-100 min-h-screen text-white">
            <h1 className="text-3xl text-secondary mb-6">
                Bem-vindo(a), <span className="text-secondary font-bold">{patient.name}</span>
            </h1>
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
};

export default PatientHome;