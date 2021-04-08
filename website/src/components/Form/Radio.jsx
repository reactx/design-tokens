import React from 'react';
import PropTypes from 'prop-types';
import { cleanProps, generateClass } from '../../utils';

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA: 'extra',
};

const RadioComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);
  delete parentProps.checked;
  delete parentProps.onChange;

  return (
    <div
      {...parentProps}
      className={
        generateClass(props, 'radio') + (props.checked ? ' checked' : '')
      }
      onClick={() => {
        props.onChange(!check);
      }}
    >
      <div className="radio">
        <i className={'reactx-radio-check ' + (props.checked ? 'on' : '')} />
      </div>
      <label htmlFor={props.id} className="radio-title">
        {props.label}
      </label>
    </div>
  );
};

const Radio = React.forwardRef((props) => <RadioComponent {...props} />);

Radio.propTypes = {
  id: PropTypes.string,
  size: PropTypes.oneOf(Object.values(SIZE)),
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

Radio.defaultProps = {
  size: SIZE.MEDIUM,
  checked: false,
  disabled: false,
  readOnly: false,
  autoFocus: false,
};

export { Radio };
