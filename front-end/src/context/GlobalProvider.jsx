import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import GlobalContext from './GlobalContext';

function GlobalProvider({ children }) {
  const [user, setUser] = useState();
  const [error, setError] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  console.log(loading);
  const API = axios.create({
    baseURL: 'http://localhost:3001',
  });

  const HOMES = {
    administrator: '/admin/manage',
    customer: '/customer/products',
    seller: '/seller/orders',
  };

  const loginUser = async ({ email, password }) => {
    try {
      setLoading(true);
      console.log(loading, 'loading');
      const { data } = await API.post('/login', { email, password });
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
      setLoading(false);
      console.log(loading, 'loading');
      navigate(HOMES[data.role]);
    } catch (err) {
      setError(err.response.data);
    }
  };

  const registerUser = async ({ name, email, password }) => {
    try {
      setLoading(true);
      console.log(loading, 'loading');
      const { data } = await API.post('/register', { name, email, password });
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
      setLoading(false);
      console.log(loading, 'loading');
      navigate(HOMES[data.role]);
    } catch (err) {
      setError(err.response.data);
    }
  };

  const registerUserAdmin = async ({ name, email, password, role }) => {
    try {
      await API.post('/admin/manage', { name, email, password, role }, {
        headers: {
          Authorization: user.token,
        },
      });
      navigate(HOMES[user.role]);
    } catch (err) {
      setError(err.response.data);
    }
  };

  const getOrders = async () => {
    try {
      const currentUser = JSON.parse(localStorage.getItem('user'));
      const result = await API.get(`/${currentUser.role}/orders`, {
        headers: {
          Authorization: currentUser.token,
        },
      });
      console.log(result.data);
      setOrders(result.data);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };

  useEffect(() => {
    setLoading(true);
    const currentUser = JSON.parse(localStorage.getItem('user'));
    setUser(currentUser);
    getOrders();
    setLoading(false);
  }, []);

  const handleLogOut = () => {
    setLoading(true);
    localStorage.removeItem('user');
    setUser();
    setLoading(false);
    navigate('/');
  };

  const context = {
    user,
    error,
    loginUser,
    registerUser,
    handleLogOut,
    HOMES,
    loading,
    registerUserAdmin,
    getOrders,
    orders,
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
