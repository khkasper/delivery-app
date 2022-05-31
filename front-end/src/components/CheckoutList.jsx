import { Table, Tbody, Heading, Th, Thead, Tr, Box, Stack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import CustomerContext from '../context/CustomerContext';
import CheckoutItem from './CheckoutItem';

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
      <Box alignSelf="end" p="5">
        <Heading
          size="md"
          borderRadius="5px"
          background="Highlight"
          p="3"
        >
          Total: R$&nbsp;
          <span
            data-testid="customer_checkout__element-order-total-price"
          >
            {parseFloat(totalPrice)
              .toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </span>
        </Heading>
      </Box>
    </Stack>
  );
}

export default CheckoutList;
