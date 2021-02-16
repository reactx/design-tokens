import React from 'react';
import PropTypes from 'prop-types';
import { cleanProps } from '../../utils';

const InputNumberComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <input
      {...parentProps}
      className={
        'nirvana-input ' +
        (props.className || '') +
        (props.size !== 'medium' ? ' input-size-' + props.size : '') +
        (props.validationStates !== 'none'
          ? ' nirvana-input-' + props.validationStates
          : '') +
        (props.radius !== 'normal' ? ' radius-' + props.radius : '') +
        (props.shadow !== 'none' ? ' shadow-' + props.shadow : '')
      }
    />
  );
};

const InputNumber = React.forwardRef((props) => (
  <InputNumberComponent {...props}></InputNumberComponent>
));

InputNumber.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(['number', 'range']),
  radius: PropTypes.oneOf(['none', 'small', 'normal', 'curve']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extra']),
  shadow: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  validationStates: PropTypes.oneOf(['none', 'valid', 'invalid']),
  value: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  pattern: PropTypes.string,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  onChange: PropTypes.func,
};

InputNumber.defaultProps = {
  type: 'number',
  radius: 'normal',
  size: 'medium',
  shadow: 'none',
  title: 'InputNumber Number',
  validationStates: 'none',
  disabled: false,
  readOnly: false,
  required: false,
  autoFocus: false,
};

export { InputNumber };
