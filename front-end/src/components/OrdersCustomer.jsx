import { Divider, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import NavBar from './NavBar';
import NavItem from './NavItem';
import OrderItem from './OrderItem';

function OrdersCustomer({ dataTestIdsCustomer }) {
  const { orders, loading, user } = useContext(GlobalContext);
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
      <SimpleGrid p="5" columns="4">
        <Text fontWeight="bold">ID</Text>
        <Text fontWeight="bold">Status</Text>
        <Text fontWeight="bold">Data</Text>
        <Text fontWeight="bold">Total</Text>
      </SimpleGrid>
      <Divider />
      <Stack p="5">
        {
          orders.map((order, index) => (
            <>
              <OrderItem
                key={ index }
                testIds={ dataTestIdsCustomer }
                orderId={ order.id }
                status={ order.status }
                date={ order.saleDate }
                price={ order.totalPrice }
                role={ user.role }
              />
              <Divider />
            </>
          ))
        }
      </Stack>
    </div>
  );
}

OrdersCustomer.propTypes = {
  dataTestIdsCustomer: PropTypes.shape({
    address: PropTypes.string,
    date: PropTypes.string.isRequired,
    orderId: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrdersCustomer;
