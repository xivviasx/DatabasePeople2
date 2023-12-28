import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OsobaPUT = () => {
    const [osobaId, setOsobaId] = useState('');
    const [imie, setImie] = useState('');
    const [nazwisko, setNazwisko] = useState('');
    const [dataUrodzenia, setDataUrodzenia] = useState('');
    const [numerTelefonu, setNumerTelefonu] = useState('');
    const [ulica, setUlica] = useState('');
    const [miasto, setMiasto] = useState('');
    const [nazwaStanowiska, setNazwaStanowiska] = useState('');

    const navigate = useNavigate();

    const handleUpdate = async (e) => {
        e.preventDefault();

        const zaktualizowanaOsoba = {
            imie: imie || undefined,
            nazwisko: nazwisko || undefined,
            dataUrodzenia: dataUrodzenia || undefined,
            numerTelefonu: numerTelefonu
                ? {
                    id: 4,
                    numer: numerTelefonu,
                }
                : undefined,
            adres: ulica || miasto ? { id: 2, ulica: ulica, miasto: miasto } : undefined,
            praca: nazwaStanowiska ? { id: 4, nazwaStanowiska: nazwaStanowiska } : undefined,
        };

        try {
            // Wysyłanie żądania PUT z użyciem axios
            await axios.put(`http://localhost:8080/osoba/${osobaId}`, zaktualizowanaOsoba);
            // Przeniesienie do HomePage po zaktualizowaniu osoby
            navigate('/home');
        } catch (error) {
            console.error('Błąd podczas wysyłania żądania PUT:', error);
        }
    };

    return (
        <form className="curd" onSubmit={handleUpdate} style={{ marginLeft: '20px' }}>
            <label>
                ID Osoby:
                <input type="text" value={osobaId} onChange={(e) => setOsobaId(e.target.value)} />
            </label>
            <br />
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
            <button type="submit">Zaktualizuj Osobę</button>
        </form>
    );
};

export default OsobaPUT;
