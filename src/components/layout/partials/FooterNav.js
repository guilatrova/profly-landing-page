import React from 'react';
import classNames from 'classnames';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="https://twitter.com/messages/compose?recipient_id=992147115227975686" target="_blank" rel="noopener noreferrer">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
