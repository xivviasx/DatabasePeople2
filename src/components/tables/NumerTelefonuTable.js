import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/Table.css';

const NumerTelefonuTable = () => {
    const [numeryTelefonu, setNumeryTelefonu] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(2); // Adjust the number of items per page as needed
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8080/numer-telefonu')
            .then(response => setNumeryTelefonu(response.data))
            .catch(() => setError(true));
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = numeryTelefonu.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => setCurrentPage(pageNumber);

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
                {currentItems.map(numerTelefonu => (
                    <tr key={numerTelefonu.id} className="table-row">
                        <td>{numerTelefonu.id}</td>
                        <td>{numerTelefonu.numer}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div className="pagination">
                {Array.from({ length: Math.ceil(numeryTelefonu.length / itemsPerPage) }).map((_, index) => (
                    <button key={index + 1} onClick={() => paginate(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default NumerTelefonuTable;
