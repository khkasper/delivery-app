import React from 'react';
import NavBar from '../components/NavBar';
import NavItem from '../components/NavItem';
import ProductsList from '../components/ProductsList';
import CustomerProvider from '../context/CustomerProvider';

function Products() {
  return (
    <CustomerProvider>
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
        <ProductsList />
      </div>
    </CustomerProvider>
  );
}

export default Products;
