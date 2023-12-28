import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/Table.css';

const OsobaTable = () => {
    const [osoby, setOsoby] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8080/osoba')
            .then(response => setOsoby(response.data))
            .catch(() => setError(true));
    }, []);

    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Data urodzenia</th>
                    <th>Numer telefonu</th>
                    <th>Adres</th>
                    <th>Praca</th>
                </tr>
                </thead>
                <tbody>
                {osoby.map(osoba => (
                    <tr key={osoba.id} className="table-row">
                        <td>{osoba.id}</td>
                        <td>{osoba.imie}</td>
                        <td>{osoba.nazwisko}</td>
                        <td>{osoba.dataUrodzenia}</td>
                        <td>{osoba.numerTelefonu ? osoba.numerTelefonu.numer : 'Brak'}</td>
                        <td>{osoba.adres ? `${osoba.adres.ulica}, ${osoba.adres.miasto}` : 'Brak'}</td>
                        <td>{osoba.praca ? osoba.praca.nazwaStanowiska : 'Brak'}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default OsobaTable;
