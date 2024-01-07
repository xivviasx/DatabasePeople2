import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/Table.css';

const OsobaTable = () => {
    const [osoby, setOsoby] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(2); // Ilość elementów na stronie
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8080/osoba')
            .then(response => setOsoby(response.data))
            .catch(() => setError(true));
    }, []);

    // Oblicz indeksy pierwszego i ostatniego elementu dla aktualnej strony
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = osoby.slice(indexOfFirstItem, indexOfLastItem);

    // Paginacja - zmiana aktualnej strony
    const paginate = pageNumber => setCurrentPage(pageNumber);

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
                {currentItems.map(osoba => (
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

            {/* Paginacja */}
            <div className="pagination">
                {Array.from({ length: Math.ceil(osoby.length / itemsPerPage) }, (_, index) => (
                    <button key={index} onClick={() => paginate(index + 1)}>{index + 1}</button>
                ))}
            </div>
        </div>
    );
};

export default OsobaTable;
