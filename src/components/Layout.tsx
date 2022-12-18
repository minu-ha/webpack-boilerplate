import React from 'react';
import scss from 'components/Layout.module.scss';

import classNames from 'classnames';

const cx = classNames.bind(scss);

const Layout = () => {
  return <p className={cx(scss.box)}>REACT WEBPACK BOILER PLATE</p>;
};

export default Layout;
