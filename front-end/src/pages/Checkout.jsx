import React from 'react';
import CheckoutDetails from '../components/CheckoutDetails';
import CheckoutList from '../components/CheckoutList';
import CustomerProvider from '../context/CustomerProvider';

function Checkout() {
  return (
    <CustomerProvider>
      <CheckoutList />
      <CheckoutDetails />
    </CustomerProvider>
  );
}

export default Checkout;
