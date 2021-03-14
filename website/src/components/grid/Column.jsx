import React from 'react';
import PropTypes from 'prop-types';
import { cleanProps } from '../../utils';

const SIZE = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  'auto',
];

const ColumnComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div
      {...parentProps}
      className={
        'Reactx-column ' +
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

const Column = React.forwardRef((props) => <ColumnComponent {...props} />);

Column.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node.isRequired, PropTypes.string]),
  size: PropTypes.oneOf(SIZE),
  sizeMd: PropTypes.oneOf(SIZE),
  sizeLg: PropTypes.oneOf(SIZE),
  className: PropTypes.string,
};

Column.defaultProps = {
  className: '',
  size: '12',
};

export { Column };
