import React, { FC, ReactNode } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

export interface UsersProps {
  children?: ReactNode;
}

const Users: FC<UsersProps> = props => {
  const { children } = props;

  const [searchParams, setSearchParams] = useSearchParams();

  const showActiveUsers = searchParams.get('filter') === 'active';

  return (
    <>
      <div>
        <h2>user1</h2>
        <h2>user2</h2>
        <h2>user3</h2>
      </div>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: 'active' })}>
          ACTIVE USERS
        </button>
        <button onClick={() => setSearchParams({})}>RESET FILTER</button>
      </div>
      {showActiveUsers ? (
        <h2>Showing Active users</h2>
      ) : (
        <h2>Showing All Users</h2>
      )}
    </>
  );
};

export default Users;
