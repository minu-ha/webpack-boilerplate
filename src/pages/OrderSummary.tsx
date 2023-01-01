import React, { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

export interface OrderSummaryProps {
  children?: ReactNode;
}

const OrderSummary: FC<OrderSummaryProps> = props => {
  const { children } = props;

  const navigate = useNavigate();

  return (
    <>
      <div>OrderSummaryProps</div>
      <button onClick={() => navigate(-1)}>go back</button>
    </>
  );
};

export default OrderSummary;
