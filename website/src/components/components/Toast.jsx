import React from 'react';
import PropTypes from 'prop-types';
import { cleanProps, generateClass } from '../../utils';
import { FluentIcon } from './FluentIcon';

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
  PILL: 'pill',
};

const SHADOW = {
  NONE: 'none',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const ToastComponent = (props) => {
  const parentProps = { ...props };
  delete parentProps.type;
  cleanProps(parentProps);

  return (
    <div {...parentProps} className={generateClass(props, 'toast')}>
      {props.header && (
        <div className="toast-header">
          <div>{props.header}</div>
          <div>
            <FluentIcon icon="ChromeClose" radius="rounded" iconSize="tiny" />
          </div>
        </div>
      )}
      <div className="toast-body">{props.children}</div>
    </div>
  );
};

const Toast = React.forwardRef((props) => <ToastComponent {...props} />);

Toast.propTypes = {
  id: PropTypes.string,
  color: PropTypes.oneOf(Object.values(COLOR)),
  radius: PropTypes.oneOf(Object.values(RADIUS)),
  shadow: PropTypes.oneOf(Object.values(SHADOW)),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  header: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Toast.defaultProps = {
  color: COLOR.LIGHT,
  radius: RADIUS.NORMAL,
  shadow: SHADOW.MEDIUM,
};

export { Toast };
