import React from 'react';
import PropTypes from 'prop-types';
import '../../sass/button.scss';

const ButtonComponent = (props) => {
  const parentProps = { ...props };
  delete parentProps.className;
  delete parentProps.children;
  delete parentProps.color;

  return (
    <button
      {...parentProps}
      className={
        'nirvana-btn ' +
        (props.className || '') +
        (props.color ? ' nirvana-btn-' + props.color : '')
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
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  'aria-label': PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  color: 'primary',
  title: 'Button Text',
  disabled: false,
  'aria-label': 'button',
};

export { Button };
