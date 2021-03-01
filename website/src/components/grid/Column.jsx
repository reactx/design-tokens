import React from 'react';
import PropTypes from 'prop-types';
import { cleanProps, generateClass } from '../../utils';

const ColumnComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div {...parentProps} className={generateClass(props, 'column')}>
      {props.children}
    </div>
  );
};

const Column = React.forwardRef((props) => <ColumnComponent {...props} />);

Column.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node.isRequired, PropTypes.string]),
  className: PropTypes.string,
};

Column.defaultProps = {
  children: 'Column Message',
  className: '',
};

export { Column };
