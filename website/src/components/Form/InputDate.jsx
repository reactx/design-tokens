import React from 'react';
import PropTypes from 'prop-types';
import { cleanProps, generateClass } from '../../utils';

const SHADOW = {
  NONE: 'none',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const VALIDATION = {
  NONE: 'none',
  VALID: 'valid',
  INVALID: 'invalid',
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

const TYPE = {
  DATE: 'date',
  DATE_TIME: 'datetime-local',
  TIME: 'time',
  MONTH: 'month',
  WEEK: 'week',
};

const InputDateComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return <input {...parentProps} className={generateClass(props, 'input')} />;
};

const InputDate = React.forwardRef((props) => (
  <InputDateComponent {...props} />
));

InputDate.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(Object.values(TYPE)),
  radius: PropTypes.oneOf(Object.values(RADIUS)),
  size: PropTypes.oneOf(Object.values(SIZE)),
  shadow: PropTypes.oneOf(Object.values(SHADOW)),
  validationStates: PropTypes.oneOf(Object.values(VALIDATION)),
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

InputDate.defaultProps = {
  type: TYPE.DATE,
  radius: RADIUS.NORMAL,
  size: SIZE.MEDIUM,
  shadow: SHADOW.NONE,
  title: 'InputDate Date',
  validationStates: VALIDATION.NONE,
  disabled: false,
  readOnly: false,
  required: false,
  autoFocus: false,
  className: '',
};

export { InputDate };
