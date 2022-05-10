import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import CustomerContext from './CustomerContext';

function CustomerProvider({ children }) {
  const [totalPrice, setTotalPrice] = useState('0.00');
  const loadCart = () => {
    if (localStorage.getItem('cart') !== null) {
      return JSON.parse(localStorage.getItem('cart'));
    }
    return [];
  };
  const [cart, setCart] = useState(loadCart());

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    setTotalPrice(cart.reduce((acc, { quantity, price }) => (
      acc + (quantity * Number(price))
    ), 0));
  }, [cart]);

  const context = {
    totalPrice,
    cart,
    setCart,
  };

  return (
    <CustomerContext.Provider value={ context }>
      {children}
    </CustomerContext.Provider>
  );
}

CustomerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomerProvider;
