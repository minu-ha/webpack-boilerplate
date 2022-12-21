import scss from 'components/Layout.module.scss';

import classNames from 'classnames';
import { FC } from 'react';

const cx = classNames.bind(scss);

const Layout: FC = () => {
  return <p className={cx(scss.box)}>REACT WEBPACK BOILER PLATE</p>;
};

export default Layout;
