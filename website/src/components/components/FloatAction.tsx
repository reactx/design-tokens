import React, { FC, useState } from 'react';
import { cleanProps } from '../../utils';

export type floatActionProps = {
  direction?: "vertical" | "horizontal",
  position?: "top" | "bottom",
  float?: "right" | "left" | "center",
  subChildren: Array<floatActionItems>,
  className?: string,
  onClick?: (item: floatActionItems) => void,
  id?: string,
};

export type floatActionItems = {
  props: {
    className: string
  },
  data: string
}

const FloatActionComponent = (props: floatActionProps) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const parentProps = { ...props };
  cleanProps(parentProps);
  delete parentProps.onClick;

  return (
    <div
      {...parentProps}
      className={
        'reactx-float-action' +
        (toggle ? ' toggle' : '') +
        (props.className ? ' ' + props.className : '')
      }
    >
      <div className="main-action" onClick={() => setToggle(!toggle)}>
        {props.children}
      </div>
      <div className="sub-action">
        {props.subChildren.length !== 0 && (
          <>
            {props.subChildren.map((item: floatActionItems, index: number) => (
              <div
                {...item.props}
                className={
                  'sub-action-item ' +
                  (item.props.className ? item.props.className : '')
                }
                onClick={() => { props.onClick && props.onClick(item) }}
                key={index}
              >
                {item.data}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

const FloatAction: FC<floatActionProps> = React.forwardRef((props) => (<FloatActionComponent {...props} />));
FloatAction.defaultProps = {
  direction: "vertical",
  position: "bottom",
  float: "right",
};
export { FloatAction };
