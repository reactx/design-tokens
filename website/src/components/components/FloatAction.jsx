import React from 'react';
import PropTypes from 'prop-types';
import { cleanProps } from '../../utils';

const FloatActionComponent = (props) => {
  const parentProps = { ...props };
  delete parentProps.type;
  cleanProps(parentProps);

  return (
    <div
      {...parentProps}
      className={
        'reactx-float-action ' + (props.className ? props.className : '')
      }
    >
      <div className="main-action">{props.children}</div>
      <div className="sub-action">
        {props.subChildren.length !== 0 && (
          <>
            {props.subChildren.map((item, index) => (
              <div className="sub-action-item" key={index} {...item.props}>
                {item.data}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

const FloatAction = React.forwardRef((props) => (
  <FloatActionComponent {...props} />
));

FloatAction.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  float: PropTypes.oneOf(['right', 'left']),
  subChildren: PropTypes.array,
  className: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

FloatAction.defaultProps = {
  direction: 'vertical',
  float: 'right',
};

export { FloatAction };
