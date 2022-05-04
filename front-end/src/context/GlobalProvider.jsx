import PropTypes from 'prop-types';
import React, { useState } from 'react';
import axios from 'axios';
import GlobalContext from './GlobalContext';

function GlobalProvider({ children }) {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false);
  const [orders, setOrders] = useState([]);

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

  const getOrders = async ({ token }) => {
    try {
      const { data } = await API.post('/customer/orders', token);
      setOrders(data);
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
    orders,
    getOrders,
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
