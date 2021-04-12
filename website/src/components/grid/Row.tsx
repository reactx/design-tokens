import React, {FC} from 'react';
import { cleanProps } from '../../utils';

export type rowProps = {
  id?: string,
  children?:  string | React.ReactNode,
  className?: string,
  justifyContent?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'left' |
  'left' |
  'right' |
  'normal' |
  'stretch',
  alignItem?: 'stretch' |
  'flex-start' |
  'flex-end' |
  'center' |
  'start' |
  'end'
};

const RowComponent = (props: rowProps) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div
      {...parentProps}
      className={
        'reactx-row ' +
        (props.className || '') +
        (props.justifyContent ? ' justify-' + props.justifyContent : '') +
        (props.alignItem ? ' align-' + props.alignItem : '')
      }
    >
      {props.children}
    </div>
  );
};

const Row: FC<rowProps> = React.forwardRef((props) => <RowComponent {...props} />);

Row.defaultProps = {
  className: '',
  alignItem: 'stretch',
  justifyContent: 'start'
};

export { Row };
