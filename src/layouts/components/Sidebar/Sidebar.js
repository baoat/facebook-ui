import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';

import { AvatarIcon, Iconemty, SeeMoreIcon } from '../../../components/icons/Icons';
import Button from '../../../components/Button';
import avatar from '../../../acsets/img/358148583_3464818283834527_2059476123742042306_n.jpg';

const cx = classNames.bind(style);

const MENU_ITEM = [
  {
    src: 'https://static.xx.fbcdn.net/rsrc.php/v4/yw/r/-GSeaf19sqF.png?_nc_eui2=AeHdFmIcr0n-yBd2zNYKSRzXCR5jHNvbVS0JHmMc29tVLROCteKlNf2sMWuLh4PJghto0uhJWM7mKFSRl0EcK9U-',
    title: 'Friends',
    classNames: 'friends',
  },
  {
    src: 'https://static.xx.fbcdn.net/rsrc.php/v4/yw/r/-GSeaf19sqF.png?_nc_eui2=AeHdFmIcr0n-yBd2zNYKSRzXCR5jHNvbVS0JHmMc29tVLROCteKlNf2sMWuLh4PJghto0uhJWM7mKFSRl0EcK9U-',
    title: 'Group',
    classNames: 'group',
  },
  {
    src: 'https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/3dN1QwOLden.png',
    title: 'Feed table',
    classNames: 'feed-table',
  },
  {
    src: 'https://static.xx.fbcdn.net/rsrc.php/v4/yw/r/-GSeaf19sqF.png?_nc_eui2=AeHdFmIcr0n-yBd2zNYKSRzXCR5jHNvbVS0JHmMc29tVLROCteKlNf2sMWuLh4PJghto0uhJWM7mKFSRl0EcK9U-',
    title: 'Marketplace',
    classNames: 'marketplace',
  },
  {
    src: 'https://static.xx.fbcdn.net/rsrc.php/v4/yw/r/-GSeaf19sqF.png?_nc_eui2=AeHdFmIcr0n-yBd2zNYKSRzXCR5jHNvbVS0JHmMc29tVLROCteKlNf2sMWuLh4PJghto0uhJWM7mKFSRl0EcK9U-',
    title: 'Video',
    classNames: 'video',
  },
  {
    src: 'https://static.xx.fbcdn.net/rsrc.php/v4/yw/r/-GSeaf19sqF.png?_nc_eui2=AeHdFmIcr0n-yBd2zNYKSRzXCR5jHNvbVS0JHmMc29tVLROCteKlNf2sMWuLh4PJghto0uhJWM7mKFSRl0EcK9U-',
    title: 'Celebrate',
    classNames: 'celebrate',
  },
  {
    src: 'https://static.xx.fbcdn.net/rsrc.php/v4/yw/r/-GSeaf19sqF.png?_nc_eui2=AeHdFmIcr0n-yBd2zNYKSRzXCR5jHNvbVS0JHmMc29tVLROCteKlNf2sMWuLh4PJghto0uhJWM7mKFSRl0EcK9U-',
    title: 'Saved',
    classNames: 'saved',
  },
];
function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <div className={cx('sidebar')}>
        <div className={cx('menu')}>
          <ul>
            <li>
              <div>
                <Button
                  rectangle
                  leftIcon={<AvatarIcon classNames={cx('avatar-icon')} src={avatar} />}
                  className={cx('avatar')}
                >
                  <span className={cx('name')}>nguyenchibao</span>
                </Button>
              </div>
            </li>
          </ul>
          <div className={cx('list-menu')}>
            <ul>
              {MENU_ITEM.map((item) => {
                let check = item.classNames.includes('feed-table');
                if (check) {
                  return (
                    <li key={item.classNames}>
                      <div>
                        <Button
                          rectangle
                          leftIcon={<AvatarIcon classNames={cx('feed-table-icon')} src={item.src} />}
                          className={cx('item')}
                        >
                          <span className={cx('name')}>{item.title}</span>
                        </Button>
                      </div>
                    </li>
                  );
                } else {
                  return (
                    <li key={item.classNames}>
                      <div className={cx('menu-item')}>
                        <Button
                          rectangle
                          leftIcon={<Iconemty className={cx(item.classNames)} src={item.src} />}
                          className={cx('item')}
                        >
                          <span className={cx('name')}>{item.title}</span>
                        </Button>
                      </div>
                    </li>
                  );
                }
              })}
              <li>
                <Button rectangle className={cx('item')}>
                  <Button circle>
                    <span className={cx('icon-seemore')}>
                      <SeeMoreIcon />
                    </span>
                  </Button>
                  <span className={cx('name')}>see more</span>
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className={cx('shortcut')}>
          <div className={cx('label')}>
            <h3 className={cx('title')}>Your Shortcut</h3>
            <div className={cx('edit')}>
              {/* <Button rectangle className={cx('btn-edit')}>
                Edit
              </Button> */}
              <a className={cx('btn-edit')}>
                <h3 className={cx('title')}>Edit</h3>
              </a>
            </div>
          </div>
          <div className={cx('list-menu')}>
            <ul>
              <li>
                <div>
                  <Button
                    rectangle
                    leftIcon={<AvatarIcon classNames={cx('shortcut-avatar-icon')} src={avatar} />}
                    className={cx('item')}
                  >
                    <span className={cx('name')}>vothuytrang</span>
                  </Button>
                </div>
              </li>
              <li>
                <div>
                  <Button
                    rectangle
                    leftIcon={<AvatarIcon classNames={cx('shortcut-avatar-icon')} src={avatar} />}
                    className={cx('item')}
                  >
                    <span className={cx('name')}>vothuytrang</span>
                  </Button>
                </div>
              </li>
              <li>
                <div>
                  <Button
                    rectangle
                    leftIcon={<AvatarIcon classNames={cx('shortcut-avatar-icon')} src={avatar} />}
                    className={cx('item')}
                  >
                    <span className={cx('name')}>vothuytrang</span>
                  </Button>
                </div>
              </li>
              <li>
                <div>
                  <Button
                    rectangle
                    leftIcon={<AvatarIcon classNames={cx('shortcut-avatar-icon')} src={avatar} />}
                    className={cx('item')}
                  >
                    <span className={cx('name')}>vothuytrang</span>
                  </Button>
                </div>
              </li>
              <li>
                <div>
                  <Button
                    rectangle
                    leftIcon={<AvatarIcon classNames={cx('shortcut-avatar-icon')} src={avatar} />}
                    className={cx('item')}
                  >
                    <span className={cx('name')}>vothuytrang</span>
                  </Button>
                </div>
              </li>
              <li>
                <div>
                  <Button
                    rectangle
                    leftIcon={<AvatarIcon classNames={cx('shortcut-avatar-icon')} src={avatar} />}
                    className={cx('item')}
                  >
                    <span className={cx('name')}>vothuytrang</span>
                  </Button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
