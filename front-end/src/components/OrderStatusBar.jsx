import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext'; 
import Button from '../components/Button';

function OrderStatusBar() {
  const { user, currentOrder } = useContext(GlobalContext)

  return (
    <div>
      <span>PEDIDO {currentOrder.id} </span>
      <span data-testid="customer_order_details__element-order-details-label-seller-name">
        {currentOrder.seller.name}
      </span>
      <span data-testid="customer_order_details__element-order-details-label-order-date">
        {currentOrder.saleDate}
      </span>
      <span data-testid="customer_order_details__element-order-details-label-delivery-status">
        {currentOrder.status}
      </span>
      {user.role === "customer" && (
        <Button
          testId="customer_order_details__button-delivery-check"
          text="MARCAR COMO ENTREGUE"
          handleClick={X}
        />
      )}
      {user.role === "seller" && (
        <>
          <Button
            testId="seller_order_details__button-preparing-check"
            text="PREPARAR PEDIDO"
            handleClick={X}
          />
          <Button
            testId="seller_order_details__button-dispatch-check"
            text="SAIU PARA ENTREGA"
            handleClick={X}
          />
        </>
      )}
    </div>
  );
}

export default OrderStatusBar;
