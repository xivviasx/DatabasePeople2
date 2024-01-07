import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/Table.css';

const AdresTable = () => {
    const [adresy, setAdres] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(2);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8080/adres')
            .then(response => setAdres(response.data))
            .catch(() => setError(true));
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = adresy.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => setCurrentPage(pageNumber);

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
                {currentItems.map(adres => (
                    <tr key={adres.id} className="table-row">
                        <td>{adres.id}</td>
                        <td>{adres.ulica}</td>
                        <td>{adres.miasto}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div className="pagination">
                {Array.from({ length: Math.ceil(adresy.length / itemsPerPage) }).map((_, index) => (
                    <button key={index + 1} onClick={() => paginate(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AdresTable;
