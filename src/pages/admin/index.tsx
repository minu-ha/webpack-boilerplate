import React, { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

export interface AdminProps {
  children?: ReactNode;
}

const Index: FC<AdminProps> = props => {
  const { children } = props;
  return (
    <>
      <div>ADMIN USER</div>
      <Outlet />
    </>
  );
};

export default Index;
