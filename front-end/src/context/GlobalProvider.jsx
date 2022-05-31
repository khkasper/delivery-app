import PropTypes from 'prop-types';
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import GlobalContext from './GlobalContext';

const API = axios.create({
  baseURL: 'http://localhost:3001',
});

const HOMES = {
  administrator: '/admin/manage',
  customer: '/customer/products',
  seller: '/seller/orders',
};

function GlobalProvider({ children }) {
  const [user, setUser] = useState();
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sellers, setSellers] = useState([]);
  const [currentOrder, setCurrentOrder] = useState();
  const navigate = useNavigate();

  const loginUser = useCallback(async ({ email, password }) => {
    try {
      setLoading(true);
      const { data } = await API.post('/login', { email, password });
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
      setLoading(false);
      navigate(HOMES[data.role]);
    } catch (err) {
      setError(err.response.data);
    }
  }, [navigate]);

  const registerUser = useCallback(async ({ name, email, password }) => {
    try {
      setLoading(true);
      const { data } = await API.post('/register', { name, email, password });
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
      setLoading(false);
      navigate(HOMES.customer);
    } catch (err) {
      setError(err.response.data);
    }
  }, [navigate]);

  const getProducts = useCallback(async () => {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    const { data } = await API.get(HOMES.customer, {
      headers: {
        Authorization: currentUser.token,
      },
    });
    setProducts(data);
  }, []);

  const getOrders = useCallback(async () => {
    try {
      const currentUser = JSON.parse(localStorage.getItem('user'));
      const result = await API.get(`/${currentUser.role}/orders`, {
        headers: {
          Authorization: currentUser.token,
        },
      });
      setOrders(result.data);
    } catch (err) {
      setError(err);
    }
  }, []);

  const getSellers = useCallback(async () => {
    try {
      const currentUser = JSON.parse(localStorage.getItem('user'));
      const result = await API.get('/seller/', {
        headers: {
          Authorization: currentUser.token,
        },
      });
      setSellers(result.data);
    } catch (err) {
      setError(err);
    }
  }, []);

  const getCurrentOrder = useCallback(async (orderId) => {
    try {
      const currentUser = JSON.parse(localStorage.getItem('user'));
      const result = await API.get(`/${currentUser.role}/orders/${orderId}`, {
        headers: {
          Authorization: currentUser.token,
        },
      });
      setCurrentOrder(result.data);
    } catch (err) {
      setError(err);
    }
  }, []);

  const updateOrder = useCallback(async (orderId, newStatus) => {
    try {
      const currentUser = JSON.parse(localStorage.getItem('user'));
      const result = await API.patch(`/${currentUser.role}/orders/${orderId}/update`,
        { newStatus },
        {
          headers: {
            Authorization: currentUser.token,
          },
        });
      setCurrentOrder(result.data);
    } catch (err) {
      setError(err);
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    const currentUser = JSON.parse(localStorage.getItem('user'));
    setUser(currentUser);
    setLoading(false);
  }, []);

  const handleLogOut = () => {
    setLoading(true);
    localStorage.clear();
    setUser();
    setOrders([]);
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
    products,
    loading,
    getProducts,
    getOrders,
    orders,
    setLoading,
    setError,
    sellers,
    getSellers,
    getCurrentOrder,
    currentOrder,
    updateOrder,
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
