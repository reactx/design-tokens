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

const LoadingComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div
      {...parentProps}
      className={
        (props.className || '') +
        'nirvana-loading ' +
        (props.enabled ? 'nirvana-loading-enable' : 'nirvana-loading-disable')
      }
    >
      <div
        className={
          'nirvana-loading-loader ' +
          (props.color ? ' nirvana-loading-' + props.color : '') +
          (props.size !== SIZE.EXTRA ? ' loading-size-' + props.size : '')
        }
      >
        <div className="nirvana-loading-circle" />
        <div className="nirvana-loading-circle" />
        <div className="nirvana-loading-circle" />
        <div className="nirvana-loading-circle" />
        <div className="nirvana-loading-circle" />
      </div>
    </div>
  );
};

const Loading = React.forwardRef((props) => <LoadingComponent {...props} />);

Loading.propTypes = {
  id: PropTypes.string,
  size: PropTypes.oneOf(Object.values(SIZE)),
  color: PropTypes.oneOf(Object.values(COLOR)),
  className: PropTypes.string,
  onClick: PropTypes.func,
  enabled: PropTypes.bool,
};

Loading.defaultProps = {
  color: COLOR.PRIMARY,
  size: SIZE.EXTRA,
  enabled: false,
};

export { Loading };
