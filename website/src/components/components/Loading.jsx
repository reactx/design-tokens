import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { cleanProps } from '../../utils';

const SIZE = {
  TINY: 'tiny',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA: 'extra',
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
  const [lastState, setLast] = useState(false);
  const loadingRef = useRef(null);
  const parentProps = { ...props };
  cleanProps(parentProps);

  useEffect(() => {
    if (!loadingRef.current) return;
    if (props.enabled) {
      loadingRef.current.classList.add('loading-enable');
      loadingRef.current.classList.remove('loading-disable');
      setLast(true);
    } else if (lastState) {
      loadingRef.current.classList.remove('loading-enable');
      loadingRef.current.classList.add('loading-disable');
      setLast(false);
      setTimeout(function () {
        loadingRef.current?.classList?.remove('loading-disable');
      }, 3000);
    }
  }, [props.enabled]);

  return (
    <div
      {...parentProps}
      ref={loadingRef}
      className={(props.className || '') + 'nirvana-loading'}
    >
      <div
        className={
          'loading-loader ' +
          (props.color ? ' nirvana-loading-' + props.color : '') +
          (props.size !== SIZE.EXTRA ? ' loading-size-' + props.size : '')
        }
      >
        <div className="loading-circle" />
        <div className="loading-circle" />
        <div className="loading-circle" />
        <div className="loading-circle" />
        <div className="loading-circle" />
      </div>
      <span className="loading-text">{props.text}</span>
    </div>
  );
};

const Loading = React.forwardRef((props) => <LoadingComponent {...props} />);

Loading.propTypes = {
  id: PropTypes.string,
  size: PropTypes.oneOf(Object.values(SIZE)),
  color: PropTypes.oneOf(Object.values(COLOR)),
  text: PropTypes.string,
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
