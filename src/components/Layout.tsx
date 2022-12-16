import React from 'react';
import styles from './Layout.module.scss';

import classNames from 'classnames';

const cx = classNames.bind(styles);

const Layout = () => {
  return <div className={cx(styles.box)}>REACT WEBPACK </div>;
};

export default Layout;
