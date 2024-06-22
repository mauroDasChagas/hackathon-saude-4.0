import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Sidebar from '../components/Sidebar';
import { getPatients } from '../api/patientsHistoryService';

const userName = "Renan";

const DoctorHome = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [patients, setPatients] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const fetchPatients = async () => {
            const data = await getPatients();
            setPatients(data);
        };

        fetchPatients();
    }, []);

    const filteredPatients = patients.filter(patient =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const patientsWithOngoingTreatments = filteredPatients.map(patient => ({
        ...patient,
        treatments: patient.treatments.filter(treatment => treatment.status === 'ongoing')
    })).filter(patient => patient.treatments.length > 0);

    return (
        <div className="p-4 bg-stone-100 min-h-screen text-white flex">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className={`flex-1 ml-${isSidebarOpen ? '64' : '12'} transition-all`}>
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
                    {patientsWithOngoingTreatments.map(patient => (
                        <Card 
                            key={patient.id} 
                            id={patient.id} 
                            name={patient.name} 
                            age={patient.age} 
                            treatments={patient.treatments} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DoctorHome;