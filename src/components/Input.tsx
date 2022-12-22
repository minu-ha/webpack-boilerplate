import React, { FC } from 'react';
import scss from './Input.module.scss';
import classNames from 'classnames';

const cx = classNames.bind(scss);

export interface InputProps {
  placeholder: string;
}

const Input: FC<InputProps> = props => {
  const { ...rest } = props;
  return <input className={cx(scss.wrapper)} {...rest} />;
};

export default Input;
