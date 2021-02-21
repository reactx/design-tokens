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

  return (
    <>
      <input
        {...parentProps}
        type="radio"
        className={generateClass(props, 'radio')}
      />
      <label htmlFor={props.id} className="radio-title">
        {props.label}
      </label>
    </>
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
  label: 'Radio Text',
  disabled: false,
  readOnly: false,
  autoFocus: false,
};

export { Radio };
