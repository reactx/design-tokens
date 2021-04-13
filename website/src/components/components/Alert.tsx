import React, { FC } from 'react';
import { generateClass } from '../../utils';

export type alertProps = {
  id?: string,
  color?: "primary" | "success" | "danger" | "warning" | "info" | "dark" | "light" | "normal",
  radius?: "none" | "small" | "normal" | "curve" | "pill",
  shadow?: "none" | "small" | "medium" | "large",
  title?: string,
  outline?: boolean,
  className?: string,
  onClick?: () => void,
  children: React.ReactNode | string
};

const AlertComponent = (props: alertProps) => {
  return (
    <div
      id={props.id}
      title={props.title}
      onClick={() => props.onClick && props.onClick()}
      className={generateClass(props, 'alert')}>
      {props.children}
    </div>
  );
};

const Alert: FC<alertProps> = React.forwardRef((props) => <AlertComponent {...props} />);

Alert.defaultProps = {
  color: "normal",
  radius: "normal",
  shadow: "none",
};
export { Alert };
