import React, { useState } from 'react';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleRegister = () => {
        // lógica de registro aqui
        alert('Registro ainda não foi implementado!');
    };

    const handleRoleChange = (e) => {
        setRole(e.target.value); // atualizar o estado com o papel selecionado
    };

    return (
        <div className="flex h-screen justify-center items-center bg-gradient-to-r from-teal-300 to-teal-500 text-white">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-md">
                <h1 className="text-4xl mb-8 text-secondary">Registre-se</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Nome de usuário"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-3 rounded-md text-black"
                    />
                </div>
                <div className="mb-6">
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 rounded-md text-black"
                    />
                </div>
                <div className="mb-6">
                    <input
                        type="password"
                        placeholder="Confirme a senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 rounded-md text-black"
                    />
                </div>
                <div className="mb-6">
                    <select
                        value={role}
                        onChange={handleRoleChange}
                        className="w-full p-3 rounded-md text-black"
                    >
                        <option value="">Selecione seu papel</option>
                        <option value="medico">Médico</option>
                        <option value="paciente">Paciente</option>
                        <option value="hospital">Hospital</option>
                    </select>
                </div>
                <button
                    onClick={handleRegister}
                    className="bg-primary text-white px-6 py-3 rounded-md text-xl hover:bg-primary-dark w-full"
                >
                    Registrar
                </button>
            </div>
        </div>
    );
}

export default Register;