import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import GlobalContext from './GlobalContext';
import skol from '../.testImages/skol_269ml.jpg';
import brahma from '../.testImages/brahma_600ml.jpg';

function GlobalProvider({ children }) {
  const [user, setUser] = useState();
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const API = axios.create({
    baseURL: 'http://localhost:3001',
  });

  const HOMES = {
    admin: '/admin/manage',
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

  const handleLogOut = () => {
    localStorage.removeItem('user');
    setUser();
    navigate('/');
  };

  const getProducts = async () => {
    try {
      // const { data } = await API.get('/products', user.token);
      const data = [
        {
          id: 1,
          name: 'Skol',
          price: 1.99,
          url_image: skol,
        },
        {
          id: 2,
          name: 'Brahma',
          price: 2.99,
          url_image: brahma,
        },
      ];
      setProducts(data);
    } catch (err) {
      setError(err.response.data);
      setProducts([]);
    }
  };

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    setUser(currentUser);
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
