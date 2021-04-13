import React, { FC } from 'react';
import { cleanProps, generateClass } from '../../utils';

export type alertProps = {
  id?: string,
  color?: "primary" | "success" | "danger" | "warning" | "info" | "dark" | "light" | "normal",
  radius?: "none" | "small" | "normal" | "curve" | "pill",
  shadow?: "none" | "small" | "medium" | "large",
  title?: string,
  outline?: boolean,
  disabled?: boolean,
  className?: string,
  onClick?: () => void,
};

const AlertComponent = (props: alertProps) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div {...parentProps} className={generateClass(props, 'alert')}>
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
