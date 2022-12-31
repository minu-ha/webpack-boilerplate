import React, { FC } from 'react';
import { Link, Route, RoutesProps } from 'react-router-dom';

const Routes: FC<RoutesProps> = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/super-heroes">Traditional Super Heroes</Link>
          </li>
          <li>
            <Link to="/rq-super-heroes">RQ Super Heroes</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" />
        <Route path="/super-heroes" />
        <Route path="/rq-super-heroes/:heroId" />
        <Route path="/rq-super-heroes" />
        {/*        <Route path="/rq-parallel">
            <ParallelQueriesPage />
          </Route>
          <Route path="/rq-dynamic-parallel">
            <DynamicParallelPage heroIds={[1, 3]} />
          </Route>
          <Route path="/rq-dependent">
            <DependentQueriesPage email="vishwas@example.com" />
          </Route>
          <Route path="/rq-paginated">
            <PaginatedQueriesPage />
          </Route>
          <Route path="/rq-infinite">
            <InfiniteQueriesPage />
          </Route>*/}
      </Routes>
    </div>
  );
};

export default Routes;
