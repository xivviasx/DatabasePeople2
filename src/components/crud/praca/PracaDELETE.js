import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PracaDELETE = () => {
    const [pracaId, setPracaId] = useState('');
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            // Sending a DELETE request using axios
            await axios.delete(`http://localhost:8080/praca/${pracaId}`);
            // Redirect to HomePage after deleting the job
            navigate('/home');
        } catch (error) {
            console.error('Error while sending DELETE request:', error);
        }
    };

    return (
        <form className="curd" onSubmit={(e) => e.preventDefault()}>
            <label>
                ID Pracy:
                <input type="text" value={pracaId} onChange={(e) => setPracaId(e.target.value)} />
            </label>
            <br />
            <button type="button" onClick={handleDelete}>Usuń pracę</button>
        </form>
    );
};

export default PracaDELETE;
