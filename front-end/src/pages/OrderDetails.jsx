import React from 'react';
import NavBar from '../components/NavBar';
import NavItem from '../components/NavItem';

function OrderDetails() {
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
      OrderDetails
    </div>
  );
}

export default OrderDetails;
