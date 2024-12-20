import classNames from 'classnames/bind';
import style from './LayoutHome.module.scss';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const cx = classNames.bind(style);

function LayoutHome({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        {children}
        <div style={{ flex: 1 }}>
          <h1>Sidebar 2</h1>
        </div>
      </div>
    </div>
  );
}

export default LayoutHome;
