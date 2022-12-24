import React, { FC } from 'react';
import styles from './Input.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export interface InputProps {
  placeholder: string;
}

const Input: FC<InputProps> = props => {
  const { ...rest } = props;
  return <input className={cx('box')} {...rest} />;
};

export default Input;
