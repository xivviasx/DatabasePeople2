import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/Table.css';

const NumerTelefonuTable = () => {
    const [numeryTelefonu, setNumeryTelefonu] = useState([]); //zmienna hook przechowuje adresy aktualizowana funkcja setadres
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8080/numer-telefonu')
            .then(response => setNumeryTelefonu(response.data))
            .catch(() => setError(true));
    }, []);

    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>numer</th>
                </tr>
                </thead>
                <tbody>
                {numeryTelefonu.map(numerTelefonu => (
                    <tr key={numerTelefonu.id} className="table-row">
                        <td>{numerTelefonu.id}</td>
                        <td>{numerTelefonu.numer}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default NumerTelefonuTable;
