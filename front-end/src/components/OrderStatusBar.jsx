import { Badge, HStack, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import Button from './Button';

function OrderStatusBar() {
  const { user, currentOrder, updateOrder } = useContext(GlobalContext);

  if (!currentOrder) return <div>Carregando</div>;

  return (
    <HStack justifyContent="space-between" px="5" py="3">
      <Text
        fontWeight="bold"
        data-testid={ `${user.role}_order_details__element-order-details-label-order-id` }
      >
        PEDIDO&nbsp;
        {currentOrder.id}
      </Text>
      <Text
        data-testid={
          `${user.role}_order_details__element-order-details-label-seller-name`
        }
      >
        {currentOrder.seller.name}
      </Text>
      <Text
        data-testid={
          `${user.role}_order_details__element-order-details-label-order-date`
        }
      >
        { new Date(currentOrder.saleDate)
          .toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' }) }
      </Text>
      <Badge
        fontSize="0.9em"
        data-testid={
          `${user.role}_order_details__element-order-details-label-delivery-status`
        }
      >
        {currentOrder.status}
      </Badge>
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
    </HStack>
  );
}

export default OrderStatusBar;
