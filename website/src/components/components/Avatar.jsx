import React from 'react';
import PropTypes from 'prop-types';
import { cleanProps } from '../../utils';

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
  username: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Avatar.defaultProps = {
  title: 'Avatar',
  radius: RADIUS.NORMAL,
  size: SIZE.MEDIUM,
  shadow: SHADOW.NONE,
  disabled: false,
  username: 'Nirvana',
};

export { Avatar };
