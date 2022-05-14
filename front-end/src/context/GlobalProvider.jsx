import PropTypes from 'prop-types';
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import GlobalContext from './GlobalContext';

function GlobalProvider({ children }) {
  const [user, setUser] = useState();
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sellers, setSellers] = useState([]);
  const [currentOrder, setCurrentOrder] = useState();
  const navigate = useNavigate();

  const BASE_URL = 'http://localhost:3001';

  const USER_HOME = '/customer/products';

  const loginUser = useCallback(async ({ email, password }) => {
    const API = axios.create({
      baseURL: BASE_URL,
    });

    const HOMES = {
      administrator: '/admin/manage',
      customer: USER_HOME,
      seller: '/seller/orders',
    };
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
    const API = axios.create({
      baseURL: BASE_URL,
    });

    try {
      setLoading(true);
      const { data } = await API.post('/register', { name, email, password });
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
      setLoading(false);
      navigate(USER_HOME);
    } catch (err) {
      setError(err.response.data);
    }
  }, [navigate]);

  const getProducts = useCallback(async () => {
    const API = axios.create({
      baseURL: BASE_URL,
    });
    const currentUser = JSON.parse(localStorage.getItem('user'));
    const { data } = await API.get(USER_HOME, {
      headers: {
        Authorization: currentUser.token,
      },
    });
    setProducts(data);
  }, []);

  const getOrders = useCallback(async () => {
    const API = axios.create({
      baseURL: BASE_URL,
    });
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
    const API = axios.create({
      baseURL: BASE_URL,
    });
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
    const API = axios.create({
      baseURL: BASE_URL,
    });
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
    const API = axios.create({
      baseURL: BASE_URL,
    });
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
