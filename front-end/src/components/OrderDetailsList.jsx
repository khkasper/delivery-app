import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import OrderDetailsItem from './OrderDetailsItem';

function OrderDetailsList() {
  const { currentOrder, user } = useContext(GlobalContext);

  if (!currentOrder) return <div>Carregando</div>;

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
          </tr>
        </thead>
        <tbody>
          { currentOrder.products.map((product, index) => (
            <OrderDetailsItem key={ product.id } product={ product } index={ index } />
          ))}
        </tbody>
      </table>
      <div>
        <span
          data-testid={ `${user.role}_order_details__element-order-total-price` }
        >
          {parseFloat(currentOrder.totalPrice)
            .toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </span>
      </div>
    </div>
  );
}

export default OrderDetailsList;
