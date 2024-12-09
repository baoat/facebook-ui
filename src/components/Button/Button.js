import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import style from './Button.module.scss';
import React from 'react';

const cx = classNames.bind(style);

const Button = React.forwardRef(function (
  {
    to,
    href,
    primary = false,
    circle = false,
    notBackground = false,
    btnSmall = false,
    rectangle = false,
    a = false,
    className,
    leftIcon,
    rightIcon,
    children,
    onClick,
    ...passProper
  },
  ref,
) {
  let Comp = 'button';

  const classes = cx('wrapper', {
    [className]: className,
    primary,
    circle,
    rectangle,
    notBackground,
    btnSmall,
    a,
  });

  const props = {
    onClick,
    ...passProper,
  };

  if (to) {
    props.to = to;
    Comp = React.forwardRef(function (ref) {
      return <Link ref={ref} />;
    });
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  return (
    <Comp ref={ref} className={classes} {...props}>
      <div className={cx('wrapper-span')}>
        {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
        <span className={cx('title')}>{children}</span>
        {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
      </div>
    </Comp>
  );
});

export default Button;
