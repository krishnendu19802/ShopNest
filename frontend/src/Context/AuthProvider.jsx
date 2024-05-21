import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState([false]);

  const login = (data) => {
    setIsAuthenticated([true, data]);
  };

  const logout = () => {
    setIsAuthenticated([false]);
  };

  const fetchdatalogin = async () => {
    const token = localStorage.getItem('shopnest_token')
    // console.log(token)
    if (token) {
      const headers = {
        "Authorization": `Bearer ${token}`
      };
      await axios.post(`http://localhost:8000/login`, {}, { headers }).then((result) => {
        // console.log(result.data)
        
        setIsAuthenticated([true, result.data])
      }).catch((error) => {
        console.log(error)
      })

    }
  }
  useEffect(() => {
    fetchdatalogin()
  }, [])
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };