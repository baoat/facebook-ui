import classNames from 'classnames/bind';
import style from './Menu.module.scss';

const cx = classNames.bind(style);

function Menu({ children }) {
  return <ul className={cx('wrapper-menu')}>{children}</ul>;
}

export default Menu;
