import classNames from 'classnames/bind';
import style from './Emotions.module.scss';

const cx = classNames.bind(style);

function Emotions({ className }) {
  return (
    <div className={cx('choose-emotion', `${className}`)}>
      <div className={cx('emotion')}></div>
      <div className={cx('emotion')}></div>
      <div className={cx('emotion')}></div>
      <div className={cx('emotion')}></div>
      <div className={cx('emotion')}></div>
      <div className={cx('emotion')}></div>
      <div className={cx('emotion')}></div>
    </div>
  );
}

export default Emotions;
