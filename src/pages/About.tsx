import React, { FC, ReactNode } from 'react';

export interface AboutProps {
  children?: ReactNode;
}

const About: FC<AboutProps> = props => {
  const { children } = props;
  return <div></div>;
};

export default About;
