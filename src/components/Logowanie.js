import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logowanie() {
    const navigate = useNavigate();

    const handleZalogujButtonClick = () => {
        navigate('/home');
    };

    return (
        <div>
            <button onClick={handleZalogujButtonClick}>Zaloguj</button>
        </div>
    );
}

export default Logowanie;