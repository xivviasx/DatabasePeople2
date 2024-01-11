// components/pages/RegisterPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/LoginPage.css';
import axios from 'axios';

const RegisterPage = ({ handleLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate(); // Dodaj useNavigate hook

    const handleRegister = async () => {
        try {
            // Dodatkowa walidacja, sprawdzająca czy hasła się zgadzają
            if (password !== confirmPassword) {
                console.error('Passwords do not match');
                return;
            }

            // Wysłanie danych do backendu
            const response = await axios.post('http://localhost:8080/api/login/register', {
                username: username,
                password: password,
            });

            console.log(response.data); // Reakcja serwera na poprawne zarejestrowanie użytkownika

            // Po poprawnej rejestracji, przekieruj do strony logowania
            navigate('/login');
        } catch (error) {
            console.error('Błąd podczas rejestracji:', error);
        }
    };

    return (
        <div className="loginPage-container">
            <div className="login-container">
                <h2>Zarejestruj się</h2>
                <div>
                    <label>Login:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Hasło:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Powtórz hasło:</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <div className="button-container">
                    <button onClick={handleRegister}>Register</button>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
