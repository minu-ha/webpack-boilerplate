import React, { FC, ReactNode } from 'react';

export interface NoMatchProps {
  children?: ReactNode;
}

const Index: FC<NoMatchProps> = props => {
  const { children } = props;
  return <div>PAGE NOT FOUND</div>;
};

export default Index;
