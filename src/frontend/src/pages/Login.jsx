// src/pages/Login.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useAuth } from '../hooks/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const { user, setUser } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (user) {
            navigate('/doctorHome'); // Redirecionar para a página desejada
        }
    }, [user, navigate]);

    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                const loggedInUser = result.user;
                setUser(loggedInUser);
                localStorage.setItem('user', JSON.stringify(loggedInUser));
                navigate('/doctorHome');
            })
            .catch((error) => {
                console.error('Erro de autenticação:', error);
            });
    };

    return (
        <div className="flex h-screen justify-center items-center bg-gradient-to-r from-teal-300 to-teal-500 text-white">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-md">
                <h1 className="text-4xl mb-8 text-secondary">Bem-vindo(a) à Open Health</h1>
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
                    onClick={() => {}}
                    className="bg-primary text-white px-6 py-3 rounded-md text-xl hover:bg-primary-dark w-full"
                >
                    Entrar
                </button>

                <button
                    className="bg-red-600 text-white px-6 py-3 rounded-md text-xl hover:bg-red-700 w-full mt-4"
                    onClick={handleGoogleLogin}
                >
                    Continuar com Google
                </button>
            </div>
        </div>
    );
};

export default Login;