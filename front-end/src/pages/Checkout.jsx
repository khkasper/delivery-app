import React, { useContext, useEffect } from 'react';
import { Divider, Heading } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import NavItem from '../components/NavItem';
import CheckoutDetails from '../components/CheckoutDetails';
import CheckoutList from '../components/CheckoutList';
import CustomerProvider from '../context/CustomerProvider';
import GlobalContext from '../context/GlobalContext';

function Checkout() {
  const { setLoading, getSellers, loading } = useContext(GlobalContext);

  useEffect(() => {
    const loadSellers = async () => {
      setLoading(true);
      await getSellers();
      setLoading(false);
    };
    loadSellers();
  }, [getSellers, setLoading]);

  if (loading) return <div>Carregando</div>;

  return (
    <CustomerProvider>
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
      <Heading p="5">Checkout</Heading>
      <Divider />
      <CheckoutList />
      <Divider />
      <CheckoutDetails />
    </CustomerProvider>
  );
}

export default Checkout;
