import React, { FC, ReactNode } from 'react';

export interface NewProductsProps {
  children?: ReactNode;
}

const NewProducts: FC<NewProductsProps> = props => {
  const { children } = props;
  return <div>List of New products</div>;
};

export default NewProducts;
