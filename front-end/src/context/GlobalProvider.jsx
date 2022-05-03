import React, { useState }from "react";
import axios from 'axios';
import GlobalContext from "./GlobalContext";

function GlobalProvider({ children }) {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const API = axios.create({
    baseURL: 'http://localhost:3001',
  });

  const loginUser = async ({ email, password }) => {
    try {
      const { data } = await API.post('/login', { email, password });
      setUser(data);
    } catch(err) {
      setError(err.response.data);
    }
  };

  const context = {
    user,
    error,
    loginUser,
  }; 

  return (
    <GlobalContext.Provider value={ context }>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
