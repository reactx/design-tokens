import React from 'react';
import PropTypes from 'prop-types';
import { cleanProps, generateClass } from '../../utils';

const COLOR = {
  PRIMARY: 'primary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
  DARK: 'dark',
  LIGHT: 'light',
};

const SHADOW = {
  NONE: 'none',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const NavbarComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div {...parentProps} className={generateClass(props, 'navbar')}>
      <div className="navbar-brand-section">{props.brand}</div>
      <div className="navbar-middle-section">{props.middle}</div>
      <div className="navbar-menu-section">{props.menu}</div>
    </div>
  );
};

const Navbar = React.forwardRef((props) => <NavbarComponent {...props} />);

Navbar.propTypes = {
  id: PropTypes.string,
  color: PropTypes.oneOf(Object.values(COLOR)),
  background: PropTypes.oneOf(Object.values(COLOR)),
  shadow: PropTypes.oneOf(Object.values(SHADOW)),
  brand: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  middle: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  menu: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Navbar.defaultProps = {
  color: COLOR.PRIMARY,
  background: COLOR.LIGHT,
  shadow: SHADOW.NONE,
  outline: false,
  disabled: false,
  className: '',
};

export { Navbar };
