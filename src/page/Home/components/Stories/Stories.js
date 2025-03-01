import classNames from 'classnames/bind';
import style from './Stories.module.scss';

import { ScrollLeftIcon, ScrollRightIcon, AddStoryIcon } from '../../../../components/icons';

import avatar from '../../../../acsets/img/images.jpg';
import avatar1 from '../../../../acsets/img/Unnamed-17.jpg';
import Button from '../../../../components/Button';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(style);

function Stories({ items, itemsToShow }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleNextItem = () => {
    if (currentIndex < items.length - itemsToShow) {
      setCurrentIndex(currentIndex + 5);
    }
  };
  const handlePrevItem = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 5);
    }
  };

  return (
    <div className={cx('story')}>
      <div className={currentIndex !== 0 ? cx('btn-scroll-left') : cx('hidden')}>
        <Button circle onClick={handlePrevItem}>
          <ScrollLeftIcon />
        </Button>
      </div>
      <div className={cx('wrapper-story-list-item')}>
        <div
          style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
          ref={carouselRef}
          className={cx('story-list-item')}
        >
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

          {items.map((item, index) => (
            <div key={index} className={cx('story-item', 'story-item__friend')}>
              <img alt="" src={item.image} />
              <div className={cx('story-item__friend-wrapping')}>
                <div className={cx('story-item__img')}>
                  <Button className={cx('story-icon__avatar')} circle>
                    <img src={item.image} alt="nguyenchibao" className={cx('avatar')} />
                  </Button>
                </div>
                <div className={cx('story-item__name')}>
                  <div className={cx('space')}></div>
                  <span className={cx('name')}>Create story</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={cx('btn-scroll-right')}>
        <Button circle onClick={handleNextItem} disabled={currentIndex >= items.length - itemsToShow}>
          <ScrollRightIcon />
        </Button>
      </div>
    </div>
  );
}

export default Stories;
