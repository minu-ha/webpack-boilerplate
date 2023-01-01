import React, { FC, ReactNode } from 'react';
import { Link, Outlet } from 'react-router-dom';

export interface ProductsProps {
  children?: ReactNode;
}

const Products: FC<ProductsProps> = props => {
  const { children } = props;
  return (
    <>
      <div>
        <input type={'search'} placeholder={'search products'} />
      </div>
      <nav>
        <Link to={'featured'}>Featured</Link>
        <Link to={'new'}>new</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;
