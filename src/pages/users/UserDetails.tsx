import React, { FC, ReactNode } from 'react';
import { useParams } from 'react-router-dom';

export interface UserDetailsProps {
  children?: ReactNode;
}

const UserDetails: FC<UserDetailsProps> = props => {
  const { children } = props;

  const { userId } = useParams();

  return <div>Details about user {userId}</div>;
};

export default UserDetails;
