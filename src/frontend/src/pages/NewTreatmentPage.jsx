import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockData, addTreatment } from '../mockedData/patientsDataLake';

const NewTreatmentPage = () => {
    const navigate = useNavigate();
    const [patientId, setPatientId] = useState('');
    const [description, setDescription] = useState('');
    const [doctor, setDoctor] = useState('');
    const [nextAppointment, setNextAppointment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (patientId) {
            addTreatment(patientId, {
                description,
                doctor,
                nextAppointment,
                status: 'ongoing'
            });
        }

        navigate('/doctorHome');
    };

    return (
        <div className="p-4 bg-stone-100 min-h-screen text-white">
            <h1 className="text-3xl text-secondary mb-6">Adicionar novo tratamento</h1>
            <form onSubmit={handleSubmit} className="bg-primary p-8 rounded-md shadow-md">
                <div className="mb-6">
                    <label className="block mb-2">Paciente Existente</label>
                    <select
                        value={patientId}
                        onChange={(e) => setPatientId(e.target.value)}
                        className="w-full p-3 rounded-md text-black"
                    >
                        <option value="">Selecione um paciente existente</option>
                        {mockData.map(patient => (
                            <option key={patient._id} value={patient._id}>
                                {patient.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-6">
                    <label className="block mb-2">Descrição do Tratamento</label>
                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-3 rounded-md text-black"
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-2">Médico Responsável</label>
                    <input
                        type="text"
                        placeholder="Médico"
                        value={doctor}
                        onChange={(e) => setDoctor(e.target.value)}
                        className="w-full p-3 rounded-md text-black"
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-2">Próxima Consulta</label>
                    <input
                        type="date"
                        value={nextAppointment}
                        onChange={(e) => setNextAppointment(e.target.value)}
                        className="w-full p-3 rounded-md text-black"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-secondary text-white px-6 py-3 rounded-md text-xl w-full"
                >
                    Adicionar Tratamento
                </button>
            </form>
        </div>
    );
};

export default NewTreatmentPage;
