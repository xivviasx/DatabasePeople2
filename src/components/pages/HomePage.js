// HomePage.js
import React from 'react';
import OsobaTable from '../tables/OsobaTable';
import AdresTable from "../tables/AdresTable";
import NumerTelefonuTable from "../tables/NumerTelefonuTable";
import PracaTable from "../tables/PracaTable";
import { useNavigate } from "react-router-dom";
import '../../styles/HomePage.css';

function HomePage() {
    const navigate = useNavigate();

    const handleButtonClick = (tableName) => {
        navigate(`/${tableName}`);
    };

    return (
        <div className="container">
            <div className="main">
            <h1>Baza danych</h1>

            <div className="table-container">
                <h2>Osoba</h2>
                <OsobaTable />
                <div className="button-container">
                    <button onClick={() => handleButtonClick('dodaj-osobe')}>Dodaj Osobę</button>
                    <button onClick={() => handleButtonClick('usun-osobe')}>Usuń Osobę</button>
                    <button onClick={() => handleButtonClick('edytuj-osobe')}>Edytuj Osobę</button>
                </div>
            </div>

            <div className="table-container">
                <h2>Adres</h2>
                <AdresTable />
                <div className="button-container">
                    <button onClick={() => handleButtonClick('dodaj-adres')}>Dodaj Adres</button>
                    <button onClick={() => handleButtonClick('usun-adres')}>Usuń Adres</button>
                    <button onClick={() => handleButtonClick('edytuj-adres')}>Edytuj Adres</button>
                </div>
            </div>

            <div className="table-container">
                <h2>Numer Telefonu</h2>
                <NumerTelefonuTable />
                <div className="button-container">
                    <button onClick={() => handleButtonClick('dodaj-numer-telefonu')}>Dodaj Numer</button>
                    <button onClick={() => handleButtonClick('usun-numer-telefonu')}>Usuń Numer</button>
                    <button onClick={() => handleButtonClick('edytuj-numer-telefonu')}>Edytuj Numer</button>
                </div>
            </div>

            <div className="table-container">
                <h2>Praca</h2>
                <PracaTable />
                <div className="button-container">
                    <button onClick={() => handleButtonClick('dodaj-prace')}>Dodaj Pracę</button>
                    <button onClick={() => handleButtonClick('usun-prace')}>Usuń Pracę</button>
                    <button onClick={() => handleButtonClick('edytuj-prace')}>Edytuj Pracę</button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default HomePage;
