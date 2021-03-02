import React from 'react';
import PropTypes from 'prop-types';
import { cleanProps } from '../../utils';

const RowComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div
      {...parentProps}
      className={'nirvana-row ' + (' ' + props.className || '')}
    >
      {props.children}
    </div>
  );
};

const Row = React.forwardRef((props) => <RowComponent {...props} />);

Row.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node.isRequired, PropTypes.string]),
  className: PropTypes.string,
};

Row.defaultProps = {
  className: '',
};

export { Row };
