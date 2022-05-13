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
      {
        orders.map((order, index) => (
          <OrderItem
            key={ index }
            testIds={ dataTestIdsCustomer }
            orderId={ order.id }
            status={ order.status }
            date={ order.saleDate }
            price={ order.totalPrice }
            role={ user.role }
          />
        ))
      }
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
