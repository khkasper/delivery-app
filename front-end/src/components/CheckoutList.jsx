import React, { useContext } from 'react';
import CustomerContext from '../context/CustomerContext';
import CheckoutItem from './CheckoutItem';

function CheckoutList() {
  const { cart, totalPrice } = useContext(CustomerContext);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          { cart.map((cartItem, index) => (
            <CheckoutItem key={ cartItem.id } cartItem={ cartItem } index={ index } />
          ))}
        </tbody>
      </table>
      <div>
        <span
          data-testid="customer_checkout__element-order-total-price"
        >
          {totalPrice}
        </span>
      </div>
    </div>
  );
}

export default CheckoutList;
