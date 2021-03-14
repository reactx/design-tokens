import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { cleanProps, generateClass } from '../../utils';
import { FluentIcon } from './FluentIcon';
import { Progress } from '../Form/Progress';

const COLOR = {
  PRIMARY: 'primary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
  DARK: 'dark',
  LIGHT: 'light',
};

const ICON = {
  PRIMARY: 'ProgressLoopOuter spinner',
  SUCCESS: 'Completed',
  DANGER: 'ErrorBadge',
  WARNING: 'Error',
  INFO: 'Info',
  DARK: 'SettingsSecure',
  LIGHT: 'Feedback',
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
            <FluentIcon
              icon="ChromeClose"
              radius="rounded"
              iconSize="tiny"
              onClick={props.closeAction}
            />
          </div>
        </div>
      )}
      <div className="toast-body">
        {props.useDefaultIcon && (
          <FluentIcon
            icon={ICON[props.color.toUpperCase()]}
            radius="rounded"
            iconSize="extra-large"
          />
        )}
        {props.children}
      </div>
      {props.progressBar && (
        <Progress
          value={10}
          size="tiny"
          radius="none"
          max={100}
          color={props.color}
        />
      )}
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
  closeAction: PropTypes.func,
  progressBar: PropTypes.bool,
  outline: PropTypes.bool,
  useDefaultIcon: PropTypes.bool,
  showDuration: PropTypes.number,
};

Toast.defaultProps = {
  color: COLOR.LIGHT,
  radius: RADIUS.SMALL,
  shadow: SHADOW.SMALL,
  progressBar: false,
  outline: false,
  useDefaultIcon: false,
  showDuration: 3000,
};

export { Toast };
