import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NumerTelefonuDELETE = () => {
    const [numerTelefonuId, setNumerTelefonuId] = useState('');
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            // Sending a DELETE request using axios
            await axios.delete(`http://localhost:8080/numer-telefonu/${numerTelefonuId}`);
            // Redirect to HomePage after deleting the phone number
            navigate('/home');
        } catch (error) {
            console.error('Error while sending DELETE request:', error);
        }
    };

    return (
        <div className="curd-container">
        <form className="curd" onSubmit={(e) => e.preventDefault()}>
            <label>
                ID Numeru telefonu:
                <input type="text" value={numerTelefonuId} onChange={(e) => setNumerTelefonuId(e.target.value)} />
            </label>
            <br />
            <div className="button-container">
            <button type="button" onClick={handleDelete}>Usuń numer telefonu</button>
            </div>
        </form>
        </div>
    );
};

export default NumerTelefonuDELETE;
