import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import GlobalContext from './GlobalContext';

function GlobalProvider({ children }) {
  const [user, setUser] = useState();
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

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
      const { data } = await API.post('/login', { email, password });
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
      navigate(HOMES[data.role]);
    } catch (err) {
      setError(err.response.data);
    }
  };

  const registerUser = async ({ name, email, password }) => {
    try {
      const { data } = await API.post('/register', { name, email, password });
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
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

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    setUser(currentUser);
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem('user');
    setUser();
    navigate('/');
  };

  const getProducts = async () => {
    try {
      const { data } = await API.get('/customer/products', {
        headers: {
          Authorization: user.token,
        },
      });
      setProducts(data);
    } catch (err) {
      setError(err.response.data);
      setProducts([]);
    }
  };

  useEffect(() => {
    const setUserLocalStorage = async () => {
      const currentUser = await JSON.parse(localStorage.getItem('user'));
      setUser(currentUser);
    };
    setUserLocalStorage();
    getProducts();
  }, []);

  const context = {
    user,
    error,
    loginUser,
    registerUser,
    handleLogOut,
    HOMES,
    getProducts,
    products,
    registerUserAdmin,
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
