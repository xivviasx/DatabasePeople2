import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Logowanie from "./components/Logowanie";
import HomePage from "./components/HomePage";
import OsobaPOST from "./components/crud/OsobaPOST";
import OsobaDELETE from "./components/crud/OsobaDELETE";
import OsobaPUT from "./components/crud/OsobaPUT";
import AdresDELETE from "./components/crud/AdresDELETE";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Logowanie />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/dodaj-osobe" element={<OsobaPOST />} />
                <Route path="/usun-osobe" element={<OsobaDELETE />} />
                <Route path="/edytuj-osobe" element={<OsobaPUT />} />
                <Route path="/usun-adres" element={<AdresDELETE />} />
            </Routes>
        </Router>
    );
}

export default App;