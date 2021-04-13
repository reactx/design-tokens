import React, { FC } from 'react';
import { cleanProps } from '../../utils';

export type fluentIconProps = {
  id?: string,
  icon: string,
  title?: string,
  color?: string,
  style?: object,
  disabled?: boolean,
  iconSize?: "tiny" | "small" | "medium" | "large" | "extra" | "extra-large",
  radius?: "none" | "small" | "normal" | "curve" | "pill" | "rounded",
  shadow?: "none" | "small" | "medium" | "large",
  shadowOnHover?: "none" | "small" | "medium" | "large",
  className?: string,
  onClick?: () => void,
};

const FluentIconComponent = (props: fluentIconProps) => {
  const parentProps = { ...props };
  parentProps.style = { color: props.color };
  cleanProps(parentProps);

  return (
    <span
      {...parentProps}
      onClick={() => props.onClick && props.onClick()}
      className={
        (props.className || '') +
        ' reactx-icon-warper' +
        (props.radius !== "none" ? ' radius-' + props.radius : '') +
        (props.shadowOnHover !== "none"
          ? ' shadow-on-hover-' + props.shadowOnHover
          : '') +
        (props.shadow !== "none" ? ' shadow-' + props.shadow : '')
      }
    >
      <i
        className={
          'icon-size-' + props.iconSize + ' reactx-icon nf-icon-' + props.icon
        }
      />
      {parentProps.title && (
        <span className="reactx-icon-title">{parentProps.title}</span>
      )}
    </span>
  );
};

const FluentIcon: FC<fluentIconProps> = React.forwardRef((props) => (<FluentIconComponent {...props} />));
FluentIcon.defaultProps = {
  iconSize: "medium",
  radius: "none",
  shadow: "none",
  shadowOnHover: "none",
};
export { FluentIcon };
