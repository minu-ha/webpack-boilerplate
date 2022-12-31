import scss from './Navbar.module.scss';

import classNames from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(scss);

const Navbar: FC = () => {
  return (
    <nav className={cx('box')}>
      <Link to={'/'}>HOME</Link>
      <Link to={'/about'}>ABOUT</Link>
    </nav>
  );
};

export default Navbar;
