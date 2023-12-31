import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/Curd.css';


const OsobaPOST = ({ onOsobaDodana }) => {
    const [imie, setImie] = useState('');
    const [nazwisko, setNazwisko] = useState('');
    const [dataUrodzenia, setDataUrodzenia] = useState('');
    const [numerTelefonu, setNumerTelefonu] = useState('');
    const [ulica, setUlica] = useState('');
    const [miasto, setMiasto] = useState('');
    const [nazwaStanowiska, setNazwaStanowiska] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nowaOsoba = {
            imie: imie,
            nazwisko: nazwisko,
            dataUrodzenia: dataUrodzenia,
            numerTelefonu: {
                id: 4,
                numer: numerTelefonu
            },
            adres: {
                id: 2,
                ulica: ulica,
                miasto: miasto
            },
            praca: {
                id: 4,
                nazwaStanowiska: nazwaStanowiska
            }
        };

        try {
            axios.post('http://localhost:8080/osoba', nowaOsoba);
            navigate('/home');
        } catch (error) {
            console.error('Błąd podczas wysyłania żądania POST:', error);
        }

        setImie('');
        setNazwisko('');
        setDataUrodzenia('');
        setNumerTelefonu('');
        setUlica('');
        setMiasto('');
        setNazwaStanowiska('');
    };

    return (
        <form className="curd" onSubmit={handleSubmit} style={{ marginLeft: '20px' }}>
            <label>
                Imię:
                <input type="text" value={imie} onChange={(e) => setImie(e.target.value)} />
            </label>
            <br />
            <label>
                Nazwisko:
                <input type="text" value={nazwisko} onChange={(e) => setNazwisko(e.target.value)} />
            </label>
            <br />
            <label>
                Data urodzenia:
                <input type="text" value={dataUrodzenia} onChange={(e) => setDataUrodzenia(e.target.value)} />
            </label>
            <br />
            <label>
                Numer telefonu:
                <input type="text" value={numerTelefonu} onChange={(e) => setNumerTelefonu(e.target.value)} />
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
            <label>
                Nazwa stanowiska:
                <input type="text" value={nazwaStanowiska} onChange={(e) => setNazwaStanowiska(e.target.value)} />
            </label>
            <br />
            <button type="submit">Dodaj Osobę</button>
        </form>
    );
};

export default OsobaPOST;
