import React from 'react';
import PropTypes from 'prop-types';
import { cleanProps } from '../../utils';

const JUSTIFY = {
  START: 'start',
  END: 'end',
  CENTER: 'center',
  SPACE_BETWEEN: 'space-between',
  SPACE_AROUND: 'space-around',
  SPACE_EVENLY: 'space-evenly',
  LEFT: 'left',
  RIGHT: 'right',
  NORMAL: 'normal',
  STRETCH: 'stretch',
};

const ALIGN = {
  STRETCH: 'stretch',
  FLEX_START: 'flex-start',
  FLEX_END: 'flex-end',
  CENTER: 'center',
  START: 'start',
  END: 'end',
};

const RowComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div
      {...parentProps}
      className={
        'nirvana-row ' +
        (props.className || '') +
        (props.justifyContent ? ' justify-' + props.justifyContent : '') +
        (props.alignItem ? ' align-' + props.alignItem : '')
      }
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
  justifyContent: PropTypes.oneOf(Object.values(JUSTIFY)),
  alignItem: PropTypes.oneOf(Object.values(ALIGN)),
};

Row.defaultProps = {
  className: '',
};

export { Row };
