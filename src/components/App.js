import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import HomePageAdmin from "./pages/HomePageAdmin";
import OsobaPOST from "./crud/osoba/OsobaPOST";
import OsobaDELETE from "./crud/osoba/OsobaDELETE";
import OsobaPUT from "./crud/osoba/OsobaPUT";
import AdresDELETE from "./crud/adres/AdresDELETE";
import AdresPOST from "./crud/adres/AdresPOST";
import AdresPUT from "./crud/adres/AdresPUT";
import PracaPUT from "./crud/praca/PracaPUT";
import PracaDELETE from "./crud/praca/PracaDELETE";
import PracaPOST from "./crud/praca/PracaPOST";
import NumerTelefonuPUT from "./crud/numerTelefonu/NumerTelefonuPUT";
import NumerTelefonuDELETE from "./crud/numerTelefonu/NumerTelefonuDELETE";
import NumerTelefonuPOST from "./crud/numerTelefonu/NumerTelefonuPOST";
import RegisterPage from "./pages/Rejestracja";
import HomePageUser from "./pages/HomePageUser";

function App() {
    const [authenticated, setAuthenticated] = useState(false);
    const [userType, setUserType] = useState(""); // Dodajemy stan przechowujący typ użytkownika

    const handleLogin = (type) => {
        setAuthenticated(true);
        setUserType(type);
    };

    const handleLogout = () => {
        setAuthenticated(false);
        setUserType("");
    };

    return (
        <Router>
            {authenticated ? (
                <Routes>
                    {userType === "admin" && (
                        <>
                            <Route path="/home" element={<HomePageAdmin />} />
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
                            <Route path="/logout" element={<Navigate to="/login" />} />
                        </>
                    )}
                    <Route path="/home" element={<HomePageUser />} />


                </Routes>
            ) : (
                <Routes>
                    <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
                    <Route path="/register" element={<RegisterPage handleLogin={handleLogin} />} />
                    <Route path="/*" element={<Navigate to="/login" />} />
                </Routes>
            )}
        </Router>
    );
}

export default App;
