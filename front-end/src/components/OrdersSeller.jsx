import PropTypes from 'prop-types';
import React, { useContext } from 'react';
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
      {
        orders.map((order, index) => (
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
        ))
      }
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
