import PropTypes from 'prop-types';
import React from 'react';

function OrderDetailstItem({ product, index }) {
  const { name, price, SaleProduct: { quantity } } = product;

  const subtotal = () => (Number(price) * quantity);

  return ( 
    <tr>
      <td
        data-testid={ `customer_order_details__element-order-table-item-number-${index}` }
      >
        {index + 1}
      </td>
      <td
        data-testid={ `customer_order_details__element-order-table-name-${index}` }
      >
        {name}
      </td>
      <td
        data-testid={ `customer_order_details__element-order-table-quantity-${index}` }
      >
        {quantity}
      </td>
      <td
        data-testid={ `customer_order_details__element-order-table-unit-price-${index}` }
      >
        {parseFloat(price)
          .toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      </td>
      <td
        data-testid={ `customer_order_details__element-order-table-sub-total-${index}` }
      >
        {parseFloat(subtotal())
          .toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      </td>
    </tr>
  );
}

OrderDetailstItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    SaleProduct: PropTypes.shape({
      quantity: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default OrderDetailstItem;
