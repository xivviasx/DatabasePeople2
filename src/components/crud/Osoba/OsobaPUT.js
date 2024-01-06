import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OsobaPUT = () => {
    const [osobaId, setOsobaId] = useState('');
    const [imie, setImie] = useState('');
    const [nazwisko, setNazwisko] = useState('');
    const [dataUrodzenia, setDataUrodzenia] = useState('');
    const [idNumerTelefonu, setIdNumerTelefonu] = useState('');
    const [idAdres, setIdAdres] = useState('');
    const [idPraca, setIdPraca] = useState('');

    const navigate = useNavigate();

    const handleUpdate = async (e) => {
        e.preventDefault();

        const zaktualizowanaOsoba = {
            imie: imie || undefined,
            nazwisko: nazwisko || undefined,
            dataUrodzenia: dataUrodzenia || undefined,
            numerTelefonu: idNumerTelefonu
                ? {
                    id: idNumerTelefonu || undefined,
                }
                : undefined,
            adres: idAdres
                ? {
                    id: idAdres || undefined,
                }
                : undefined,
            praca: idPraca
                ? {
                    id: idPraca || undefined,
                }
                : undefined,
        };

        try {
            // Sending a PUT request using axios
            await axios.put(`http://localhost:8080/osoba/${osobaId}`, zaktualizowanaOsoba);
            // Redirect to HomePage after updating the person
            navigate('/home');
        } catch (error) {
            console.error('Error while sending PUT request:', error);
        }
    };

    return (
        <form className="curd" onSubmit={handleUpdate} style={{ marginLeft: '20px' }}>
            <label>
                Osoba ID:
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
                ID numeru telefonu:
                <input type="text" value={idNumerTelefonu} onChange={(e) => setIdNumerTelefonu(e.target.value)} />
            </label>
            <br />
            <label>
                ID Adresu:
                <input type="text" value={idAdres} onChange={(e) => setIdAdres(e.target.value)} />
            </label>
            <br />
            <label>
                ID Pracy:
                <input type="text" value={idPraca} onChange={(e) => setIdPraca(e.target.value)} />
            </label>
            <br />
            <button type="submit">Zaktualizuj osobę</button>
        </form>
    );
};

export default OsobaPUT;
