import React from 'react';
import axios from 'axios';

const OsobaDELETE = ({ osobaId, onOsobaUsunieta }) => {
    const handleDelete = async () => {
        try {
            // Wysyłanie żądania DELETE z użyciem axios
            await axios.delete(`http://localhost:8080/osoba/${osobaId}`);
            // Wywołanie funkcji przekazanej z komponentu nadrzędnego do aktualizacji stanu
            onOsobaUsunieta(osobaId);
        } catch (error) {
            console.error('Błąd podczas wysyłania żądania DELETE:', error);
        }
    };

    return (
        <div>
            {/* Przykładowy przycisk do usuwania osoby */}
            <button type="button" onClick={handleDelete}>Usuń Osobę</button>
        </div>
    );
};

export default OsobaDELETE;
