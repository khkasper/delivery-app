import PropTypes from 'prop-types';
import React, { useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
import AdminContext from './AdminContext';
import GlobalContext from './GlobalContext';

function AdminProvider({ children }) {
  const { user: currentUser = {}, setLoading, setError } = useContext(GlobalContext);
  const [users, setUsers] = useState([]);

  const BASE_URL = 'http://localhost:3001';
  const ADMIN_URL = '/admin/manage';

  const loadUsers = useCallback(async () => {
    const API = axios.create({
      baseURL: BASE_URL,
    });
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
  }, [currentUser.token, setLoading]);

  const registerUserAdmin = async ({ name, email, password, role }) => {
    const API = axios.create({
      baseURL: BASE_URL,
    });
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
      setError(err.response);
    }
  };

  const removeUser = async (userId) => {
    const API = axios.create({
      baseURL: BASE_URL,
    });
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
  }, [currentUser, loadUsers]);

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
