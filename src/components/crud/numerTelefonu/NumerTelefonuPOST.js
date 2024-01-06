import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NumerTelefonuPOST = () => {
    const [numer, setNumer] = useState('');

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const newNumerTelefonu = {
            numer: numer || undefined,
        };

        try {
            // Sending a POST request using axios
            await axios.post('http://localhost:8080/numer-telefonu', newNumerTelefonu);
            // Redirect to HomePage after adding a phone number
            navigate('/home');
        } catch (error) {
            console.error('Error while sending POST request:', error);
        }

        // Clear input values after submission
        setNumer('');
    };

    return (
        <form className="curd" onSubmit={handleSubmit} style={{ marginLeft: '20px' }}>
            <label>
                Numer telefonu:
                <input type="text" value={numer} onChange={(e) => setNumer(e.target.value)} />
            </label>
            <br />
            <button type="submit">Dodaj numer telefonu</button>
        </form>
    );
};

export default NumerTelefonuPOST;
