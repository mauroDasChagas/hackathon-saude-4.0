import React from 'react';

const PatientDetails = ({ title, description }) => {
    return (
        <div className="p-4 bg-stone-100 min-h-screen text-white">
            <h1 className="text-3xl text-secondary mb-6">Detalhes do Paciente</h1>
            <div className="bg-primary px-4 py-6 rounded-md">
                <h2 className="text-2xl mb-2">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default PatientDetails;
