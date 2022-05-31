import { Stack, Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import OrderDetailsItem from './OrderDetailsItem';
import TotalPriceDisplay from './TotalPriceDisplay';

function OrderDetailsList() {
  const { currentOrder, user } = useContext(GlobalContext);

  if (!currentOrder) return <div>Carregando</div>;

  return (
    <Stack>
      <Table>
        <Thead>
          <Tr>
            <Th>Item</Th>
            <Th>Descrição</Th>
            <Th isNumeric>Quantidade</Th>
            <Th isNumeric>Valor Unitário</Th>
            <Th isNumeric>Sub-total</Th>
          </Tr>
        </Thead>
        <Tbody>
          { currentOrder.products.map((product, index) => (
            <OrderDetailsItem key={ product.id } product={ product } index={ index } />
          ))}
        </Tbody>
      </Table>
      <TotalPriceDisplay
        testid={ `${user.role}_order_details__element-order-total-price` }
        totalPrice={ currentOrder.totalPrice }
      />
    </Stack>
  );
}

export default OrderDetailsList;
