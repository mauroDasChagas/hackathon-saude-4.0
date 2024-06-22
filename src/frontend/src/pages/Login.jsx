import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // lógica de autenticação aqui
        // onLogin();
        alert('login ainda não foi implementado!')
    };

    return (
        <div className="flex h-screen justify-center items-center bg-gradient-to-r from-teal-300 to-teal-500 text-white">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-md">
                <h1 className="text-4xl mb-8 text-secondary">Bem-vindo(a) à <strong>MedSync</strong></h1>
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
                <button
                    onClick={handleLogin}
                    className="bg-primary text-white px-6 py-3 rounded-md text-xl hover:bg-primary-dark w-full"
                >
                    Entrar
                </button>
            </div>
        </div>
    );
}

export default Login;
