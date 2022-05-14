import PropTypes from 'prop-types';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AdminContext from './AdminContext';
import GlobalContext from './GlobalContext';

function AdminProvider({ children }) {
  const { user: currentUser = {}, setLoading } = useContext(GlobalContext);
  const [users, setUsers] = useState([]);

  const API = axios.create({
    baseURL: 'http://localhost:3001',
  });

  const loadUsers = async () => {
    setLoading(true);
    try {
      const { data } = await API.get(
        '/admin/manage',
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

  const removeUser = async (userId) => {
    setLoading(true);
    try {
      await API.remove(
        `/admin/manage/${userId}`,
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
