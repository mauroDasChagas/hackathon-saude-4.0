import React, { useState } from 'react';
import Card from '../components/Card';
import { mockData } from '../mockedData/patients';

const userName = "Renan";

const DoctorHome = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPatients = mockData.filter(patient =>
        patient.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4 bg-stone-100 min-h-screen text-white">
            <h1 className="text-3xl text-secondary mb-6">
                Bem-vindo, dr. <span className="text-secondary font-bold">{userName}</span>
            </h1>
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
                {filteredPatients.map(patient => (
                    <Card key={patient.id} id={patient.id} title={patient.title} description={patient.description} />
                ))}
            </div>
        </div>
    );
}

export default DoctorHome;