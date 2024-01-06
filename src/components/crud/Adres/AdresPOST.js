import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdresPOST = () => {
    const [adresData, setAdresData] = useState({
        ulica: '',
        miasto: '',
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAdresData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nowyAdres = {
            ulica: adresData.ulica,
            miasto: adresData.miasto,
        };

        try {
            await axios.post('http://localhost:8080/adres', nowyAdres);
            navigate('/home');  // You can adjust the route accordingly
        } catch (error) {
            console.error('Błąd podczas wysyłania żądania POST:', error);
        }

        // Clear input values after submission
        setAdresData({
            ulica: '',
            miasto: '',
        });
    };

    return (
        <form className="curd" onSubmit={handleSubmit} style={{ marginLeft: '20px' }}>
            <label>
                Ulica:
                <input type="text" name="ulica" value={adresData.ulica} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Miasto:
                <input type="text" name="miasto" value={adresData.miasto} onChange={handleInputChange} />
            </label>
            <br />
            <button type="submit">Dodaj Adres</button>
        </form>
    );
};

export default AdresPOST;
