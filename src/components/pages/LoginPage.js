import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ handleLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('');
    const navigate = useNavigate();

    const handleLoginClick = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/login/authenticate', {
                username: username,
                password: password,
            });

            const userType = response.data; // lub response.data.userType w zależności od struktury odpowiedzi

            console.log(userType);
            handleLogin(userType);
            navigate('/home');
        } catch (error) {
            console.error('Błąd podczas logowania:', error);
        }
    };


    const handleRegisterClick = () => {
        navigate('/register');
    };

    return (
        <div className="loginPage-container">
            <div className="login-container">
                <h2>Logowanie</h2>
                <div>
                    <label>Login:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Hasło:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="button-container">
                    <button onClick={handleLoginClick}>Zaloguj</button>
                    <button onClick={handleRegisterClick}>Zarejestruj</button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
