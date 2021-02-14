import React from 'react';
import PropTypes from 'prop-types';
import '../../sass/card.scss';

const CardComponent = (props) => {
  const parentProps = { ...props };
  delete parentProps.className;
  delete parentProps.children;
  delete parentProps.header;
  delete parentProps.footer;
  delete parentProps.color;

  return (
    <div
      {...parentProps}
      className={
        'nirvana-card ' +
        (props.className || '') +
        (props.color ? ' nirvana-card-' + props.color : '')
      }
    >
      {props.header && (
        <div className="nirvana-card-header">{props.header}</div>
      )}
      <div className="nirvana-card-body">{props.children}</div>
      {props.footer && (
        <div className="nirvana-card-footer">{props.footer}</div>
      )}
    </div>
  );
};

const Card = React.forwardRef((props) => (
  <CardComponent {...props}></CardComponent>
));

Card.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  header: PropTypes.node,
  footer: PropTypes.node,
  color:
    'primary' | 'danger' | 'warning' | 'light' | 'success' | 'dark' | 'info',
  title: PropTypes.string,
  'aria-label': PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  title: 'Card Text',
  disabled: false,
  'aria-label': 'Card',
};

export { Card };
