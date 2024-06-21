import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, title, description }) => {
    return (
        <Link to={`/patient/${id}`} className="block">
            <div className="bg-primary px-4 py-6 rounded-md hover:bg-secondary">
                <h2 className="text-2xl mb-2">{title}</h2>
                <p>{description}</p>
            </div>
        </Link>
    );
}

export default Card;