import React, { FC } from 'react';
import { cleanProps, generateClass } from '../../utils';

export type tableProps = {
  id?: string,
  radius?: "none" | "small" | "normal" | "curve" | "rounded" | "pill",
  shadow?: "none" | "small" | "medium" | "large",
  color?: "primary" | "success" | "danger" | "warning" | "info" | "dark" | "light" | "normal",
  header: Array<string>,
  body: Array<any>,
  footer?: React.ReactNode | string,
  className?: string,
  onClick?: () => void,
};

const TableComponent = (props: tableProps) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div {...parentProps} className={generateClass(props, 'table')}>
      <div className="table-header">
        {props.header.map((item, index) => (
          <div key={index} className="table-header-item">
            {item}
          </div>
        ))}
      </div>
      <div className="table-body">
        {props.body.map((record: any, recIndex: number) => (
          <div className="table-row" key={recIndex}>
            {props.header.map((item: any, index) => (
              <div key={index} className="table-row-item">
                {record[item]}
              </div>
            ))}
          </div>
        ))}
      </div>
      {props.footer && <div className="table-footer">{props.footer}</div>}
    </div>
  );
};

const Table: FC<tableProps> = React.forwardRef((props) => <TableComponent {...props} />);
Table.defaultProps = {
  color: "normal",
  radius: "normal",
  shadow: "none",
};
export { Table };
