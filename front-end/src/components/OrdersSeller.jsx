import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Divider, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import GlobalContext from '../context/GlobalContext';
import NavBar from './NavBar';
import NavItem from './NavItem';
import OrderItem from './OrderItem';

function OrdersSeller({ dataTestIdsSeller }) {
  const { orders, user, loading } = useContext(GlobalContext);
  if (loading) return <div>Carregando</div>;
  return (
    <div>
      <NavBar>
        <NavItem
          to="/seller/orders"
          name="PEDIDOS"
          testId="customer_products__element-navbar-link-orders"
        />
      </NavBar>
      <SimpleGrid p="5" columns="5">
        <Text fontWeight="bold">ID</Text>
        <Text fontWeight="bold">Status</Text>
        <Text fontWeight="bold">Data</Text>
        <Text fontWeight="bold">Total</Text>
        <Text fontWeight="bold">Endereço</Text>
      </SimpleGrid>
      <Divider />
      <Stack p="5">
        {
          orders.map((order, index) => (
            <>
              <OrderItem
                key={ index }
                testIds={ dataTestIdsSeller }
                orderId={ order.id }
                status={ order.status }
                date={ order.saleDate }
                price={ order.totalPrice }
                address={ order.deliveryAddress }
                addressNumber={ order.deliveryNumber }
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

OrdersSeller.propTypes = {
  dataTestIdsSeller: PropTypes.shape({
    address: PropTypes.string,
    date: PropTypes.string.isRequired,
    orderId: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrdersSeller;
