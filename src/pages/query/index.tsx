import React, { FC, ReactNode } from 'react';

export interface IndexProps {
  children?: ReactNode;
}

const Index: FC<IndexProps> = props => {
  const { children } = props;
  return <div></div>;
};

export default Index;
