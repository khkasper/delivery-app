import PropTypes from 'prop-types';
import React, { useState } from 'react';
import axios from 'axios';
import GlobalContext from './GlobalContext';

function GlobalProvider({ children }) {
  const [user, setUser] = useState({
    userId: '1',
    name: 'Nome Da Pessoa Usuária',
    email: 'email@dominio.com',
    role: 'customer',
    token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    eyJuYW1lIjoiTm9tZSBEYSBQZXNzb2EgVXN1w6FyaWEiLCJl
    bWFpbCI6ImVtYWlsQGRvbWluaW8uY29tIiwicm9sZSI6ImN1c3RvbWVyIn0.
    s5cmiyY16yViCXkHuzWekxkMeYBi75eT8uJnSbfadNE`,
  });
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false);

  const API = axios.create({
    baseURL: 'http://localhost:3001',
  });

  const loginUser = async ({ email, password }) => {
    try {
      const { data } = await API.post('/login', { email, password });
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
      setLogged(true);
    } catch (err) {
      setError(err.response.data);
    }
  };

  const registerUser = async ({ name, email, password }) => {
    try {
      const { data } = await API.post('/register', { name, email, password });
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
      setLogged(true);
    } catch (err) {
      setError(err.response.data);
    }
  };

  const context = {
    user,
    error,
    loginUser,
    logged,
    registerUser,
  };

  return (
    <GlobalContext.Provider value={ context }>
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
