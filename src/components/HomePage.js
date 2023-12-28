// HomePage.js
import React from 'react';
import OsobaTable from './tables/OsobaTable';
import AdresTable from "./tables/AdresTable";
import NumerTelefonuTable from "./tables/NumerTelefonuTable";
import PracaTable from "./tables/PracaTable";
import {useNavigate} from "react-router-dom";
import '../styles/HomePage.css';

function HomePage() {

    const navigate = useNavigate();

    const handleButtonClick = (tableName) => {
        navigate(`/${tableName}`);
    };


    return (
        <div className="container">
            <h1>Baza danych</h1>
            <div>
                <OsobaTable />
                <div className="crud">
                    <button onClick={() => handleButtonClick('dodaj-osobe')}>Dodaj Osobe</button>
                    <button onClick={() => handleButtonClick('usun-osobe')}>Usuń Osobe</button>
                    <button onClick={() => handleButtonClick('edytuj-osobe')}>Edytuj Osobe</button>
                </div>
            </div>
            <AdresTable />
            <div className="crud">
                <button onClick={() => handleButtonClick('dodaj-osobe')}>Dodaj Osobe</button>
                <button onClick={() => handleButtonClick('usun-adres')}>Usuń Adres</button>
                <button onClick={() => handleButtonClick('edytuj-osobe')}>Edytuj Osobe</button>
            </div>
            <NumerTelefonuTable />
            <div className="crud">
                <button onClick={() => handleButtonClick('dodaj-osobe')}>Dodaj Osobe</button>
                <button onClick={() => handleButtonClick('usun-osobe')}>Usuń Osobe</button>
                <button onClick={() => handleButtonClick('edytuj-osobe')}>Edytuj Osobe</button>
            </div>
            <PracaTable />
            <div className="crud">
                <button onClick={() => handleButtonClick('dodaj-osobe')}>Dodaj Osobe</button>
                <button onClick={() => handleButtonClick('usun-osobe')}>Usuń Osobe</button>
                <button onClick={() => handleButtonClick('edytuj-osobe')}>Edytuj Osobe</button>
            </div>
        </div>
    );
}

export default HomePage;
