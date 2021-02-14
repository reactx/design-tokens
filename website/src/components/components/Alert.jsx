import React from 'react';
import PropTypes from 'prop-types';
import '../../sass/alert.scss';

const AlertComponent = (props) => {
  const parentProps = { ...props };
  delete parentProps.className;
  delete parentProps.children;
  delete parentProps.color;

  return (
    <div
      {...parentProps}
      className={
        'nirvana-alert ' +
        (props.className || '') +
        (props.color ? ' nirvana-alert-' + props.color : '')
      }
    >
      {props.children}
    </div>
  );
};

const Alert = React.forwardRef((props) => (
  <AlertComponent {...props}></AlertComponent>
));

Alert.propTypes = {
  id: PropTypes.string,
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

Alert.defaultProps = {
  color: 'primary',
  title: 'Alert Text',
  disabled: false,
  'aria-label': 'Alert',
};

export { Alert };
