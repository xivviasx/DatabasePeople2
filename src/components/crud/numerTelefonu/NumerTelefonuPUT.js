import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NumerTelefonuPUT = () => {
    const [numerTelefonuId, setNumerTelefonuId] = useState('');
    const [numer, setNumer] = useState('');

    const navigate = useNavigate();

    const handleUpdate = async (e) => {
        e.preventDefault();

        const updatedNumerTelefonu = {
            numer: numer || undefined,
        };

        try {
            // Sending a PUT request using axios
            await axios.put(`http://localhost:8080/numer-telefonu/${numerTelefonuId}`, updatedNumerTelefonu);
            // Redirect to HomePage after updating the phone number
            navigate('/home');
        } catch (error) {
            console.error('Error while sending PUT request:', error);
        }
    };

    return (
        <div className="curd-container">
        <form className="curd" onSubmit={handleUpdate} style={{ marginLeft: '20px' }}>
            <label>
                ID Numeru telefonu:
                <input type="text" value={numerTelefonuId} onChange={(e) => setNumerTelefonuId(e.target.value)} />
            </label>
            <br />
            <label>
                Numer telefonu:
                <input type="text" value={numer} onChange={(e) => setNumer(e.target.value)} />
            </label>
            <br />
            <div className="button-container">
            <button type="submit">Zaktualizuj numer telefonu</button>
            </div>
        </form>
        </div>
    );
};

export default NumerTelefonuPUT;
