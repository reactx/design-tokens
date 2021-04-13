import React, { FC } from 'react';
import { cleanProps, generateClass } from '../../utils';

export type listProps = {
  color?: "primary" | "success" | "danger" | "warning" | "info" | "dark" | "light" | "normal",
  radius?: "none" | "small" | "normal" | "curve" | "pill",
  shadow?: "none" | "small" | "medium" | "large",
  items: Array<listItems>,
  className?: string,
  onClick?: (item: listItems) => void,
  id?: string,
};

export type listItems = {
  id: string,
  data: React.ReactNode | string,
}

const ListComponent = (props: listProps) => {
  const parentProps = { ...props };
  cleanProps(parentProps);
  delete parentProps.onClick;

  return (
    <ul {...parentProps} className={generateClass(props, 'list')}>
      {props.items.map((item: listItems, index) => (
        <li
          key={index}
          id={item.id}
          className="list-item"
          onClick={() => { props.onClick && props.onClick(item) }}
        >
          {item.data}
        </li>
      ))}
    </ul>
  );
};

const List: FC<listProps> = React.forwardRef((props) => <ListComponent {...props} />);
List.defaultProps = {
  radius: "normal",
  shadow: "none",
  color: "normal",
};
export { List };
