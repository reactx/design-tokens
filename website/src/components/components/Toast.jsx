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
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  header: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  shadow: PropTypes.oneOf(Object.values(SHADOW)),
  radius: PropTypes.oneOf(Object.values(RADIUS)),
  color: PropTypes.oneOf(Object.values(COLOR)),
  useDefaultIcon: PropTypes.bool,
  showDuration: PropTypes.number,
  className: PropTypes.string,
  closeAction: PropTypes.func,
  progressBar: PropTypes.bool,
  onClick: PropTypes.func,
  outline: PropTypes.bool,
  id: PropTypes.string,
};

Toast.defaultProps = {
  useDefaultIcon: false,
  radius: RADIUS.SMALL,
  shadow: SHADOW.SMALL,
  color: COLOR.LIGHT,
  showDuration: 3000,
  progressBar: false,
  outline: false,
};

export { Toast };
