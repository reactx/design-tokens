import React from 'react';
import PropTypes from 'prop-types';
import '../../sass/button.scss';
import { cleanProps } from '../../utils';

const ButtonComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <button
      {...parentProps}
      className={
        'nirvana-btn ' +
        (props.className || '') +
        (props.outline
          ? props.color
            ? ' border-1 nirvana-color-' + props.color
            : ''
          : props.color
          ? ' nirvana-btn-' + props.color
          : '') +
        (props.size !== 'medium' ? ' size-' + props.size : '') +
        (props.radius !== 'normal' ? ' radius-' + props.radius : '') +
        (props.shadow !== 'none' ? ' shadow-' + props.shadow : '')
      }
    >
      {props.children}
    </button>
  );
};

const Button = React.forwardRef((props) => (
  <ButtonComponent {...props}></ButtonComponent>
));

Button.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  color: PropTypes.oneOf([
    'primary',
    'danger',
    'warning',
    'light',
    'success',
    'dark',
    'info',
  ]),
  radius: PropTypes.oneOf(['none', 'small', 'normal', 'curve', 'rounded']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extra']),
  shadow: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  children: PropTypes.oneOfType([PropTypes.node.isRequired, PropTypes.string]),
  title: PropTypes.string,
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  color: 'primary',
  radius: 'normal',
  size: 'medium',
  shadow: 'none',
  children: 'Button Text',
  title: 'Button Text',
  outline: false,
  disabled: false,
  loading: false,
};

export { Button };
