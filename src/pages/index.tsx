import React, { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

export interface HomeProps {
  children?: ReactNode;
}

const Index: FC<HomeProps> = props => {
  const { children } = props;

  const navigate = useNavigate();

  return (
    <>
      <div>HOME PAGE</div>
      <button onClick={() => navigate('order-summary', { replace: true })}>
        Place order
      </button>
    </>
  );
};

export default Index;
