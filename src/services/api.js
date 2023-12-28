// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Adres Twojego API Springa

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getAllNumerTelefonu = async () => {
    const response = await api.get('/numer-telefonu');
    return response.data;
};

export const getNumerTelefonu = async (imie, nazwisko) => {
    const response = await axios.get(`${API_URL}/osoba/numer-telefonu`, {
        params: {
            imie,
            nazwisko,
        },
    });
    return response.data;
};

export const addNumerTelefonu = async (numerTelefonu) => {
    const response = await api.post('/numer-telefonu', numerTelefonu);
    return response.data;
};

export const updateNumerTelefonu = async (id, updatedNumerTelefonu) => {
    const response = await api.put(`/numer-telefonu/${id}`, updatedNumerTelefonu);
    return response.data;
};

export const deleteNumerTelefonu = async (id) => {
    const response = await api.delete(`/numer-telefonu/${id}`);
    return response.data;
};

// Osoba API
export const getAllOsoby = async () => {
    const response = await axios.get(`${API_URL}/osoba`);
    return response.data;
};

export const addOsoba = async (osoba) => {
    const response = await axios.post(`${API_URL}/osoba`, osoba);
    return response.data;
};

export const updateOsoba = async (id, updatedOsoba) => {
    const response = await axios.put(`${API_URL}/osoba/${id}`, updatedOsoba);
    return response.data;
};

export const deleteOsoba = async (id) => {
    const response = await axios.delete(`${API_URL}/osoba/${id}`);
    return response.data;
};

// Adres API
export const getAllAdresy = async () => {
    const response = await axios.get(`${API_URL}/adres`);
    return response.data;
};

export const addAdres = async (adres) => {
    const response = await axios.post(`${API_URL}/adres`, adres);
    return response.data;
};

export const updateAdres = async (id, updatedAdres) => {
    const response = await axios.put(`${API_URL}/adres/${id}`, updatedAdres);
    return response.data;
};

export const deleteAdres = async (id) => {
    const response = await axios.delete(`${API_URL}/adres/${id}`);
    return response.data;
};

// Praca API
export const getAllPrace = async () => {
    const response = await axios.get(`${API_URL}/praca`);
    return response.data;
};

export const addPraca = async (praca) => {
    const response = await axios.post(`${API_URL}/praca`, praca);
    return response.data;
};

export const updatePraca = async (id, updatedPraca) => {
    const response = await axios.put(`${API_URL}/praca/${id}`, updatedPraca);
    return response.data;
};

export const deletePraca = async (id) => {
    const response = await axios.delete(`${API_URL}/praca/${id}`);
    return response.data;
};

