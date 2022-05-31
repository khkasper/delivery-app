import { Td, Tr } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

function OrderDetailstItem({ product, index }) {
  const { user } = useContext(GlobalContext);
  const { name, price, SaleProduct: { quantity } } = product;

  const subtotal = () => (Number(price) * quantity);

  return (
    <Tr>
      <Td
        data-testid={
          `${user.role}_order_details__element-order-table-item-number-${index}`
        }
      >
        {index + 1}
      </Td>
      <Td
        data-testid={
          `${user.role}_order_details__element-order-table-name-${index}`
        }
      >
        {name}
      </Td>
      <Td
        isNumeric
        data-testid={
          `${user.role}_order_details__element-order-table-quantity-${index}`
        }
      >
        {quantity}
      </Td>
      <Td
        isNumeric
        data-testid={
          `${user.role}_order_details__element-order-table-unit-price-${index}`
        }
      >
        {parseFloat(price)
          .toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      </Td>
      <Td
        isNumeric
        data-testid={
          `${user.role}_order_details__element-order-table-sub-total-${index}`
        }
      >
        {parseFloat(subtotal())
          .toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      </Td>
    </Tr>
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
