import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CustomerContext from './CustomerContext';

function CustomerProvider({ children }) {
  const [totalPrice, setTotalPrice] = useState('0.00');

  const context = {
    totalPrice,
    setTotalPrice,
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
