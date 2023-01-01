import React, { FC, ReactNode } from 'react';

export interface NoMatchProps {
  children?: ReactNode;
}

const NoMatch: FC<NoMatchProps> = props => {
  const { children } = props;
  return <div>PAGE NOT FOUND</div>;
};

export default NoMatch;
