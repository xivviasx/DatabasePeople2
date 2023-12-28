import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdresDELETE = () => {
    const [adresId, setAdresId] = useState('');
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            // Wysyłanie żądania DELETE z użyciem axios
            await axios.delete(`http://localhost:8080/osoba/${adresId}`);
            // Przeniesienie do HomePage po usunięciu osoby
            navigate('/home');
        } catch (error) {
            console.error('Błąd podczas wysyłania żądania DELETE:', error);
        }
    };

    return (
        <form className="curd" onSubmit={(e) => e.preventDefault()} style={{ marginLeft: '20px' }}>
            {/* Pole tekstowe do wprowadzenia ID osoby */}
            <label>
                ID Adresu:
                <input type="text" value={adresId} onChange={(e) => setAdresId(e.target.value)} />
            </label>
            <br />
            {/* Przycisk do usuwania osoby */}
            <button type="button" onClick={handleDelete}>Usuń Adres</button>
        </form>
    );
};

export default AdresDELETE;
