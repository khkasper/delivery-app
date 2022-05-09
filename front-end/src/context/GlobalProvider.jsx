import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import GlobalContext from './GlobalContext';

function GlobalProvider({ children }) {
  const [user, setUser] = useState();
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [ordersCustomer, setOrdersCustomer] = useState([]);
  const [ordersSeller, setOrdersSeller] = useState([]);
  const [loading, setLoading] = useState(true);
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
      setLoading(true);
      const { data } = await API.post('/login', { email, password });
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
      setLoading(false);
      navigate(HOMES[data.role]);
    } catch (err) {
      setError(err.response.data);
    }
  };

  const registerUser = async ({ name, email, password }) => {
    try {
      setLoading(true);
      const { data } = await API.post('/register', { name, email, password });
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
      setLoading(false);
      navigate(HOMES[data.role]);
    } catch (err) {
      setError(err.response.data);
    }
  };

  const getOrdersCustomer = async () => {
    setLoading(true);
    // const { data } = await API.post('/customer/orders', token);
    const data = [
      {
        orderId: 1,
        userId: 1,
        sellerId: 3,
        price: 4.00,
        address: 'Rua Teste, Bairro Teste, Cidade Teste, Estado Teste',
        addressNumber: '123',
        date: '05/05/2022',
        status: 'Entregue',
      },
      {
        orderId: 2,
        userId: 1,
        sellerId: 3,
        price: 5.00,
        address: 'Rua Teste2, Bairro Teste2, Cidade Teste2, Estado Teste2',
        addresNumber: '987',
        date: '06/05/2022',
        status: 'Entregue',
      },
    ];
    setOrdersCustomer(data);
  };

  const getOrdersSeller = async () => {
    setLoading(true);
    // const { data } = await API.post('/seller/orders', token);
    const data = [
      {
        orderId: 1,
        userId: 1,
        sellerId: 3,
        price: 4.00,
        address: 'Rua Teste, Bairro Teste, Cidade Teste, Estado Teste',
        addressNumber: '123',
        date: '07/05/2022',
        status: 'Entregue',
      },
      {
        orderId: 2,
        userId: 1,
        sellerId: 3,
        price: 5.00,
        address: 'Rua Teste2, Bairro Teste2, Cidade Teste2, Estado Teste2',
        addressNumber: '987',
        date: '08/05/2022',
        status: 'Entregue',
      },
    ];
    setOrdersSeller(data);
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

  const handleLogOut = () => {
    setLoading(true);
    localStorage.removeItem('user');
    setUser();
    setLoading(false);
    navigate('/');
  };

  const getProducts = async () => {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    const { data } = await API.get('/customer/products', {
      headers: {
        Authorization: currentUser.token,
      },
    });
    setProducts(data);
  };

  useEffect(() => {
    setLoading(true);
    const currentUser = JSON.parse(localStorage.getItem('user'));
    setUser(currentUser);
    getOrdersCustomer();
    getOrdersSeller();
    // getProducts();
    setLoading(false);
  }, []);

  const context = {
    user,
    error,
    loginUser,
    registerUser,
    ordersCustomer,
    ordersSeller,
    handleLogOut,
    HOMES,
    products,
    loading,
    registerUserAdmin,
    getProducts,
    setLoading,
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
