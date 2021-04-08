import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { cleanProps } from '../../utils';

const SHADOW = {
  MEDIUM: 'medium',
  SMALL: 'small',
  LARGE: 'large',
  NONE: 'none',
};

const SIZE = {
  MEDIUM: 'medium',
  SMALL: 'small',
  LARGE: 'large',
  EXTRA: 'extra',
};

const RADIUS = {
  NORMAL: 'normal',
  SMALL: 'small',
  CURVE: 'curve',
  NONE: 'none',
};

const SwitchComponent = (props) => {
  const [active, setActive] = useState(props.checked);
  const parentProps = { ...props };
  cleanProps(parentProps);
  delete parentProps.checked;

  return (
    <div className="reactx-switch-container">
      <label
        className={
          'reactx-switch ' +
          (props.className || '') +
          (props.size !== SIZE.MEDIUM ? ' switch-size-' + props.size : '')
        }
        disabled={props.disabled}
      >
        <input
          {...parentProps}
          checked={active}
          type="checkbox"
          onChange={() => setActive(!active)}
        />
        <span
          className={
            'reactx-slider ' +
            (props.radius !== RADIUS.NORMAL ? ' radius-' + props.radius : '') +
            (props.shadow !== SHADOW.NONE ? ' shadow-' + props.shadow : '')
          }
        />
      </label>
      <label htmlFor={props.id} className="reactx-switch-title">
        {props.title}
      </label>
    </div>
  );
};

const Switch = React.forwardRef((props) => <SwitchComponent {...props} />);

Switch.propTypes = {
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  shadow: PropTypes.oneOf(Object.values(SHADOW)),
  radius: PropTypes.oneOf(Object.values(RADIUS)),
  size: PropTypes.oneOf(Object.values(SIZE)),
  className: PropTypes.string,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  title: PropTypes.string,
  id: PropTypes.string,
};

Switch.defaultProps = {
  radius: RADIUS.NORMAL,
  shadow: SHADOW.NONE,
  size: SIZE.MEDIUM,
};

export { Switch };
