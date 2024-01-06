import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PracaPOST = () => {
    const [nazwaStanowiska, setNazwaStanowiska] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPraca = {
            nazwaStanowiska: nazwaStanowiska || undefined,
        };

        try {
            // Sending a POST request using axios
            await axios.post('http://localhost:8080/praca', newPraca);
            // Redirect to HomePage after adding a job
            navigate('/home');
        } catch (error) {
            console.error('Error while sending POST request:', error);
        }

        // Clear input values after submission
        setNazwaStanowiska('');
    };

    return (
        <form className="curd" onSubmit={handleSubmit} style={{ marginLeft: '20px' }}>
            <label>
                Nazwa stanowiska:
                <input type="text" value={nazwaStanowiska} onChange={(e) => setNazwaStanowiska(e.target.value)} />
            </label>
            <br />
            <button type="submit">Dodaj pracę</button>
        </form>
    );
};

export default PracaPOST;
