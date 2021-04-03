import React, { useState } from 'react';
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
  NORMAL: 'normal',
};

const RADIUS = {
  NONE: 'none',
  SMALL: 'small',
  NORMAL: 'normal',
  CURVE: 'curve',
  ROUNDED: 'rounded',
  PILL: 'pill',
};

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA: 'extra',
};

const SHADOW = {
  NONE: 'none',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const ToggleButtonComponent = (props) => {
  const [toggle, SetToggle] = useState(props.toggle);
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <button
      {...parentProps}
      data-toggle={toggle}
      className={generateClass(props, 'btn')}
      onClick={() => {
        SetToggle(!toggle);
        props.onClick(!toggle);
      }}
    >
      {props.toggleChildren && toggle ? props.toggleChildren : props.children}
    </button>
  );
};

const ToggleButton = React.forwardRef((props) => (
  <ToggleButtonComponent {...props} />
));

ToggleButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  toggleChildren: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  radius: PropTypes.oneOf(Object.values(RADIUS)),
  shadow: PropTypes.oneOf(Object.values(SHADOW)),
  color: PropTypes.oneOf(Object.values(COLOR)),
  size: PropTypes.oneOf(Object.values(SIZE)),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  outline: PropTypes.bool,
  onClick: PropTypes.func,
  toggle: PropTypes.bool,
  id: PropTypes.string,
};

ToggleButton.defaultProps = {
  radius: RADIUS.NORMAL,
  shadow: SHADOW.NONE,
  color: COLOR.NORMAL,
  size: SIZE.MEDIUM,
  disabled: false,
  outline: false,
  toggle: false,
};

export { ToggleButton };
