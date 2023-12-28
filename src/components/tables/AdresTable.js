import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/Table.css';

const AdresTable = () => {
    const [adresy, setAdres] = useState([]); //zmienna hook przechowuje adresy aktualizowana funkcja setadres
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8080/adres')
            .then(response => setAdres(response.data))
            .catch(() => setError(true));
    }, []);

    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>ulica</th>
                    <th>miasto</th>
                </tr>
                </thead>
                <tbody>
                {adresy.map(adres => (
                    <tr key={adres.id} className="table-row">
                        <td>{adres.id}</td>
                        <td>{adres.ulica}</td>
                        <td>{adres.miasto}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdresTable;
