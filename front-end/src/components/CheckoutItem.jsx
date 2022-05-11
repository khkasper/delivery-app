import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import CustomerContext from '../context/CustomerContext';
import Button from './Button';

function CheckoutItem({ cartItem, index }) {
  const { name, price, quantity } = cartItem;
  const { cart, setCart } = useContext(CustomerContext);

  const subtotal = () => (Number(price) * quantity);

  const remove = () => {
    const newCart = cart.reduce((acc, item) => {
      if (cartItem.id === item.id) {
        return acc;
      }
      return [...acc, item];
    }, []);
    console.log(newCart);
    setCart(newCart);
  };

  return (
    <tr>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        {index + 1}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        {name}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        {quantity}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        {price}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        {subtotal()}
      </td>
      <td>
        <Button
          testId={ `customer_checkout__element-order-table-remove-${index}` }
          text="REMOVER"
          handleClick={ remove }
        />
      </td>
    </tr>
  );
}

CheckoutItem.propTypes = {
  cartItem: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default CheckoutItem;
