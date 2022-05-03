import React, { useEffect, useState }from "react";
import axios from 'axios';
import GlobalContext from "./GlobalContext";

function GlobalProvider({ children }) {
  const [user, setUser] = useState({
    userId: 1,
    name: 'Gabriel',
    email: 'gabriel@gmail.com',
    role: 'customer',
    token: '',
  });

  const API = axios.create({
    baseURL: 'http://localhost:3001',
  });

  const loginUser = async ({ email, password }) => {
    try {
      const user = await API.post('/login', { email, password });
      console.log(user);
      // setUser(user);
    } catch(err) { 
      console.log(err);
    }
  };

  const context = {
    user
  }; 
  return (
    <GlobalContext.Provider value={ context }>
      {children}
    </GlobalContext.Provider>
  );
}