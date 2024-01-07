import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PracaPUT = () => {
    const [pracaId, setPracaId] = useState('');
    const [nazwaStanowiska, setNazwaStanowiska] = useState('');

    const navigate = useNavigate();

    const handleUpdate = async (e) => {
        e.preventDefault();

        const updatedPraca = {
            nazwaStanowiska: nazwaStanowiska || undefined,
        };

        try {
            // Sending a PUT request using axios
            await axios.put(`http://localhost:8080/praca/${pracaId}`, updatedPraca);
            // Redirect to HomePage after updating the job
            navigate('/home');
        } catch (error) {
            console.error('Error while sending PUT request:', error);
        }
    };

    return (
        <div className="curd-container">
            <form className="curd" onSubmit={handleUpdate} style={{ marginLeft: '20px' }}>
                <label>
                    ID Pracy:
                    <input type="text" value={pracaId} onChange={(e) => setPracaId(e.target.value)} />
                </label>
                <br />
                <label>
                    Nazwa stanowiska:
                    <input type="text" value={nazwaStanowiska} onChange={(e) => setNazwaStanowiska(e.target.value)} />
                </label>
                <br />
                <div className="button-container">
                <button type="submit">Zaktualizuj pracę</button>
                </div>
            </form>
        </div>
    );
};

export default PracaPUT;
