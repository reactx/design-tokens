import React, { FC } from 'react';
import { cleanProps, generateClass } from '../../utils';

export type badgeProps = {
  id?: string,
  color?: "primary" | "success" | "danger" | "warning" | "info" | "dark" | "light" | "normal",
  radius?: "none" | "small" | "normal" | "curve" | "pill" | "rounded",
  shadow?: "none" | "small" | "medium" | "large",
  outline?: boolean,
  title?: string,
  className?: string,
  onClick?: () => void,
};

const BadgeComponent = (props: badgeProps) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div {...parentProps} className={generateClass(props, 'badge')}
      onClick={() => props.onClick && props.onClick()}>
      {props.children}
    </div>
  );
};

const Badge: FC<badgeProps> = React.forwardRef((props) => <BadgeComponent {...props} />);
Badge.defaultProps = {
  radius: "normal",
  color: "normal",
  shadow: "none",
};
export { Badge };
