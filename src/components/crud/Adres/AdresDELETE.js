import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../../styles/Curd.css';

const AdresDELETE = () => {
    const [adresId, setAdresId] = useState('');
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            // Sending a DELETE request using axios
            await axios.delete(`http://localhost:8080/adres/${adresId}`);
            // Redirecting to HomePage after deleting the address
            navigate('/home');
        } catch (error) {
            console.error('Error while sending DELETE request:', error);
        }
    };

    return (
        <div className="curd-container">
        <form className="curd" onSubmit={(e) => e.preventDefault()}>
            {/* Text field for entering the address ID */}
            <label>
                ID Adresu:
                <input type="text" value={adresId} onChange={(e) => setAdresId(e.target.value)} />
            </label>
            <br />
            <div className="button-container">
            <button type="button" onClick={handleDelete}>Usuń Adres</button>
            </div>
        </form>
        </div>
    );
};

export default AdresDELETE;
