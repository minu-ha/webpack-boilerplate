import About from 'pages/about';
import Admin from 'pages/admin';
import Error from 'pages/error';
import Home from 'pages/home';
import Products from 'pages/products';
import Users from 'pages/users';
import React, { FC } from 'react';
import { Route, Routes, RoutesProps } from 'react-router-dom';

const Routing: FC<RoutesProps> = () => {
  /* const { pathname } = useLocation();

  console.log('pathname => ', pathname);
  const Page = lazy(() =>
    import('pages' + pathname).catch(e => {
      if (/Loading chunk \d+ failed/.test(e.message)) {
        window.location.reload();
        return;
      }

      console.log('e => ', e);
    })
  ); */
  return (
    <Routes>
      {/*   <Route
        path={'/'}
        element={
          <Suspense fallback={<div>Loading..</div>}>
            <Page />
          </Suspense>
        }
      /> */}
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
