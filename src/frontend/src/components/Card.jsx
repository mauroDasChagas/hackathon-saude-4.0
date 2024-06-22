import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, name, age, treatment, doctor, nextAppointment }) => {
    return (
        <Link to={`/patient/${id}`} className="block">
            <div className="bg-primary px-4 py-6 rounded-md hover:bg-secondary">
                <h2 className="text-2xl mb-2">{name}</h2>
                <p className="mb-1"><strong>Idade:</strong> {age}</p>
                <p className="mb-1"><strong>Tratamento:</strong> {treatment}</p>
                <p className="mb-1"><strong>Médico Responsável:</strong> {doctor}</p>
                <p><strong>Próxima Consulta:</strong> {nextAppointment}</p>
            </div>
        </Link>
    );
}

export default Card;
