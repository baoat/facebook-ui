import { faEarth, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import style from './Profile.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThreeDotIcon } from '../icons';

const cx = classNames.bind(style);

function Profile({ className }, user) {
  return (
    <div className={cx('profile', className)}>
      <div className={cx('profile-user')}>
        <div className={cx('avatar')}>
          <img src={user.avatar} alt="" />
        </div>
        <div className={cx('information')}>
          <div className={cx('information-name')}>
            <span>{user.name}</span>
          </div>
          <div className={cx('information-item')}>
            <FontAwesomeIcon className={cx('information-item__icon')} icon={faUserPlus} />
            <span>Has become friends with nguyenchibao</span>
          </div>
          <div className={cx('information-item')}>
            <FontAwesomeIcon className={cx('information-item__icon')} icon={faEarth} />
            <span>Has become friends with nguyenchibao</span>
          </div>
        </div>
      </div>
      <div className={cx('action')}>
        <Button className={cx('item')} primary>
          Message
        </Button>
        <Button className={cx('item')}>unFollow</Button>
        <Button className={cx('item', 'btn-three-dot')}>
          <ThreeDotIcon />
        </Button>
      </div>
    </div>
  );
}

export default Profile;
