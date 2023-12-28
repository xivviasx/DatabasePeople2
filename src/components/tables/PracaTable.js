import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/Table.css';

const PracaTable = () => {
    const [prace, setPrace] = useState([]); //zmienna hook przechowuje adresy aktualizowana funkcja setadres
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8080/praca')
            .then(response => setPrace(response.data))
            .catch(() => setError(true));
    }, []);

    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nazwa Stanowiska</th>
                </tr>
                </thead>
                <tbody>
                {prace.map(praca => (
                    <tr key={praca.id} className="table-row">
                        <td>{praca.id}</td>
                        <td>{praca.nazwaStanowiska}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default PracaTable;
