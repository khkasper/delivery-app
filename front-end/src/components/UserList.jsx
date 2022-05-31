import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useContext } from 'react';
import AdminContext from '../context/AdminContext';
import Button from './Button';

function UserList() {
  const { users, removeUser } = useContext(AdminContext);

  return (
    <div>
      <Table p="5">
        <Thead>
          <Tr>
            <Th>Item</Th>
            <Th>Nome</Th>
            <Th>Email</Th>
            <Th>tipo</Th>
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
    </div>
  );
}

export default UserList;
