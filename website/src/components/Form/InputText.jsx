import React from 'react';
import PropTypes from 'prop-types';
import { cleanProps } from '../../utils';

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
  TEXT: 'text',
  EMAIL: 'email',
  PASSWORD: 'password',
  TEL: 'tel',
  URL: 'url',
  SEARCH: 'search',
  COLOR: 'color',
  HIDDEN: 'hidden',
};

const InputTextComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <input
      {...parentProps}
      className={
        'nirvana-input ' +
        (props.className || '') +
        (props.size !== SIZE.MEDIUM ? ' input-size-' + props.size : '') +
        (props.validationStates !== VALIDATION.NONE
          ? ' nirvana-input-' + props.validationStates
          : '') +
        (props.radius !== RADIUS.NORMAL ? ' radius-' + props.radius : '') +
        (props.shadow !== SHADOW.NONE ? ' shadow-' + props.shadow : '')
      }
    />
  );
};

const InputText = React.forwardRef((props) => (
  <InputTextComponent {...props} />
));

InputText.propTypes = {
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

InputText.defaultProps = {
  type: TYPE.TEXT,
  radius: RADIUS.NORMAL,
  size: SIZE.MEDIUM,
  shadow: SHADOW.NONE,
  validationStates: VALIDATION.NONE,
  title: 'InputText Text',
  disabled: false,
  readOnly: false,
  required: false,
  autoFocus: false,
};

export { InputText };
