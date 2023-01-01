import Navbar from 'components/Navbar';
import Admin from 'pages/Admin';
import FeatureProducts from 'pages/FeatureProducts';
import Home from 'pages/Home';
import NewProducts from 'pages/NewProducts';
import NoMatch from 'pages/NoMatch';
import OrderSummary from 'pages/OrderSummary';
import Products from 'pages/Products';
import UserDetails from 'pages/UserDetails';
import Users from 'pages/Users';
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const LazyAbout = lazy(() => import('pages/About'));
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route
          path={'about'}
          element={
            <Suspense fallback={'loading'}>
              <LazyAbout />
            </Suspense>
          }
        />
        <Route path={'order-summary'} element={<OrderSummary />} />
        <Route path={'products'} element={<Products />}>
          <Route path={'featured'} element={<FeatureProducts />} />
          <Route path={'new'} element={<NewProducts />} />
        </Route>
        <Route path={'users'} element={<Users />}>
          <Route path={':userId'} element={<UserDetails />} />
          <Route path={'admin'} element={<Admin />} />
        </Route>
        <Route path={'*'} element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default App;
