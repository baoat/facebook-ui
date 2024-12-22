import classNames from 'classnames/bind';
import style from './Header.module.scss';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { Link } from 'react-router-dom';
import {
  IconSearch,
  BackIcon,
  HomeIcon,
  HomeIconActive,
  WatchIcon,
  MarketplaceIcon,
  MarketplaceIconActive,
  GroupIcon,
  GameIcon,
  WatchIconActive,
  MenuIcon,
  MessageIcon,
  Inbox,
  SeeMoreIcon,
  AvatarIcon,
  ClearIcon,
} from '../../../components/icons';
import Button from '../../../components/Button';
import config from '../../../config';
import Menu from '../../../components/Menu';
import MenuItem from '../../../components/Menu/MenuItem';
import avatar from '../../../acsets/img/Unnamed-17.jpg';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(style);

function Header() {
  //useRef
  const refButton = useRef();
  const refMenuItem = useRef();

  const [valueSearch, setValueSearch] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [showButtonSearch, setShowButtonSearch] = useState(false);

  const handleShowResult = () => {
    setShowResult(true);
  };

  const handleHiddenButtonSearch = () => {
    setShowButtonSearch(true);
  };

  const handleShowResultTippy = () => {
    setShowResult(false);
    setShowButtonSearch(false);
  };

  const handleSearch = (e) => {
    setValueSearch(e.target.value);
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('container')}>
        <HeadlessTippy
          interactive
          visible={showResult}
          render={(attrs) => (
            <div className={cx('searching')} tabIndex="-1" {...attrs}>
              <div className={cx('wrapper-icon-back')}>
                <Button circle className={cx('icon-back')}>
                  {<BackIcon classNames={cx('icon-back-animation')} />}
                </Button>
              </div>
              <div className={cx('wrapper-search-result')}>
                <div className={cx('search-result__title')}>
                  <div className={cx('title-wrapper')}>
                    <div className={cx('title-text')}>
                      <span className={cx('text')}>Gần đây</span>
                    </div>
                    <div className={cx('title-button')}>
                      <Button className={cx('button')}>Chỉnh sửa</Button>
                    </div>
                  </div>
                </div>
                <ul className={cx('search-result__list')}>
                  <li className={cx('search-result__item')}>
                    <Button leftIcon={<AvatarIcon classNames={cx('item-icon')} src={avatar} />} className={cx('item')}>
                      <span className={cx('item-name')}>nguyenchibao</span>
                    </Button>
                    <Button className={cx('button-clear')} circle>
                      {<ClearIcon />}
                    </Button>
                  </li>
                  <li className={cx('search-result__item')}>
                    <Button leftIcon={<AvatarIcon classNames={cx('item-icon')} src={avatar} />} className={cx('item')}>
                      <span className={cx('item-name')}>nguyenchibao</span>
                    </Button>
                    <Button className={cx('button-clear')} circle>
                      {<ClearIcon />}
                    </Button>
                  </li>
                  <li className={cx('search-result__item')}>
                    <Button leftIcon={<AvatarIcon classNames={cx('item-icon')} src={avatar} />} className={cx('item')}>
                      <span className={cx('item-name')}>nguyenchibao</span>
                    </Button>
                    <Button className={cx('button-clear')} circle>
                      {<ClearIcon />}
                    </Button>
                  </li>
                  <li className={cx('search-result__item')}>
                    <Button leftIcon={<AvatarIcon classNames={cx('item-icon')} src={avatar} />} className={cx('item')}>
                      <span className={cx('item-name')}>nguyenchibao</span>
                    </Button>
                    <Button className={cx('button-clear')} circle>
                      {<ClearIcon />}
                    </Button>
                  </li>
                  <li className={cx('search-result__item')}>
                    <Button leftIcon={<AvatarIcon classNames={cx('item-icon')} src={avatar} />} className={cx('item')}>
                      <span className={cx('item-name')}>nguyenchibao</span>
                    </Button>
                    <Button className={cx('button-clear')} circle>
                      {<ClearIcon />}
                    </Button>
                  </li>
                  <li className={cx('search-result__item')}>
                    <Button leftIcon={<AvatarIcon classNames={cx('item-icon')} src={avatar} />} className={cx('item')}>
                      <span className={cx('item-name')}>nguyenchibao</span>
                    </Button>
                    <Button className={cx('button-clear')} circle>
                      {<ClearIcon />}
                    </Button>
                  </li>
                  <li className={cx('search-result__item')}>
                    <Button leftIcon={<AvatarIcon classNames={cx('item-icon')} src={avatar} />} className={cx('item')}>
                      <span className={cx('item-name')}>nguyenchibao</span>
                    </Button>
                    <Button className={cx('button-clear')} circle>
                      {<ClearIcon />}
                    </Button>
                  </li>
                  <li className={cx('search-result__item')}>
                    <Button leftIcon={<AvatarIcon classNames={cx('item-icon')} src={avatar} />} className={cx('item')}>
                      <span className={cx('item-name')}>nguyenchibao</span>
                    </Button>
                    <Button className={cx('button-clear')} circle>
                      {<ClearIcon />}
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          )}
          onClickOutside={handleShowResultTippy}
        >
          <div className={cx('first-header')}>
            <div className={cx('wrapper-logo')}>
              <Link className={cx('logo-link')}>
                <svg
                  viewBox="0 0 36 36"
                  className={cx('logo')}
                  fill="url('#:R1kjaj9emhpapd5aq:')"
                  height="40"
                  width="40"
                >
                  <defs>
                    <linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%" id=":R1kjaj9emhpapd5aq:">
                      <stop offset="0%" stop-color="#0062E0"></stop>
                      <stop offset="100%" stop-color="#19AFFF"></stop>
                    </linearGradient>
                  </defs>
                  <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
                  <path
                    fill="white"
                    d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
                  ></path>
                </svg>
              </Link>
              <div className={!showResult ? cx('space') : cx('none')}>&nbsp;</div>
              <div className={cx('wrapper-search')}>
                <label className={cx('search')}>
                  <div className={cx({ 'hidden-icon-search': showButtonSearch }, 'icon-search')}>
                    <IconSearch classNames={cx('icon')} />
                  </div>
                  <input
                    onChange={handleSearch}
                    onMouseUp={handleShowResult}
                    onMouseDown={handleHiddenButtonSearch}
                    className={cx('input-search', { 'animation-input-search': showButtonSearch })}
                    type="text"
                    placeholder="Search"
                  />
                </label>
              </div>
            </div>
          </div>
        </HeadlessTippy>
        <div className={cx('between-header')}>
          <Menu>
            <Tippy content="Home">
              <MenuItem
                icon={<HomeIcon classNames={cx('home-icon')} />}
                activeIcon={<HomeIconActive />}
                to={config.routes.home}
              />
            </Tippy>
            <Tippy content="Watch">
              <MenuItem
                icon={<WatchIcon classNames={cx('watch-icon')} />}
                activeIcon={<WatchIconActive />}
                to={config.routes.watch}
              />
            </Tippy>
            <Tippy content="Marketplace">
              <MenuItem
                icon={<MarketplaceIcon classNames={cx('marketplace-icon')} />}
                activeIcon={<MarketplaceIconActive />}
                to={config.routes.marketplace}
              />
            </Tippy>
            <Tippy content="Group">
              <MenuItem icon={<GroupIcon classNames={cx('group-icon')} />} to={config.routes.group} />
            </Tippy>
            <Tippy content="Game">
              <MenuItem icon={<GameIcon classNames={cx('game-icon')} />} to={config.routes.game} />
            </Tippy>
          </Menu>
        </div>

        <div className={cx('last-header')}>
          <div className={cx('wrapper-action')}>
            <Tippy content="Menu">
              <Button ref={refButton} circle>
                {<MenuIcon classNames={cx('icon-menu')} />}
              </Button>
            </Tippy>
            <Tippy content="Message">
              <Button circle>{<MessageIcon classNames={cx('icon-mes')} />}</Button>
            </Tippy>
            <Tippy content="Inbox">
              <Button circle>
                {<Inbox classNames={cx('icon-inbox')} />}
                <div className={cx('inbox-number')}>
                  <span className={cx('number')}>2</span>
                </div>
              </Button>
            </Tippy>
            <Tippy content="Account">
              <Button className={cx('btn-avatar')} circle>
                <div className={cx('seenore')}>
                  <span className={cx('icon-seemore')}>{<SeeMoreIcon />}</span>
                </div>
                <img src={avatar} alt="nguyenchibao" className={cx('avatar')} />
              </Button>
              {/* <button className={cx('btn-avatar')}>
                <img src={avatar} alt="nguyenchibao" className={cx('avatar')} />
              </button> */}
            </Tippy>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
