import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function OrderItem({ testIds, orderId, status, date,
  price, address, addressNumber, role }) {
  return (
    <Link to={ `/${role}/orders/${orderId}` }>
      <div>
        <span>Pedido</span>
        <span data-testid={ `${testIds.orderId}${orderId}` }>{ orderId }</span>
        <span data-testid={ `${testIds.status}${orderId}` }>{ status }</span>
        <span data-testid={ `${testIds.date}${orderId}` }>{ date }</span>
        <span data-testid={ `${testIds.price}${orderId}` }>{ price }</span>
        { role === 'seller'
          && (
            <span data-testid={ `${testIds.address}${orderId}` }>
              {`${address}, ${addressNumber}`}
            </span>)}
      </div>
    </Link>
  );
}

OrderItem.propTypes = {
  address: PropTypes.string.isRequired,
  addressNumber: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  orderId: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  role: PropTypes.string.string.isRequired,
  status: PropTypes.string.isRequired,
  testIds: PropTypes.shape({
    address: PropTypes.string,
    date: PropTypes.string.isRequired,
    orderId: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderItem;
