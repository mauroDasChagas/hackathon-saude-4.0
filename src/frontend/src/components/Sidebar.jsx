import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`fixed top-0 left-0 h-full bg-secondary p-4 transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <button onClick={toggleSidebar} className="text-white mb-4 absolute top-4 left-full transform -translate-x-1/2 bg-secondary p-2 rounded-full shadow-lg">
                <i className={`fas ${isOpen ? 'fa-times' : 'fa-chevron-right'}`}></i>
            </button>
            <ul>
                <li className="mb-2">
                    <Link to="/new-treatment" className="text-white text-xl">
                        Novo Tratamento
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;