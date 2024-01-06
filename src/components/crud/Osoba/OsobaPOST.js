import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../../styles/HomePage.css';

const OsobaPOST = ({ onOsobaDodana }) => {
    const [osobaData, setOsobaData] = useState({
        imie: '',
        nazwisko: '',
        dataUrodzenia: '',
        idNumerTelefonu: '',
        idAdres: '',
        idPraca: '',
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setOsobaData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nowaOsoba = {
            imie: osobaData.imie,
            nazwisko: osobaData.nazwisko,
            dataUrodzenia: osobaData.dataUrodzenia,
            numerTelefonu: {
                id: osobaData.idNumerTelefonu,
            },
            adres: {
                id: osobaData.idAdres,
            },
            praca: {
                id: osobaData.idPraca,
            },
        };

        try {
            await axios.post('http://localhost:8080/osoba', nowaOsoba);
            navigate('/home');
        } catch (error) {
            console.error('Błąd podczas wysyłania żądania POST:', error);
        }

        // Clear input values after submission
        setOsobaData({
            imie: '',
            nazwisko: '',
            dataUrodzenia: '',
            idNumerTelefonu: '',
            idAdres: '',
            idPraca: '',
        });
    };

    return (
        <form className="curd" onSubmit={handleSubmit} style={{ marginLeft: '20px' }}>
            <label>
                Imię:
                <input type="text" name="imie" value={osobaData.imie} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Nazwisko:
                <input type="text" name="nazwisko" value={osobaData.nazwisko} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Data urodzenia:
                <input type="text" name="dataUrodzenia" value={osobaData.dataUrodzenia} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                ID numeru telefonu:
                <input type="text" name="idNumerTelefonu" value={osobaData.idNumerTelefonu} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                ID Adresu:
                <input type="text" name="idAdres" value={osobaData.idAdres} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                ID Pracy:
                <input type="text" name="idPraca" value={osobaData.idPraca} onChange={handleInputChange} />
            </label>
            <br />
            <button type="submit">Dodaj Osobę</button>
        </form>
    );
};

export default OsobaPOST;
