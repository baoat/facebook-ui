import classNames from 'classnames/bind';
import style from './Home.module.scss';
import { AddStoryIcon, AvatarIcon, ThreeDotIcon, X } from '../../components/icons';
import avatar from '../../acsets/img/358148583_3464818283834527_2059476123742042306_n.jpg';
import avatar1 from '../../acsets/img/Unnamed-17.jpg';
import Button from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faImages, faFaceLaugh } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function Home() {
  return (
    <>
      {/* <div className={cx('parent')}>
        <img alt="" src={avatar} />
        <div className={cx('child-1')}>Nội dung 1</div>
        <div className={cx('child-2')}>Nội dung 2</div>
      </div> */}
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
                    <FontAwesomeIcon
                      style={{ color: 'red' }}
                      className={cx('title-function__btn-icon')}
                      icon={faVideo}
                    />
                  }
                  className={cx('title-function__live-stream', 'title-function__btn')}
                >
                  <span className={cx('title-function__btn-text')}>Video trực tiếp</span>
                </Button>
                <Button
                  leftIcon={
                    <FontAwesomeIcon
                      style={{ color: 'green' }}
                      className={cx('title-function__btn-icon')}
                      icon={faImages}
                    />
                  }
                  className={cx('title-function__img-or-video', 'title-function__btn')}
                >
                  Ảnh/video
                </Button>
                <Button
                  leftIcon={
                    <FontAwesomeIcon
                      style={{ color: 'yellow' }}
                      className={cx('title-function__btn-icon')}
                      icon={faFaceLaugh}
                    />
                  }
                  className={cx('title-function__feel-or-action', 'title-function__btn')}
                >
                  Cảm xúc/hoạt động
                </Button>
              </div>
            </div>
            <div className={cx('story')}>
              <div className={cx('story-list-item')}>
                <div className={cx('story-item', 'story-item__user')}>
                  <div className={cx('story-item__user-wrapping')}>
                    <div
                      style={{
                        backgroundImage: `url(${avatar1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                      className={cx('story-item__avatar')}
                    >
                      <Button className={cx('add-story')} circle>
                        <AddStoryIcon classNames={cx('add-story-icon')} />
                      </Button>
                    </div>
                    <div className={cx('story-item__white')}>
                      <span className={cx('story-item__white-text')}>Create story</span>
                    </div>
                  </div>
                </div>
                <div className={cx('story-item', 'story-item__friend')}>
                  <img alt="" src={avatar} />
                  <div className={cx('story-item__friend-wrapping')}>
                    <div className={cx('story-item__img')}>
                      <Button className={cx('story-icon__avatar')} circle>
                        <img src={avatar} alt="nguyenchibao" className={cx('avatar')} />
                      </Button>
                    </div>
                    <div className={cx('story-item__name')}>
                      <div className={cx('space')}></div>
                      <span className={cx('name')}>Create story</span>
                    </div>
                  </div>
                </div>
                <div className={cx('story-item', 'story-item__friend')}>
                  <img alt="" src={avatar} />
                  <div className={cx('story-item__friend-wrapping')}>
                    <div className={cx('story-item__img')}>
                      <Button className={cx('story-icon__avatar')} circle>
                        <img src={avatar} alt="nguyenchibao" className={cx('avatar')} />
                      </Button>
                    </div>
                    <div className={cx('story-item__name')}>
                      <div className={cx('space')}></div>
                      <span className={cx('name')}>Create story</span>
                    </div>
                  </div>
                </div>
                <div className={cx('story-item', 'story-item__friend')}>
                  <img alt="" src={avatar} />
                  <div className={cx('story-item__friend-wrapping')}>
                    <div className={cx('story-item__img')}>
                      <Button className={cx('story-icon__avatar')} circle>
                        <img src={avatar} alt="nguyenchibao" className={cx('avatar')} />
                      </Button>
                    </div>
                    <div className={cx('story-item__name')}>
                      <div className={cx('space')}></div>
                      <span className={cx('name')}>Create story</span>
                    </div>
                  </div>
                </div>
                <div className={cx('story-item', 'story-item__friend')}>
                  <img alt="" src={avatar} />
                  <div className={cx('story-item__friend-wrapping')}>
                    <div className={cx('story-item__img')}>
                      <Button className={cx('story-icon__avatar')} circle>
                        <img src={avatar} alt="nguyenchibao" className={cx('avatar')} />
                      </Button>
                    </div>
                    <div className={cx('story-item__name')}>
                      <div className={cx('space')}></div>
                      <span className={cx('name')}>Create story</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx('content')}>
              <div className={cx('content-title')}>
                <div className={cx('content-title__wrapping')}>
                  <div className={cx('content-title__avatar')}>
                    <img className={cx('avatar')} alt="" src={avatar} />
                  </div>
                  <div className={cx('content-title__name')}>
                    <span className={cx('name-friend')}>Nguyen Chi Bao </span>
                    <span className={cx('time')}>21 hour</span>
                  </div>
                  <div className={cx('content-title__three-dot')}>
                    <Button notBackground className={cx('btn-three-not')} circle>
                      <ThreeDotIcon classNames={cx('three-icon')} />
                    </Button>
                  </div>
                  <div className={cx('content-title__x')}>
                    <Button notBackground className={cx('btn-x')} circle>
                      <X className={cx('x')} />
                    </Button>
                  </div>
                </div>
              </div>
              <div className={cx('content-cap')}>Cap</div>
              <div className={cx('content-img-or-video')}>Image or video</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
