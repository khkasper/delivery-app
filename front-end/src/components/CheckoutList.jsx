import { Table, Tbody, Heading, Th, Thead, Tr, Stack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import CustomerContext from '../context/CustomerContext';
import CheckoutItem from './CheckoutItem';
import TotalPriceDisplay from './TotalPriceDisplay';

function CheckoutList() {
  const { cart, totalPrice } = useContext(CustomerContext);

  return (
    <Stack>
      <Heading size="md" px="5" mt="5">Itens do pedido</Heading>
      <Table>
        <Thead>
          <Tr>
            <Th>Item</Th>
            <Th>Descrição</Th>
            <Th>Quantidade</Th>
            <Th>Valor Unitário</Th>
            <Th>Sub-total</Th>
            <Th isNumeric>Remover</Th>
          </Tr>
        </Thead>
        <Tbody>
          { cart.map((cartItem, index) => (
            <CheckoutItem key={ cartItem.id } cartItem={ cartItem } index={ index } />
          ))}
        </Tbody>
      </Table>
      <TotalPriceDisplay
        totalPrice={ totalPrice }
        testId="customer_checkout__element-order-total-price"
      />
    </Stack>
  );
}

export default CheckoutList;
