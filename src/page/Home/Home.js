import classNames from 'classnames/bind';
import style from './Home.module.scss';
import {
  AvatarIcon,
  CommentIcon,
  FeelAddActionIcon,
  ImageAddVideoIcon,
  LikeIcon,
  LiveStreamIcon,
  SeeMoreIcon,
  SendIcon,
  ShareIcon,
  ThreeDotIcon,
  X,
} from '../../components/icons';
import avatar from '../../acsets/img/358148583_3464818283834527_2059476123742042306_n.jpg';
import avatar1 from '../../acsets/img/Unnamed-17.jpg';
import avatar2 from '../../acsets/img/329384181_2152850734905959_3134467547685974562_n.jpg';
import Button from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faThumbsUp,
  faComment,
  faPaperPlane,
  faShare,
  faUserTie,
  faFaceSmile,
  faCamera,
  faGift,
  faStickyNote,
} from '@fortawesome/free-solid-svg-icons';
import Profile from '../../components/Profile';
import Stories from './components/Stories';

const cx = classNames.bind(style);

function Home() {
  const items = [
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
          <Stories items={items} itemsToShow={5} />
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
                <div className={cx('cap-item')}>No Cap</div>
                <div className={cx('cap-item')}>No Cap</div>
                <div className={cx('cap-item')}>No Cap</div>
                <div className={cx('cap-item')}>No Cap</div>
                <div className={cx('cap-item')}>No Cap</div>
              </div>
            </div>
            <div className={cx('post-img-or-video')}>
              <div className={cx('wrapper-img-or-video')}>
                <img src={avatar1} alt="" />
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
                            <span className={cx('action-item')}>Like</span>
                            <span className={cx('action-item')}>Feedback</span>
                            <span className={cx('action-item')}>Share</span>
                            <Button circle className={cx('icon-btn', 'icon-btn__heart')}>
                              <FontAwesomeIcon
                                style={{ width: '10px', height: '10px', color: 'white' }}
                                icon={faHeart}
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={cx('wrapper-view-all-feedback')}>
                      <div className={cx('curve')}></div>
                      <div className={cx('view-all-feedback')}>
                        <span>View all feedback</span>
                      </div>
                    </div>
                  </div>
                  <div className={cx('add-comment')}>
                    <div className={cx('wrapper-add-comment')}>
                      <div className={cx('your-avatar')}>
                        <img style={{ width: '32px', height: '32px' }} src={avatar1} alt="" />
                        <div className={cx('seemore')}>
                          <span className={cx('icon-seemore')}>{<SeeMoreIcon />}</span>
                        </div>
                      </div>
                      <form className={cx('input')}>
                        <div className={cx('wrapper-input')}>
                          <input placeholder="Comment with name nguyenchibao" />
                        </div>
                        <div className={cx('input-action')}>
                          <ul>
                            <li>
                              <Button notBackground circle>
                                <FontAwesomeIcon style={{ height: '16px', width: '16px' }} icon={faUserTie} />
                              </Button>
                            </li>
                            <li>
                              <Button notBackground circle>
                                <FontAwesomeIcon style={{ height: '16px', width: '16px' }} icon={faFaceSmile} />
                              </Button>
                            </li>
                            <li>
                              <Button notBackground circle>
                                <FontAwesomeIcon style={{ height: '16px', width: '16px' }} icon={faCamera} />
                              </Button>
                            </li>
                            <li>
                              <Button notBackground circle>
                                <FontAwesomeIcon style={{ height: '16px', width: '16px' }} icon={faGift} />
                              </Button>
                            </li>
                            <li>
                              <Button notBackground circle>
                                <FontAwesomeIcon style={{ height: '16px', width: '16px' }} icon={faStickyNote} />
                              </Button>
                            </li>
                          </ul>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('post')}>
            <div className={cx('post-title')}>
              <div className={cx('post-title__wrapping')}>
                <div className={cx('post-title__avatar')}>
                  <img className={cx('avatar')} alt="" src={avatar} />
                  {/* <div className={cx('dot-online')}></div> */}
                </div>
                <div className={cx('post-title__name')}>
                  <div>
                    <span className={cx('name-friend')}>Nguyen Chi Bao </span>
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
                <div className={cx('cap-item')}>No Cap</div>
                <div className={cx('cap-item')}>No Cap</div>
                <div className={cx('cap-item')}>No Cap</div>
                <div className={cx('cap-item')}>No Cap</div>
                <div className={cx('cap-item')}>No Cap</div>
              </div>
            </div>
            <div className={cx('post-img-or-video')}>
              <div className={cx('wrapper-img-or-video')}>
                <img src={avatar1} alt="" />
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
                  <Button className={cx('action-like')} notBackground leftIcon={<FontAwesomeIcon icon={faThumbsUp} />}>
                    Like
                  </Button>
                  <Button
                    className={cx('action-comment')}
                    notBackground
                    leftIcon={<FontAwesomeIcon icon={faComment} />}
                  >
                    Comment
                  </Button>
                  <Button
                    className={cx('action-send')}
                    notBackground
                    leftIcon={<FontAwesomeIcon icon={faPaperPlane} />}
                  >
                    Send
                  </Button>
                  <Button className={cx('action-share')} notBackground leftIcon={<FontAwesomeIcon icon={faShare} />}>
                    Share
                  </Button>
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
                            <span className={cx('action-item')}>Like</span>
                            <span className={cx('action-item')}>Feedback</span>
                            <span className={cx('action-item')}>Share</span>
                            <Button circle className={cx('icon-btn', 'icon-btn__heart')}>
                              <FontAwesomeIcon
                                style={{ width: '10px', height: '10px', color: 'white' }}
                                icon={faHeart}
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={cx('wrapper-view-all-feedback')}>
                      <div className={cx('curve')}></div>
                      <div className={cx('view-all-feedback')}>
                        <span>View all feedback</span>
                      </div>
                    </div>
                  </div>
                  <div className={cx('add-comment')}>
                    <div className={cx('wrapper-add-comment')}>
                      <div className={cx('your-avatar')}>
                        <img style={{ width: '32px', height: '32px' }} src={avatar1} alt="" />
                        <div className={cx('seemore')}>
                          <span className={cx('icon-seemore')}>{<SeeMoreIcon />}</span>
                        </div>
                      </div>
                      <form className={cx('input')}>
                        <div className={cx('wrapper-input')}>
                          <input placeholder="Comment with name nguyenchibao" />
                        </div>
                        <div className={cx('input-action')}>
                          <ul>
                            <li>
                              <Button notBackground circle>
                                <FontAwesomeIcon style={{ height: '16px', width: '16px' }} icon={faUserTie} />
                              </Button>
                            </li>
                            <li>
                              <Button notBackground circle>
                                <FontAwesomeIcon style={{ height: '16px', width: '16px' }} icon={faFaceSmile} />
                              </Button>
                            </li>
                            <li>
                              <Button notBackground circle>
                                <FontAwesomeIcon style={{ height: '16px', width: '16px' }} icon={faCamera} />
                              </Button>
                            </li>
                            <li>
                              <Button notBackground circle>
                                <FontAwesomeIcon style={{ height: '16px', width: '16px' }} icon={faGift} />
                              </Button>
                            </li>
                            <li>
                              <Button notBackground circle>
                                <FontAwesomeIcon style={{ height: '16px', width: '16px' }} icon={faStickyNote} />
                              </Button>
                            </li>
                          </ul>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
