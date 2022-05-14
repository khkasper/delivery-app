import React from 'react';

import NavBar from '../components/NavBar';
import NavItem from '../components/NavItem';

import AdminProvider from '../context/AdminProvider';
import UserList from '../components/UserList';
import UserListBar from '../components/UserListBar';

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
        <UserListBar />
        <UserList />
      </main>
    </AdminProvider>
  );
}

export default Admin;
