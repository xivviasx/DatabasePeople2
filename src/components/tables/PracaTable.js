import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/Table.css';

const PracaTable = () => {
    const [prace, setPrace] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(2); // Ilość elementów na stronie
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8080/praca')
            .then(response => setPrace(response.data))
            .catch(() => setError(true));
    }, []);

    // Oblicz indeksy pierwszego i ostatniego elementu dla aktualnej strony
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = prace.slice(indexOfFirstItem, indexOfLastItem);

    // Paginacja - zmiana aktualnej strony
    const paginate = pageNumber => setCurrentPage(pageNumber);

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
                {currentItems.map(praca => (
                    <tr key={praca.id} className="table-row">
                        <td>{praca.id}</td>
                        <td>{praca.nazwaStanowiska}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Paginacja */}
            <div className="pagination">
                {Array.from({ length: Math.ceil(prace.length / itemsPerPage) }, (_, index) => (
                    <button key={index} onClick={() => paginate(index + 1)}>{index + 1}</button>
                ))}
            </div>
        </div>
    );
};

export default PracaTable;
