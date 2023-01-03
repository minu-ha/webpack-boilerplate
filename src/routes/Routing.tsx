import About from 'pages/about';
import Admin from 'pages/admin';
import Error from 'pages/error';
import Home from 'pages/home';
import Products from 'pages/products';
import Users from 'pages/users';
import React, { FC } from 'react';
import { Route, Routes, RoutesProps } from 'react-router-dom';

const Routing: FC<RoutesProps> = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'about'} element={<About />} />
      <Route path={'products'} element={<Products />} />
      <Route path={'users'} element={<Users />} />
      <Route path={'admin'} element={<Admin />} />
      <Route path={'*'} element={<Error />} />
    </Routes>
  );
};

export default Routing;
