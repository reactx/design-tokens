import React, { FC } from 'react';
import { cleanProps, generateClass } from '../../utils';
import { FluentIcon } from './FluentIcon';
import { Progress } from '../Form/Progress';

const ICON = {
  PRIMARY: 'ProgressLoopOuter spinner',
  DARK: 'SettingsSecure',
  SUCCESS: 'Completed',
  DANGER: 'ErrorBadge',
  LIGHT: 'Feedback',
  WARNING: 'Error',
  INFO: 'Info',
  NORMAL: 'Ringer',
};

export type toastProps = {
  header?: React.ReactNode | string,
  radius?: "none" | "small" | "normal" | "curve" | "pill",
  shadow?: "none" | "small" | "medium" | "large",
  color?: "primary" | "success" | "danger" | "warning" | "info" | "dark" | "light" | "normal",
  useDefaultIcon?: boolean,
  showDuration?: number,
  className?: string,
  closeAction?: () => void,
  progressBar?: boolean,
  onClick?: () => void,
  outline?: boolean,
  id?: string,
};

const ToastComponent = (props: toastProps) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div {...parentProps} className={generateClass(props, 'toast')}>
      {props.header && (
        <div className="toast-header">
          <div>{props.header}</div>
          <FluentIcon
            icon="ChromeClose"
            radius="rounded"
            iconSize="tiny"
            onClick={props.closeAction}
          />
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

const Toast: FC<toastProps> = React.forwardRef((props) => <ToastComponent {...props} />);
Toast.defaultProps = {
  radius: "small",
  shadow: "small",
  color: "normal",
  showDuration: 3000,
};
export { Toast };
