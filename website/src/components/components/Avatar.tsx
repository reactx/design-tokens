import React from 'react';
import PropTypes from 'prop-types';
import { cleanProps, generateClass } from '../../utils';
import { Loading } from './Loading';

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

const LOADING_SIZE = {
  tiny: 'tiny',
  small: 'tiny',
  medium: 'small',
  large: 'medium',
  extra: 'large',
};

const AvatarComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div {...parentProps} className={generateClass(props, 'avatar')}>
      {props.src ? (
        <img src={props.src} alt={props.username} />
      ) : (
        <span className="reactx-avatar-letter">
          {props.username
            .substring(0, props.letterCount)
            .trim()
            .replace(/^\w/, (c) => c.toUpperCase())}
        </span>
      )}
      {props.loading && (
        <Loading
          enabled={props.loading}
          color={props.color}
          size={LOADING_SIZE[props.size]}
        />
      )}
    </div>
  );
};

const Avatar = React.forwardRef((props) => <AvatarComponent {...props} />);

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
  letterCount: PropTypes.number,
  loading: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Avatar.defaultProps = {
  color: COLOR.NORMAL,
  radius: RADIUS.NORMAL,
  size: SIZE.MEDIUM,
  shadow: SHADOW.NONE,
  letterCount: 1,
  outline: false,
  disabled: false,
  loading: false,
  className: '',
};

export { Avatar };