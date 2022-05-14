import React, { useContext } from 'react';
import { TableContainer, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import AdminContext from '../context/AdminContext';
import Button from './Button';

function UserList() {
  const { users, removeUser } = useContext(AdminContext);

  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Item</Th>
            <Th>Nome</Th>
            <Th>Email</Th>
            <Th>Tipo</Th>
            <Th>Excluir</Th>
          </Tr>
        </Thead>
        <Tbody>
          { users.map(({ id, name, email, role }, index) => (
            <Tr key={ id }>
              <Td data-testid={ `admin_manage__element-user-table-item-number-${index}` }>
                { index }
              </Td>
              <Td data-testid={ `admin_manage__element-user-table-name-${index}` }>
                { name }
              </Td>
              <Td data-testid={ `admin_manage__element-user-table-email-${index}` }>
                { email }
              </Td>
              <Td data-testid={ `admin_manage__element-user-table-role-${index}` }>
                { role }
              </Td>
              <Td>
                <Button
                  text="Excluir"
                  testId={ `admin_manage__element-user-table-remove-${index}` }
                  handleClick={ () => removeUser(id) }
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default UserList;
