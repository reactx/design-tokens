import React from 'react';
import PropTypes from 'prop-types';
import { cleanProps, generateClass } from '../../utils';
import { Loading } from './Loading';

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
  ROUNDED: 'rounded',
  PILL: 'pill',
};

const TYPE = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit',
};

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA: 'extra',
};

const LOADING_SIZE = {
  small: 'tiny',
  medium: 'small',
  large: 'medium',
  extra: 'large',
};

const SHADOW = {
  NONE: 'none',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const ButtonComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <button {...parentProps} className={generateClass(props, 'btn')}>
      {props.children}
      <Loading
        enabled={props.loading}
        color={props.color}
        size={LOADING_SIZE[props.size]}
      />
    </button>
  );
};

const Button = React.forwardRef((props) => <ButtonComponent {...props} />);

Button.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(Object.values(TYPE)),
  color: PropTypes.oneOf(Object.values(COLOR)),
  radius: PropTypes.oneOf(Object.values(RADIUS)),
  size: PropTypes.oneOf(Object.values(SIZE)),
  shadow: PropTypes.oneOf(Object.values(SHADOW)),
  children: PropTypes.oneOfType([PropTypes.node.isRequired, PropTypes.string]),
  title: PropTypes.string,
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: TYPE.BUTTON,
  color: COLOR.PRIMARY,
  radius: RADIUS.NORMAL,
  size: SIZE.MEDIUM,
  shadow: SHADOW.NONE,
  outline: false,
  disabled: false,
  loading: false,
  className: '',
};

export { Button };
