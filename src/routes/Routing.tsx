import About from 'pages/About';
import React, { FC, lazy, Suspense } from 'react';
import { Route, Routes, RoutesProps, useLocation } from 'react-router-dom';

const Routing: FC<RoutesProps> = () => {
  const { pathname } = useLocation();

  const Page = lazy(() =>
    import(`pages/${pathname}`).catch(e => {
      console.log('pathname => ', pathname);
      if (/not find module/.test(e.message)) {
        return import('pages/NoMatch');
      }

      if (/Loading chunk \d+ failed/.test(e.message)) {
        window.location.reload();
        return;
      }

      console.log('e => ', e);
    })
  );
  return (
    <Routes>
      <Route
        path={'/'}
        element={
          <Suspense fallback={<div>Loading..</div>}>
            <Page />
          </Suspense>
        }
      />
      <Route path={'/about'} element={<About />} />
    </Routes>
  );
};

export default Routing;
