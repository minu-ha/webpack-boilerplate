import React, { FC, ReactNode } from 'react';

export interface AsyncComponentProps {
  children?: ReactNode;
}

const AsyncComponent: FC<AsyncComponentProps> = props => {
  const { children } = props;
  return <div></div>;
};

export default AsyncComponent;
