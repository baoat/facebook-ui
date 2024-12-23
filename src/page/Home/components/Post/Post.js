import classNames from 'classnames/bind';
import style from './Post.module.scss';

import {
  CameraIcon,
  CommentIcon,
  FaceSmileIcon,
  GiftIcon,
  HairIcon,
  LikeIcon,
  SeeMoreIcon,
  SendCommentIcon,
  SendIcon,
  ShareIcon,
  ThreeDotIcon,
  TickerIcon,
  X,
} from '../../../../components/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import avatar from '../../../../acsets/img/358148583_3464818283834527_2059476123742042306_n.jpg';
import avatar2 from '../../../../acsets/img/358148583_3464818283834527_2059476123742042306_n.jpg';
import Profile from '../../../../components/Profile';
import Button from '../../../../components/Button';
import { useState } from 'react';
import Emotions from './components';

const cx = classNames.bind(style);

function Post() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [valueComment, setValueComment] = useState('');
  const [display, setDisplay] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleComment = (e) => {
    setValueComment(e.target.value);
  };

  const handleDisplay = () => {
    setDisplay(true);
  };

  return (
    <div className={cx('post')}>
      <div className={cx('post-title')}>
        <div className={cx('post-title__wrapping')}>
          <div className={cx('post-title__avatar')}>
            <img className={cx('avatar')} alt="" src={avatar} />
            <Profile src={avatar} className={cx('profile')} />
          </div>
          <div className={cx('post-title__name')}>
            <div>
              <span className={cx('name-friend')}>
                Nguyen Chi Bao
                <Profile src={avatar} className={cx('profile')} />
              </span>
            </div>
            <div>
              <span className={cx('time')}>21 hour</span>
            </div>
          </div>
          <div className={cx('post-title__three-dot')}>
            <Button notBackground className={cx('btn-three-not')} circle>
              <ThreeDotIcon classNames={cx('three-icon')} />
            </Button>
          </div>
          <div className={cx('post-title__x')}>
            <Button notBackground className={cx('btn-x')} circle>
              <X className={cx('x')} />
            </Button>
          </div>
        </div>
      </div>
      <div className={cx('post-cap')}>
        <div className={cx('wrapper-cap')}>
          <p
            className={
              cx('caption', `${isExpanded ? 'expanded' : 'collapsed'}`)
              // cx(`${isExpanded ? 'expanded' : 'collapsed'}`)
            }
          >
            Đây là một đoạn caption rất dài để mô phỏng cách hoạt động của chức năng xem thêm. Chúng ta giới hạn chỉ
            hiển thị 3 dòng đầu tiên. Người dùng có thể bấm 'Xem thêm' để hiển thị toàn bộ nội dung bài đăng và 'Thu
            gọn' để quay lại chế độ rút gọn. Đây là một đoạn caption rất dài để mô phỏng cách hoạt động của chức năng
            xem thêm. Chúng ta giới hạn chỉ hiển thị 3 dòng đầu tiên. Người dùng có thể bấm 'Xem thêm' để hiển thị toàn
            bộ nội dung bài đăng và 'Thu gọn' để quay lại chế độ rút gọn.
          </p>
          <Button onClick={handleToggleExpand} className={cx('see-more__caption')} rectangle>
            {isExpanded ? 'condense' : 'see more'}
          </Button>
        </div>
      </div>
      <div className={cx('post-img-or-video')}>
        <div className={cx('wrapper-img-or-video')}>
          <img src={avatar} alt="" />
        </div>
      </div>
      <div className={cx('post-activity')}>
        <div>
          <div className={cx('activity-icon')}>
            <div className={cx('wrapper-icon')}>
              <div className={cx('icon')}>
                <Button circle className={cx('icon-btn', 'icon-btn__heart')}>
                  <FontAwesomeIcon style={{ width: '10px', height: '10px', color: 'white' }} icon={faHeart} />
                </Button>
                <Button circle className={cx('icon-btn', 'icon-btn__like')}>
                  <FontAwesomeIcon style={{ width: '10px', height: '10px', color: 'white' }} icon={faThumbsUp} />
                </Button>
              </div>
              <span className={cx('number-icon')}>1,2K</span>
            </div>
            <div className={cx('activity-comment-share')}>
              <span className={cx('number-comment')}>444 comment</span>
              <span className={cx('number-share')}>100 share</span>
            </div>
          </div>
          <div className={cx('activity-action')}>
            <Button
              className={cx('action-like')}
              notBackground
              leftIcon={
                <LikeIcon
                  src={
                    'https://static.xx.fbcdn.net/rsrc.php/v4/y4/r/xAljGE-8t8Y.png?_nc_eui2=AeGyFTA73MvDzioVy71LvwjLYHlezEfsCP5geV7MR-wI_oSRnPGzIzlAeGAk_Gcm1rBDvpXhbLk0NJouC0Y0vDqv'
                  }
                />
              }
            >
              <span>Like</span>
            </Button>
            <Button
              className={cx('action-comment')}
              notBackground
              leftIcon={
                <CommentIcon
                  src={
                    'https://static.xx.fbcdn.net/rsrc.php/v4/y4/r/xAljGE-8t8Y.png?_nc_eui2=AeGyFTA73MvDzioVy71LvwjLYHlezEfsCP5geV7MR-wI_oSRnPGzIzlAeGAk_Gcm1rBDvpXhbLk0NJouC0Y0vDqv'
                  }
                />
              }
            >
              <span>Comment</span>
            </Button>
            <Button
              className={cx('action-send')}
              notBackground
              leftIcon={
                <SendIcon
                  src={
                    'https://static.xx.fbcdn.net/rsrc.php/v4/yO/r/EMmLOa3Dvgo.png?_nc_eui2=AeG4fFuJbj3pNA8fqJKC0CODAEeyXVx8gOAAR7JdXHyA4Ha6SrxQOFf4EtDKPNDouVOx4vbEFMDCc24mBNmpZMn0'
                  }
                />
              }
            >
              <span>Send</span>
            </Button>
            <Button
              className={cx('action-share')}
              notBackground
              leftIcon={
                <ShareIcon
                  src={
                    'https://static.xx.fbcdn.net/rsrc.php/v4/y4/r/xAljGE-8t8Y.png?_nc_eui2=AeGyFTA73MvDzioVy71LvwjLYHlezEfsCP5geV7MR-wI_oSRnPGzIzlAeGAk_Gcm1rBDvpXhbLk0NJouC0Y0vDqv'
                  }
                />
              }
            >
              <span>Share</span>
            </Button>
            <Emotions className={cx('choose-emotion')} />
          </div>
          <div style={{ width: '100%', borderTop: '1px solid #65686c', marginBottom: '4px' }}></div>
          <div className={cx('activity-comment')}>
            <div className={cx('wrapper-see-more-comment')}>
              <span className={cx('see-more-comment')}>See more comment</span>
            </div>
            <div className={cx('comment')}>
              <div className={cx('comment-content')}>
                <div className={cx('straight-line')}></div>
                <div className={cx('wrapper-comment-content')}>
                  <img className={cx('user-avatar')} src={avatar2} alt="" />
                  <div className={cx('user-content-comment')}>
                    <div className={cx('show-comment')}>
                      <div className={cx('wrapper-comment')}>
                        <div className={cx('user-name')}>
                          <span className={cx('name')}>nguyenchibao</span>
                        </div>
                        <div className={cx('user-comment')}>
                          <span className={cx('content')}>No cap</span>
                        </div>
                      </div>
                    </div>
                    <div className={cx('comment-action')}>
                      <span className={cx('action-item')}>5 hour</span>
                      <span className={cx('action-item__like', 'action-item')}>Like</span>
                      <span className={cx('action-item')}>Feedback</span>
                      <span className={cx('action-item')}>Share</span>
                      <Emotions className={cx('choose-emotion')} />
                      <Button circle className={cx('icon-btn', 'icon-btn__heart')}>
                        <FontAwesomeIcon style={{ width: '10px', height: '10px', color: 'white' }} icon={faHeart} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('wrapper-view-all-feedback')}>
                <div className={cx('curve')}></div>
                <div className={cx('view-all-feedback')}>
                  <span>view all 4 feedbacks</span>
                </div>
              </div>
            </div>
            <div className={cx('add-comment')}>
              <div className={cx('wrapper-add-comment')}>
                <div className={cx('your-avatar')}>
                  <img style={{ width: '32px', height: '32px' }} src={avatar} alt="" />
                  <div className={cx('seemore')}>
                    <span className={cx('icon-seemore')}>{<SeeMoreIcon />}</span>
                  </div>
                </div>
                <form className={cx({ 'input-click': display }, 'input')}>
                  <div className={cx('wrapper-input')}>
                    <input
                      onClick={handleDisplay}
                      onChange={handleComment}
                      placeholder="Comment with name nguyenchibao"
                    />
                  </div>
                  <div className={cx('input-action')}>
                    <ul>
                      <li>
                        <Button notBackground circle>
                          {/* <FontAwesomeIcon style={{ height: '16px', width: '16px' }} icon={faUserTie} /> */}
                          <HairIcon
                            src={
                              'https://static.xx.fbcdn.net/rsrc.php/v4/ym/r/EK68MH0oqi2.png?_nc_eui2=AeF7uGjaK6v28Ewd3IFlVNEQW_ikVT0bTs5b-KRVPRtOzh_lj9O9pWfPvko21BgxKyoGs6f8VgJsjjYYvKZVi-9A'
                            }
                          />
                        </Button>
                      </li>
                      <li>
                        <Button notBackground circle>
                          <FaceSmileIcon
                            src={
                              'https://static.xx.fbcdn.net/rsrc.php/v4/ym/r/EK68MH0oqi2.png?_nc_eui2=AeF7uGjaK6v28Ewd3IFlVNEQW_ikVT0bTs5b-KRVPRtOzh_lj9O9pWfPvko21BgxKyoGs6f8VgJsjjYYvKZVi-9A'
                            }
                          />
                        </Button>
                      </li>
                      <li>
                        <Button notBackground circle>
                          <CameraIcon
                            src={
                              'https://static.xx.fbcdn.net/rsrc.php/v4/ym/r/EK68MH0oqi2.png?_nc_eui2=AeF7uGjaK6v28Ewd3IFlVNEQW_ikVT0bTs5b-KRVPRtOzh_lj9O9pWfPvko21BgxKyoGs6f8VgJsjjYYvKZVi-9A'
                            }
                          />
                        </Button>
                      </li>
                      <li>
                        <Button notBackground circle>
                          <GiftIcon
                            src={
                              'https://static.xx.fbcdn.net/rsrc.php/v4/ym/r/EK68MH0oqi2.png?_nc_eui2=AeF7uGjaK6v28Ewd3IFlVNEQW_ikVT0bTs5b-KRVPRtOzh_lj9O9pWfPvko21BgxKyoGs6f8VgJsjjYYvKZVi-9A'
                            }
                          />
                        </Button>
                      </li>
                      <li>
                        <Button notBackground circle>
                          <TickerIcon
                            src={
                              'https://static.xx.fbcdn.net/rsrc.php/v4/ym/r/EK68MH0oqi2.png?_nc_eui2=AeF7uGjaK6v28Ewd3IFlVNEQW_ikVT0bTs5b-KRVPRtOzh_lj9O9pWfPvko21BgxKyoGs6f8VgJsjjYYvKZVi-9A'
                            }
                          />
                        </Button>
                      </li>
                    </ul>
                    {display && (
                      <ul>
                        <li>
                          <Button notBackground circle>
                            <SendCommentIcon />
                          </Button>
                        </li>
                      </ul>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
