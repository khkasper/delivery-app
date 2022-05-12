import React from 'react';
import NavBar from './NavBar';
import NavItem from './NavItem';
import OrderDetailsList from './OrderDetailsList';
import OrderStatusBar from './OrderStatusBar';

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
      <OrderStatusBar />
      <OrderDetailsList />
    </div>
  );
}

export default OrderSellerDetails;
