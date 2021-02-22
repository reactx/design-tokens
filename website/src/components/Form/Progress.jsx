import React from 'react';
import PropTypes from 'prop-types';
import { cleanProps, generateClass } from '../../utils';

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

const RADIUS = {
  NONE: 'none',
  SMALL: 'small',
  NORMAL: 'normal',
  CURVE: 'curve',
  PILL: 'pill',
};

const SIZE = {
  TINY: 'tiny',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA: 'extra',
};

const ProgressComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  const calcPosition = () => {
    debugger;
    let one = props.max / 100;
    let result = Math.ceil(props.value / one);
    return result + '%';
  };

  return (
    <div {...parentProps} className={generateClass(props, 'progress')}>
      <div
        className={
          'progress-bar' +
          (props.striped ? ' striped' : '') +
          (props.animation ? ' animation' : '')
        }
        style={{ width: calcPosition() }}
      ></div>
      {props.showLabel && (
        <span className="progress-label">{calcPosition()}</span>
      )}
    </div>
  );
};

const Progress = React.forwardRef((props) => <ProgressComponent {...props} />);

Progress.propTypes = {
  id: PropTypes.string,
  showLabel: PropTypes.bool,
  striped: PropTypes.bool,
  animation: PropTypes.bool,
  radius: PropTypes.oneOf(Object.values(RADIUS)),
  size: PropTypes.oneOf(Object.values(SIZE)),
  shadow: PropTypes.oneOf(Object.values(SHADOW)),
  color: PropTypes.oneOf(Object.values(COLOR)),
  value: PropTypes.number,
  max: PropTypes.number,
  title: PropTypes.string,
  className: PropTypes.string,
};

Progress.defaultProps = {
  radius: RADIUS.NORMAL,
  color: COLOR.PRIMARY,
  size: SIZE.MEDIUM,
  shadow: SHADOW.NONE,
  title: 'Progress Text',
  className: '',
  value: 50,
  max: 100,
};

export { Progress };
