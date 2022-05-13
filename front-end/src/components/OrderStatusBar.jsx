import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import Button from './Button';

function OrderStatusBar() {
  const { user, currentOrder, updateOrder } = useContext(GlobalContext);

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
          .toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' }) }
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
          disabled={ currentOrder.status !== 'Em Trânsito' }
          handleClick={ () => updateOrder(currentOrder.id, 'Entregue') }
        />
      )}
      {user.role === 'seller' && (
        <>
          <Button
            testId="seller_order_details__button-preparing-check"
            text="PREPARAR PEDIDO"
            disabled={ currentOrder.status !== 'Pendente' }
            handleClick={ () => updateOrder(currentOrder.id, 'Preparando') }
          />
          <Button
            testId="seller_order_details__button-dispatch-check"
            text="SAIU PARA ENTREGA"
            disabled={ currentOrder.status !== 'Preparando' }
            handleClick={ () => updateOrder(currentOrder.id, 'Em Trânsito') }
          />
        </>
      )}
    </div>
  );
}

export default OrderStatusBar;
