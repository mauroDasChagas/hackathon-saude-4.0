import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPatients, addTreatment } from '../api/patientsHistoryService';
import { generateTreatmentSuggestions } from '../api/geminiService';

const NewTreatmentPage = () => {
    const navigate = useNavigate();
    const [patientId, setPatientId] = useState('');
    const [description, setDescription] = useState('');
    const [doctor, setDoctor] = useState('');
    const [nextAppointment, setNextAppointment] = useState('');
    const [patients, setPatients] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [loadingSuggestions, setLoadingSuggestions] = useState(false);

    useEffect(() => {
        const fetchPatients = async () => {
            const data = await getPatients();
            setPatients(data);
        };

        fetchPatients();
    }, []);

    const handleGenerateSuggestions = async () => {
        if (!patientId) return;

        setLoadingSuggestions(true);
        const patient = patients.find(p => p.id === patientId);
        const prompt = `Baseado no histórico desse paciente: ${JSON.stringify(patient.treatments)}, sugira um novo tratamento para ele que garanta sua melhor recuperação possível.`;

        try {
            const response = await generateTreatmentSuggestions(prompt);
            setSuggestions(response.response.split('\n').filter(s => s.trim() !== ''));
        } catch (error) {
            console.error("Erro ao gerar sugestões de tratamento: ", error);
        } finally {
            setLoadingSuggestions(false);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (patientId) {
            const treatment = {
                description,
                doctor,
                nextAppointment,
                status: 'ongoing'
            };

            console.log("Enviando tratamento: ", treatment);

            try {
                await addTreatment(patientId, treatment);
                navigate('/doctorHome');
            } catch (error) {
                console.error("Erro ao adicionar tratamento: ", error.response.data);
            }
        }
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
                        {patients.map(patient => (
                            <option key={patient.id} value={patient.id}>
                                {patient.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-6">
                    <button
                        type="button"
                        onClick={handleGenerateSuggestions}
                        className="bg-secondary text-white px-6 py-3 rounded-md text-xl w-full"
                        disabled={loadingSuggestions}
                    >
                        {loadingSuggestions ? 'Gerando sugestões...' : 'Gerar Sugestões de Tratamento'}
                    </button>
                </div>
                {suggestions.length > 0 && (
                    <div className="mb-6">
                        <label className="block mb-2">Sugestões de Tratamento</label>
                        <ul className="list-disc pl-5">
                            {suggestions.map((suggestion, index) => (
                                <li key={index} onClick={() => setDescription(suggestion)} className="cursor-pointer">
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
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
