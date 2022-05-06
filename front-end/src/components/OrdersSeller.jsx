import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import NavBar from './NavBar';
import NavItem from './NavItem';
import OrderItem from './OrderItem';

function OrdersSeller({ dataTestIdsSeller }) {
  const { ordersSeller, user, loading } = useContext(GlobalContext);
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
        ordersSeller.map((order, index) => (
          <OrderItem
            key={ index }
            testIds={ dataTestIdsSeller }
            orderId={ order.orderId }
            status={ order.status }
            date={ order.date }
            price={ order.price }
            address={ order.address }
            addressNumber={ order.addressNumber }
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
