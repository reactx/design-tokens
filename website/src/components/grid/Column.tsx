import React from 'react';
import { cleanProps } from '../../utils';

export type IColumnComp = {
  id?: string,
  children: string | React.ReactNode, 
  size?: '1' |
    '2' |
    '3' |
    '4' |
    '5' |
    '6' |
    '7' |
    '8' |
    '9' |
    '10' |
    '11' |
    '12' |
    'auto' ,
  sizeMd?: '1' |
  '2' |
  '3' |
  '4' |
  '5' |
  '6' |
  '7' |
  '8' |
  '9' |
  '10' |
  '11' |
  '12' |
  'auto' ,
  sizeLg?: '1' |
  '2' |
  '3' |
  '4' |
  '5' |
  '6' |
  '7' |
  '8' |
  '9' |
  '10' |
  '11' |
  '12' |
  'auto' ,
  className?: string,
};


const ColumnComponent = (props: IColumnComp) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div
      {...parentProps}
      className={
        'reactx-column ' +
        (props.size ? 'col-' + props.size : '') +
        (props.sizeMd ? ' col-md-' + props.sizeMd : '') +
        (props.sizeLg ? ' col-lg-' + props.sizeLg : '') +
        (' ' + props.className || '')
      }
    >
      {props.children}
    </div>
  );
};

const Column = React.forwardRef((props: IColumnComp) => <ColumnComponent {...props} />);
Column.defaultProps = {
  className: '',
  size: '12',
};

export { Column };
