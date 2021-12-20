import React from 'react';
import classNames from 'classnames';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0 logo-text">
        profly <span className="text-color-primary">BETA</span>
      </h1>
    </div>
  );
}

export default Logo;
