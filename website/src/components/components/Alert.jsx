import React from 'react';
import PropTypes from 'prop-types';
import '../../sass/alert.scss';
import { cleanProps } from '../../utils';

const AlertComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div
      {...parentProps}
      className={
        'nirvana-alert ' +
        (props.className || '') +
        (props.outline
          ? props.color
            ? ' border-1 nirvana-color-' + props.color
            : ''
          : props.color
          ? ' nirvana-alert-' + props.color
          : '') +
        (props.size !== 'medium' ? ' size-' + props.size : '') +
        (props.radius !== 'normal' ? ' radius-' + props.radius : '') +
        (props.shadow !== 'none' ? ' shadow-' + props.shadow : '')
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
  radius: PropTypes.oneOf(['none', 'small', 'normal', 'curve']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extra']),
  shadow: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  children: PropTypes.oneOfType([PropTypes.node.isRequired, PropTypes.string]),
  title: PropTypes.string,
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Alert.defaultProps = {
  color: 'primary',
  title: 'Alert Text',
  radius: 'normal',
  size: 'medium',
  shadow: 'none',
  outline: false,
  disabled: false,
  children: 'Alert Message',
};

export { Alert };
