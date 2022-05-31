import React, { useContext } from 'react';
// import { TableContainer, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import AdminContext from '../context/AdminContext';
import Button from './Button';

function UserList() {
  const { users, removeUser } = useContext(AdminContext);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>Email</th>
            <th>tipo</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          { users.map(({ id, name, email, role }, index) => (
            <tr key={ id }>
              <td data-testid={ `admin_manage__element-user-table-item-number-${index}` }>
                { index }
              </td>
              <td data-testid={ `admin_manage__element-user-table-name-${index}` }>
                { name }
              </td>
              <td data-testid={ `admin_manage__element-user-table-email-${index}` }>
                { email }
              </td>
              <td data-testid={ `admin_manage__element-user-table-role-${index}` }>
                { role }
              </td>
              <td>
                <Button
                  text="Excluir"
                  testId={ `admin_manage__element-user-table-remove-${index}` }
                  handleClick={ () => removeUser(id) }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
