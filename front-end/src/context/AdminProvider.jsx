import PropTypes from 'prop-types';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AdminContext from './AdminContext';
import GlobalContext from './GlobalContext';

function AdminProvider({ children }) {
  const { user: currentUser = {}, setLoading, setError } = useContext(GlobalContext);
  const [users, setUsers] = useState([]);

  const API = axios.create({
    baseURL: 'http://localhost:3001',
  });

  const ADMIN_URL = '/admin/manage';

  const loadUsers = async () => {
    setLoading(true);
    try {
      const { data } = await API.get(
        ADMIN_URL,
        {
          headers: {
            Authorization: currentUser.token,
          },
        },
      );
      setUsers(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const registerUserAdmin = async ({ name, email, password, role }) => {
    try {
      await API.post(
        ADMIN_URL,
        { name, email, password, role },
        {
          headers: {
            Authorization: currentUser.token,
          },
        },
      );
      await loadUsers();
    } catch (err) {
      setError(err.response.data);
    }
  };

  const removeUser = async (userId) => {
    setLoading(true);
    try {
      await API.delete(
        `${ADMIN_URL}/${userId}`,
        {
          headers: {
            Authorization: currentUser.token,
          },
        },
      );
      await loadUsers();
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (currentUser.token) loadUsers();
  }, [currentUser]);

  const context = {
    registerUserAdmin,
    removeUser,
    users,
  };

  return (
    <AdminContext.Provider value={ context }>
      {children}
    </AdminContext.Provider>
  );
}

AdminProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminProvider;
