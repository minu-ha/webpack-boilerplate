import React, { FC, ReactNode } from 'react';

export interface HomeProps {
  children?: ReactNode;
}

const Home: FC<HomeProps> = props => {
  const { children } = props;
  return <div></div>;
};

export default Home;
