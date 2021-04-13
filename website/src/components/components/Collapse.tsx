import React, { FC, useState } from 'react';
import { cleanProps, generateClass } from '../../utils';

export type collapseProps = {
  head: React.ReactNode | string,
  onClick?: (id: string) => void,
  radius?: "none" | "small" | "normal" | "curve" | "rounded" | "pill",
  shadow?: "none" | "small" | "medium" | "large",
  color?: "primary" | "success" | "danger" | "warning" | "info" | "dark" | "light" | "normal",
  accordionMode?: boolean,
  className?: string,
  disabled?: boolean,
  title?: string,
  open?: boolean,
  id: string,
};

const CollapseComponent = (props: collapseProps) => {
  const [open, setOpen] = useState<boolean>(props.accordionMode ? false : true);
  const parentProps = { ...props };
  delete parentProps.onClick;
  cleanProps(parentProps);

  const clickAction = () => {
    if (!props.accordionMode) {
      setOpen(!open);
    }
    if (props.onClick)
      props.onClick(props.id);
  };

  return (
    <div {...parentProps} className={generateClass(props, 'collapse')}>
      <div className="collapse-title" onClick={() => clickAction()}>
        {props.head}
      </div>
      <div
        className={
          'collapse-data' +
          (open || (props.accordionMode && props.open) ? ' collapsed' : '')
        }
      >
        {props.children}
      </div>
    </div>
  );
};

const Collapse: FC<collapseProps> = React.forwardRef((props) => <CollapseComponent {...props} />);
Collapse.defaultProps = {
  radius: "normal",
  color: "normal",
  shadow: "none",
};
export { Collapse };
