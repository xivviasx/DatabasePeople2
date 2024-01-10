import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/login/authenticate', {
                username: username,
                password: password,
            });

            console.log(response.data); // Reakcja serwera na poprawne uwierzytelnienie

            // Po poprawnym uwierzytelnieniu, przekieruj do strony "/home"
            navigate('/home');
        } catch (error) {
            console.error('Błąd podczas logowania:', error);
        }
    };

    return (
        <div>
            <h2>Login Page</h2>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;
