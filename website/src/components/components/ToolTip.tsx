import React, { FC } from 'react';
import { cleanProps, generateClass } from '../../utils';

export type toolTipProps = {
  id?: string,
  radius?: "none" | "small" | "normal" | "curve" | "pill",
  shadow?: "none" | "small" | "medium" | "large",
  color?: "primary" | "success" | "danger" | "warning" | "info" | "dark" | "light" | "normal",
  size?: "small" | "medium" | "large" | "extra",
  className?: string,
  active?: boolean,
};

const ToolTipComponent = (props: toolTipProps) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div
      {...parentProps}
      className={
        generateClass(props, 'tooltip') +
        (props.active ? ' reactx-tooltip-active' : ' reactx-tooltip-fade-out')
      }
    >
      {props.children}
    </div>
  );
};

const ToolTip: FC<toolTipProps> = React.forwardRef((props) => <ToolTipComponent {...props} />);
ToolTip.defaultProps = {
  id: 'tooltip-container',
  color: "normal",
  radius: "normal",
  size: "medium",
  shadow: "none",
};
export { ToolTip };
