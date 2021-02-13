import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ siteTitle }) => (
  <header className="wrapper">
    <div className="inner">
      <h1 style={{ margin: 0 }}>
        <Link to="/" className="link">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export { Header };
