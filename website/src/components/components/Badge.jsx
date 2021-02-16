import React from 'react';
import PropTypes from 'prop-types';
import { cleanProps } from '../../utils';

const RADIUS = {
  NONE: 'none',
  SMALL: 'small',
  NORMAL: 'normal',
  CURVE: 'curve',
  ROUNDED: 'rounded',
};

const SIZE = {
  TINY: 'tiny',
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
    <div
      {...parentProps}
      className={
        'nirvana-badge ' +
        (props.className || '') +
        (props.outline
          ? props.color
            ? ' border-1 nirvana-color-' + props.color
            : ''
          : props.color
          ? ' nirvana-badge-' + props.color
          : '') +
        (props.size !== SIZE.MEDIUM ? ' badge-size-' + props.size : '') +
        (props.radius !== RADIUS.NORMAL ? ' radius-' + props.radius : '') +
        (props.shadow !== SHADOW.NONE ? ' shadow-' + props.shadow : '')
      }
    >
      {props.children}
    </div>
  );
};

const Badge = React.forwardRef((props) => (
  <BadgeComponent {...props}></BadgeComponent>
));

Badge.propTypes = {
  id: PropTypes.string,
  radius: PropTypes.oneOf(Object.values(RADIUS)),
  size: PropTypes.oneOf(Object.values(SIZE)),
  shadow: PropTypes.oneOf(Object.values(SHADOW)),
  color: PropTypes.oneOf(Object.values(COLOR)),
  children: PropTypes.oneOfType([PropTypes.node.isRequired, PropTypes.string]),
  title: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Badge.defaultProps = {
  title: 'Badge',
  radius: RADIUS.NORMAL,
  color: COLOR.LIGHT,
  size: SIZE.MEDIUM,
  shadow: SHADOW.NONE,
  children: 'Nirvana',
};

export { Badge };
