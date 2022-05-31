import React from 'react';
import { Heading, Stack } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import NavItem from '../components/NavItem';
import AddUserForm from '../components/AddUserForm';

function Admin() {
  return (
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
      </Stack>
    </main>
  );
}

export default Admin;
