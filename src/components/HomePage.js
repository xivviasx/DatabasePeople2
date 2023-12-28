// HomePage.js
import React from 'react';
import OsobaTable from './tables/OsobaTable';
import AdresTable from "./tables/AdresTable";
import NumerTelefonuTable from "./tables/NumerTelefonuTable";
import PracaTable from "./tables/PracaTable";
import {useNavigate} from "react-router-dom";

function HomePage() {

    const navigate = useNavigate();

    const handleButtonClick = (tableName) => {
        navigate(`/${tableName}`);
    };


    return (
        <div>
            <h1>Tabele i funkcje</h1>
            <OsobaTable />
            <div>
                <button onClick={() => handleButtonClick('dodaj-osobe')}>Dodaj Osobe</button>
                <button onClick={() => handleButtonClick('usun-osobe')}>Usuń Osobe</button>
                <button onClick={() => handleButtonClick('edytuj-osobe')}>Edytuj Osobe</button>
            </div>
            <AdresTable />
            <NumerTelefonuTable />
            <PracaTable />
        </div>
    );
}

export default HomePage;
