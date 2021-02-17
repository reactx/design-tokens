import React from 'react';
import PropTypes from 'prop-types';
import { cleanProps } from '../../utils';

const COLOR = {
  PRIMARY: 'primary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
  DARK: 'dark',
  LIGHT: 'light',
};

const RADIUS = {
  NONE: 'none',
  SMALL: 'small',
  NORMAL: 'normal',
  CURVE: 'curve',
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

const AvatarComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div
      {...parentProps}
      className={
        'nirvana-avatar ' +
        (props.className || '') +
        (props.outline
          ? props.color
            ? ' border-1 nirvana-color-' + props.color
            : ''
          : props.color
          ? ' nirvana-avatar-' + props.color
          : '') +
        (props.size !== SIZE.MEDIUM ? ' avatar-size-' + props.size : '') +
        (props.radius !== RADIUS.NORMAL ? ' radius-' + props.radius : '') +
        (props.shadow !== SHADOW.NONE ? ' shadow-' + props.shadow : '')
      }
    >
      {props.src ? (
        <>
          <img src={props.src} alt={props.username} />
        </>
      ) : (
        <>
          <span className="nirvana-avatar-letter">
            {props.username.substring(0, 1).toUpperCase()}
          </span>
        </>
      )}
    </div>
  );
};

const Avatar = React.forwardRef((props) => (
  <AvatarComponent {...props}></AvatarComponent>
));

Avatar.propTypes = {
  id: PropTypes.string,
  radius: PropTypes.oneOf(Object.values(RADIUS)),
  size: PropTypes.oneOf(Object.values(SIZE)),
  shadow: PropTypes.oneOf(Object.values(SHADOW)),
  color: PropTypes.oneOf(Object.values(COLOR)),
  outline: PropTypes.bool,
  username: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Avatar.defaultProps = {
  title: 'Avatar',
  color: COLOR.LIGHT,
  radius: RADIUS.NORMAL,
  size: SIZE.MEDIUM,
  shadow: SHADOW.NONE,
  outline: false,
  disabled: false,
  username: 'Nirvana',
};

export { Avatar };
