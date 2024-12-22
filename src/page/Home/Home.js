import classNames from 'classnames/bind';
import style from './Home.module.scss';
import { AvatarIcon, FeelAddActionIcon, ImageAddVideoIcon, LiveStreamIcon, X } from '../../components/icons';
import avatar from '../../acsets/img/358148583_3464818283834527_2059476123742042306_n.jpg';
import avatar1 from '../../acsets/img/Unnamed-17.jpg';
import Button from '../../components/Button';
import Stories from './components/Stories';
import Post from './components/Post';
import { useEffect, useRef } from 'react';

const cx = classNames.bind(style);

function Home() {
  const itemsStories = [
    { image: avatar },
    { image: avatar },
    { image: avatar },
    { image: avatar },
    { image: avatar },
    { image: avatar },
    { image: avatar },
    { image: avatar },
    { image: avatar },
    { image: avatar },
    { image: avatar },
    { image: avatar },
    { image: avatar },
    { image: avatar },
    { image: avatar },
    { image: avatar },
    { image: avatar },
    { image: avatar },
    { image: avatar },
    { image: avatar },
    { image: avatar },
    { image: avatar },
    { image: avatar },
    { image: avatar },
    { image: avatar },
    { image: avatar },
    { image: avatar },
    { image: avatar },
    { image: avatar },
    { image: avatar },
  ];
  return (
    <div className={cx('page-home')}>
      <div className={cx('page-home__wrapping')}>
        <div style={{ width: '605px' }}>
          <div className={cx('title')}>
            <div className={cx('title-think')}>
              {<AvatarIcon classNames={cx('title-think__avatar')} src={avatar1} />}
              <input className={cx('title-think__feeling')} placeholder="Bảo ơi, bạn đang nghĩ gì thế?" />
            </div>
            <div className={cx('title-function')}>
              <Button
                leftIcon={
                  <LiveStreamIcon
                    style={{ color: 'red' }}
                    className={cx('title-function__btn-icon')}
                    src={
                      'https://static.xx.fbcdn.net/rsrc.php/v4/yr/r/c0dWho49-X3.png?_nc_eui2=AeHFG1UO1mcSjzTYVtF8s3V6ueRic5Ym8Wm55GJzlibxacQbykANy_an21eKZ26yqF0cIhgdY0syWL31ZLhhXZHZ'
                    }
                  />
                }
                className={cx('title-function__live-stream', 'title-function__btn')}
              >
                <span className={cx('title-function__btn-text')}>Video trực tiếp</span>
              </Button>
              <Button
                leftIcon={
                  <ImageAddVideoIcon
                    className={cx('title-function__btn-icon')}
                    src={
                      'https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/Ivw7nhRtXyo.png?_nc_eui2=AeFEo8qkD5oN17GFifXNvZJtkBVQC4m7dx6QFVALibt3HhblQiay2PxlgWXwPc6JvD--K9cZrb-HrTygelLUVQzU'
                    }
                  />
                }
                className={cx('title-function__img-or-video', 'title-function__btn')}
              >
                Ảnh/video
              </Button>
              <Button
                leftIcon={
                  <FeelAddActionIcon
                    style={{ color: 'yellow' }}
                    className={cx('title-function__btn-icon')}
                    src={
                      'https://static.xx.fbcdn.net/rsrc.php/v4/yd/r/Y4mYLVOhTwq.png?_nc_eui2=AeEUJvjNXpE_ZIk1PypI28XlfPQ6N5_OUfV89Do3n85R9Wa2-OAEVApqQhTgDUewIbELx_VlmlePZ5p-23nurEr-'
                    }
                  />
                }
                className={cx('title-function__feel-or-action', 'title-function__btn')}
              >
                Cảm xúc/hoạt động
              </Button>
            </div>
          </div>
          <Stories items={itemsStories} itemsToShow={5} />
          <Post />
        </div>
      </div>
    </div>
  );
}

export default Home;
