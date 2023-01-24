import styles from './Navbar.module.scss';

import classNames from 'classnames/bind';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

const Navbar: FC = () => {
  return (
    <nav className={cx('nav-wrapper')}>
      <NavLink
        className={({ isActive }) => (isActive ? cx('active') : 'none')}
        to={''}
      >
        HOME
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? cx('active') : 'none')}
        to={'about'}
      >
        ABOUT
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? cx('active') : 'none')}
        to={'products'}
      >
        PRODUCTS
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? cx('active') : 'none')}
        to={'users'}
      >
        USERS
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? cx('active') : 'none')}
        to={'users/admin'}
      >
        ADMIN
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? cx('active') : 'none')}
        to={'query'}
      >
        QUERY
      </NavLink>
    </nav>
  );
};

export default Navbar;
