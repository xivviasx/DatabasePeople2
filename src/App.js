import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from "./components/pages/LoginPage";
import HomePage from "./components/pages/HomePage";
import OsobaPOST from "./components/crud/osoba/OsobaPOST";
import OsobaDELETE from "./components/crud/osoba/OsobaDELETE";
import OsobaPUT from "./components/crud/osoba/OsobaPUT";
import AdresDELETE from "./components/crud/adres/AdresDELETE";
import AdresPOST from "./components/crud/adres/AdresPOST";
import AdresPUT from "./components/crud/adres/AdresPUT";
import PracaPUT from "./components/crud/praca/PracaPUT";
import PracaDELETE from "./components/crud/praca/PracaDELETE";
import PracaPOST from "./components/crud/praca/PracaPOST";
import NumerTelefonuPUT from "./components/crud/numerTelefonu/NumerTelefonuPUT";
import NumerTelefonuDELETE from "./components/crud/numerTelefonu/NumerTelefonuDELETE";
import NumerTelefonuPOST from "./components/crud/numerTelefonu/NumerTelefonuPOST";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />

                <Route path="/home" element={<HomePage />} />

                <Route path="/dodaj-osobe" element={<OsobaPOST />} />
                <Route path="/usun-osobe" element={<OsobaDELETE />} />
                <Route path="/edytuj-osobe" element={<OsobaPUT />} />

                <Route path="/dodaj-adres" element={<AdresPOST />} />
                <Route path="/usun-adres" element={<AdresDELETE />} />
                <Route path="/edytuj-adres" element={<AdresPUT />} />

                <Route path="/dodaj-prace" element={<PracaPOST />} />
                <Route path="/usun-prace" element={<PracaDELETE />} />
                <Route path="/edytuj-prace" element={<PracaPUT />} />

                <Route path="/dodaj-numer-telefonu" element={<NumerTelefonuPOST />} />
                <Route path="/usun-numer-telefonu" element={<NumerTelefonuDELETE />} />
                <Route path="/edytuj-numer-telefonu" element={<NumerTelefonuPUT />} />

                {/* Dodaj poniższą trasę, aby przenosić użytkownika do /home po zalogowaniu
                <Route path="/*" element={<Navigate to="/home" />} />
                */}

            </Routes>
        </Router>
    );
}

export default App;
