import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Products from '../pages/Products';
import Orders from '../pages/Orders';
import Admin from '../pages/Admin';

function Router() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/customer/orders" element={ <Orders /> } />
      <Route exact path="/customer/products" element={ <Products /> } />
      <Route exact path="/seller/orders" element={ <Orders /> } />
      <Route exact path="/admin/manage" element={ <Admin /> } />
      <Route exact path="*" element={ <Navigate to="/login" /> } />
    </Routes>
  );
}

export default Router;
