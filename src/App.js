import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Logowanie from "./components/Logowanie";
import HomePage from "./components/HomePage";
import OsobaPOST from "./components/crud/DodajOsobeForm";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Logowanie />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/dodaj-osobe" element={<OsobaPOST />} />
            </Routes>
        </Router>
    );
}

export default App;