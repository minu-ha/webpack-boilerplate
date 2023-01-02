import React, { FC, lazy, Suspense } from 'react';
import { Route, Routes, RoutesProps, useLocation } from 'react-router-dom';

const Routing: FC<RoutesProps> = () => {
  const { pathname } = useLocation();
  console.log('pathname => ', pathname);

  const Page = lazy(() =>
    import(`pages${pathname}`).catch(e => {
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
    </Routes>
  );
};

export default Routing;
