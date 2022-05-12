import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import Button from './Button';

function OrderStatusBar() {
  const { user, currentOrder } = useContext(GlobalContext);

  if (!currentOrder) return <div>Carregando</div>;

  return (
    <div>
      <span
        data-testid={ `${user.role}_order_details__element-order-details-label-order-id` }
      >
        PEDIDO
        {currentOrder.id}
      </span>
      <span
        data-testid={
          `${user.role}_order_details__element-order-details-label-seller-name`
        }
      >
        {currentOrder.seller.name}
      </span>
      <span
        data-testid={
          `${user.role}_order_details__element-order-details-label-order-date`
        }
      >
        { new Date(currentOrder.saleDate)
          .toLocaleDateString('pt-BR', { timeZone: 'UTC' }) }
      </span>
      <span
        data-testid={
          `${user.role}_order_details__element-order-details-label-delivery-status`
        }
      >
        {currentOrder.status}
      </span>
      {user.role === 'customer' && (
        <Button
          testId="customer_order_details__button-delivery-check"
          text="MARCAR COMO ENTREGUE"
          disabled
          // handleClick={ X }
        />
      )}
      {user.role === 'seller' && (
        <>
          <Button
            testId="seller_order_details__button-preparing-check"
            text="PREPARAR PEDIDO"
            // handleClick={ X }
          />
          <Button
            testId="seller_order_details__button-dispatch-check"
            disabled
            text="SAIU PARA ENTREGA"
            // handleClick={ X }
          />
        </>
      )}
    </div>
  );
}

export default OrderStatusBar;
