import React from 'react';
import NavBar from './NavBar';
import NavItem from './NavItem';
import OrderDetailsList from './OrderDetailsList';
import OrderStatusBar from './OrderStatusBar';

function OrderCustomerDetails() {
  return (
    <div>
      <NavBar>
        <NavItem
          to="/customer/products"
          name="PRODUTOS"
          testId="customer_products__element-navbar-link-products"
        />
        <NavItem
          to="/customer/orders"
          name="MEUS PEDIDOS"
          testId="customer_products__element-navbar-link-orders"
        />
      </NavBar>
      <OrderStatusBar />
      <OrderDetailsList />
    </div>
  );
}

export default OrderCustomerDetails;
