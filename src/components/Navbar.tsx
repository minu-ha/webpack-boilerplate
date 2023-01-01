import styles from './Navbar.module.scss';

import classNames from 'classnames/bind';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Navbar: FC = () => {
  return (
    <nav className={cx('nav-wrapper')}>
      <Link to={'/'}>HOME</Link>
      <Link to={'/about'}>ABOUT</Link>
    </nav>
  );
};

export default Navbar;
