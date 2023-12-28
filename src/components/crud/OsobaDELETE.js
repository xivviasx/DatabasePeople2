import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/Curd.css';

const OsobaDELETE = () => {
    const [osobaId, setOsobaId] = useState('');
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            // Wysyłanie żądania DELETE z użyciem axios
            await axios.delete(`http://localhost:8080/osoba/${osobaId}`);
            // Przeniesienie do HomePage po usunięciu osoby
            navigate('/home');
        } catch (error) {
            console.error('Błąd podczas wysyłania żądania DELETE:', error);
        }
    };

    return (
        <form className="curd" onSubmit={(e) => e.preventDefault()} >
            {/* Pole tekstowe do wprowadzenia ID osoby */}
            <label>
                ID Osoby:
                <input type="text" value={osobaId} onChange={(e) => setOsobaId(e.target.value)} />
            </label>
            <br />
            {/* Przycisk do usuwania osoby */}
            <button type="button" onClick={handleDelete}>Usuń Osobę</button>
        </form>
    );
};

export default OsobaDELETE;
