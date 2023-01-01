import React, { FC, ReactNode } from 'react';

export interface HomeProps {
  children?: ReactNode;
}

const Home: FC<HomeProps> = props => {
  const { children } = props;
  return <div>HOME PAGE</div>;
};

export default Home;
