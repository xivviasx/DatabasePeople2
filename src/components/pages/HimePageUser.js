import {useNavigate} from "react-router-dom";
import OsobaTable from "../tables/OsobaTable";
import AdresTable from "../tables/AdresTable";
import NumerTelefonuTable from "../tables/NumerTelefonuTable";
import PracaTable from "../tables/PracaTable";
import React from "react";

function HomePageUser() {
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
                </div>

                <div className="table-container">
                    <h2>Adres</h2>
                    <AdresTable />
                </div>

                <div className="table-container">
                    <h2>Numer Telefonu</h2>
                    <NumerTelefonuTable />
                </div>

                <div className="table-container">
                    <h2>Praca</h2>
                    <PracaTable />
                </div>
            </div>
        </div>
    );
}

export default HomePageUser;