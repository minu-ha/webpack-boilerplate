import React, { FC, ReactNode } from 'react';

export interface FeatureProductsProps {
  children?: ReactNode;
}

const FeatureProducts: FC<FeatureProductsProps> = props => {
  const { children } = props;
  return <div>List of Feature products</div>;
};

export default FeatureProducts;
