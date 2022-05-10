import React, { useContext } from 'react';
import NavBar from '../components/NavBar';
import NavItem from '../components/NavItem';
import GlobalContext from '../context/GlobalContext';

function Products() {
  const { loading } = useContext(GlobalContext);
  if (loading) return <div>Carregando</div>;

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
    </div>
  );
}

export default Products;
