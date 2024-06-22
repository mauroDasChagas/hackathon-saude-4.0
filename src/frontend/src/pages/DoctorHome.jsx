import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { mockData } from '../mockedData/patientsDataLake';

const userName = "Renan";

const DoctorHome = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPatients = mockData.filter(patient =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const patientsWithOngoingTreatments = filteredPatients.map(patient => ({
        ...patient,
        treatments: patient.treatments.filter(treatment => treatment.status === 'ongoing')
    })).filter(patient => patient.treatments.length > 0);

    return (
        <div className="p-4 bg-stone-100 min-h-screen text-white">
            <h1 className="text-3xl text-secondary mb-6">
                Bem-vindo, dr. <span className="text-secondary font-bold">{userName}</span>
            </h1>
            <div className="mb-6 text-right">
                <Link to="/new-treatment" className="bg-secondary text-white px-6 py-3 rounded-md text-xl">
                    Adicionar Novo Tratamento
                </Link>
            </div>
            <h1 className="text-2xl text-secondary mb-6">Tratamentos em andamento</h1>
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Pesquisar por paciente"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-4 py-2 w-full rounded-md text-black"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {patientsWithOngoingTreatments.map(patient => (
                    <Card 
                        key={patient._id} 
                        id={patient._id} 
                        name={patient.name} 
                        age={patient.age} 
                        treatments={patient.treatments} 
                    />
                ))}
            </div>
        </div>
    );
}

export default DoctorHome;