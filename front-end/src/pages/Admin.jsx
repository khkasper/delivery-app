import React from 'react';
import { Heading, Stack } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import NavItem from '../components/NavItem';
import AddUserForm from '../components/AddUserForm';
import UserList from '../components/UserList';

import AdminProvider from '../context/AdminProvider';

function Admin() {
  return (
    <AdminProvider>
      <main>
        <div>
          <NavBar>
            <NavItem
              to=""
              name="GERENCIAR USUÁRIOS"
              testId="customer_products__element-navbar-link-products"
            />
          </NavBar>
        </div>
        <Stack>
          <Heading p="5" size="md">Cadastrar novo usuário</Heading>
          <AddUserForm />
          <UserList />
        </Stack>
      </main>
    </AdminProvider>
  );
}

export default Admin;
