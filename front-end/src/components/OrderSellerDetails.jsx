import React from 'react';
import NavBar from '../components/NavBar';
import NavItem from '../components/NavItem';
import OrderDetailsList from '../components/OrderDetailsList';

function OrderSellerDetails() {
  return (
    <div>
      <NavBar>
        <NavItem
          to="/seller/orders"
          name="MEUS PEDIDOS"
          testId="seller-navbar-link-orders"
        />
      </NavBar>
      <OrderDetailsList />
    </div>
  );
}

export default OrderSellerDetails;
