import React from 'react';
import PropTypes from 'prop-types';
import { cleanProps, generateClass } from '../../utils';

const RADIUS = {
  NONE: 'none',
  SMALL: 'small',
  NORMAL: 'normal',
  CURVE: 'curve',
  ROUNDED: 'rounded',
  PILL: 'pill',
};

const SHADOW = {
  NONE: 'none',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const COLOR = {
  PRIMARY: 'primary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
  DARK: 'dark',
  LIGHT: 'light',
};

const BadgeComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div {...parentProps} className={generateClass(props, 'badge')}>
      {props.children}
    </div>
  );
};

const Badge = React.forwardRef((props) => <BadgeComponent {...props} />);

Badge.propTypes = {
  id: PropTypes.string,
  radius: PropTypes.oneOf(Object.values(RADIUS)),
  shadow: PropTypes.oneOf(Object.values(SHADOW)),
  color: PropTypes.oneOf(Object.values(COLOR)),
  children: PropTypes.oneOfType([PropTypes.node.isRequired, PropTypes.string]),
  outline: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Badge.defaultProps = {
  title: 'Badge',
  radius: RADIUS.NORMAL,
  color: COLOR.LIGHT,
  shadow: SHADOW.NONE,
  outline: false,
  className: '',
};

export { Badge };
