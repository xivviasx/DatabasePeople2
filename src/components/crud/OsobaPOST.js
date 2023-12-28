// DodajOsobeForm.js
import React, { useState } from 'react';

const OsobaPOST = ({ onOsobaDodana }) => {
    const [imie, setImie] = useState('');
    const [nazwisko, setNazwisko] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const nowaOsoba = {
            imie: imie,
            nazwisko: nazwisko,
        };

        onOsobaDodana(nowaOsoba);

        setImie(''); // Wyczyszczenie wartości po dodaniu osoby
        setNazwisko('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginLeft: '20px' }}>
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
            <button type="submit">Dodaj Osobę</button>
        </form>
    );
};

export default OsobaPOST;
