import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AdresPUT = () => {
    const [adresId, setAdresId] = useState('');
    const [ulica, setUlica] = useState('');
    const [miasto, setMiasto] = useState('');

    const navigate = useNavigate();

    const handleUpdate = async (e) => {
        e.preventDefault();

        const updatedAdres = {
            ulica: ulica || undefined,
            miasto: miasto || undefined,
        };

        try {
            // Sending a PUT request using axios
            await axios.put(`http://localhost:8080/adres/${adresId}`, updatedAdres);
            // Redirect to HomePage after updating the address
            navigate('/home');
        } catch (error) {
            console.error('Error while sending PUT request:', error);
        }
    };

    return (
        <form className="curd" onSubmit={handleUpdate} style={{ marginLeft: '20px' }}>
            <label>
                Adres ID:
                <input type="text" value={adresId} onChange={(e) => setAdresId(e.target.value)} />
            </label>
            <br />
            <label>
                Ulica:
                <input type="text" value={ulica} onChange={(e) => setUlica(e.target.value)} />
            </label>
            <br />
            <label>
                Miasto:
                <input type="text" value={miasto} onChange={(e) => setMiasto(e.target.value)} />
            </label>
            <br />
            <button type="submit">Zaktualizuj adres</button>
        </form>
    );
};

export default AdresPUT;
