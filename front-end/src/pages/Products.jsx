import React, { useContext, useEffect } from 'react';
import { Container } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import NavItem from '../components/NavItem';
import ProductsList from '../components/ProductsList';
import CustomerProvider from '../context/CustomerProvider';
import GlobalContext from '../context/GlobalContext';

function Products() {
  const { loading, getProducts, setLoading } = useContext(GlobalContext);

  useEffect(() => {
    setLoading(true);
    const loadProducts = async () => {
      await getProducts();
    };
    loadProducts();
    setLoading(false);
  }, [getProducts, setLoading]);

  if (loading) return <div>Carregando</div>;

  return (
    <CustomerProvider>
      <Container maxW="100%" p={ 0 }>
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
      </Container>
    </CustomerProvider>
  );
}

export default Products;
