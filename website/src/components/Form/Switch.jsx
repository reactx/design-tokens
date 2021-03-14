import React from 'react';
import PropTypes from 'prop-types';
import { cleanProps } from '../../utils';

const SHADOW = {
  NONE: 'none',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA: 'extra',
};

const RADIUS = {
  NONE: 'none',
  SMALL: 'small',
  NORMAL: 'normal',
  CURVE: 'curve',
};

const SwitchComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div className="Reactx-switch-container">
      <label
        className={
          'Reactx-switch ' +
          (props.className || '') +
          (props.size !== SIZE.MEDIUM ? ' switch-size-' + props.size : '')
        }
        disabled={props.disabled}
      >
        <input {...parentProps} type="checkbox" />
        <span
          className={
            'Reactx-slider ' +
            (props.radius !== RADIUS.NORMAL ? ' radius-' + props.radius : '') +
            (props.shadow !== SHADOW.NONE ? ' shadow-' + props.shadow : '')
          }
        />
      </label>
      <label htmlFor={props.id} className="Reactx-switch-title">
        {props.title}
      </label>
    </div>
  );
};

const Switch = React.forwardRef((props) => <SwitchComponent {...props} />);

Switch.propTypes = {
  id: PropTypes.string,
  size: PropTypes.oneOf(Object.values(SIZE)),
  shadow: PropTypes.oneOf(Object.values(SHADOW)),
  radius: PropTypes.oneOf(Object.values(RADIUS)),
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  checked: PropTypes.bool,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

Switch.defaultProps = {
  size: SIZE.MEDIUM,
  shadow: SHADOW.NONE,
  radius: RADIUS.NORMAL,
  checked: false,
  disabled: false,
  readOnly: false,
  autoFocus: false,
};

export { Switch };
