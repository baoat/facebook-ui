import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import { NavLink } from 'react-router-dom';
import React from 'react';

const cx = classNames.bind(style);

const MenuItem = React.forwardRef(({ icon, activeIcon, to }, ref) => {
  return (
    <li ref={ref} className={cx('menu')}>
      <NavLink className={(nav) => cx('btn-menu', { active: nav.isActive })} to={to}>
        <div className={cx('wrapper-span')}>
          <span className={cx('icon')}>{icon}</span>
          <span className={cx('icon-active')}>{activeIcon}</span>
          <div className={cx('border-bottom')}></div>
        </div>
      </NavLink>
    </li>
  );
});

export default MenuItem;
