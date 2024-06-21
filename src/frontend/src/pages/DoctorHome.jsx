import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Card from '../components/Card';
import PatientDetailsPage from './PatientDetailsPage';

const userName = "Renan";

const mockData = [
    { id: 1, title: 'Paciente 1', description: 'Descrição do Card 1' },
    { id: 2, title: 'Paciente 2', description: 'Descrição do Card 2' },
    { id: 3, title: 'Paciente 3', description: 'Descrição do Card 3' },
    { id: 4, title: 'Paciente 4', description: 'Descrição do Card 4' },
    { id: 5, title: 'Paciente 5', description: 'Descrição do Card 5' },
    { id: 6, title: 'Paciente 6', description: 'Descrição do Card 6' },
];


const DoctorHome = () => {
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
                    className="px-4 py-2 w-full rounded-md text-black"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mockData.map(card => (
                    <Card key={card.id} id={card.id} title={card.title} description={card.description} />
                ))}
            </div>
            <Routes>
                <Route path="/patient/:id" element={<PatientDetailsPage />} />
            </Routes>
        </div>
    );
}

export default DoctorHome;