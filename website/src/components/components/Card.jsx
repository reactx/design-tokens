import React from 'react';
import PropTypes from 'prop-types';
import '../../sass/card.scss';
import { cleanProps } from '../../utils';

const CardComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div
      {...parentProps}
      className={
        'nirvana-card ' +
        (props.className || '') +
        (props.color ? ' nirvana-card-' + props.color : '') +
        (props.size !== 'medium' ? ' size-' + props.size : '') +
        (props.radius !== 'normal' ? ' radius-' + props.radius : '') +
        (props.shadow !== 'medium' ? ' shadow-' + props.shadow : '')
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
  color: PropTypes.oneOf([
    'primary',
    'danger',
    'warning',
    'light',
    'success',
    'dark',
    'info',
  ]),
  radius: PropTypes.oneOf(['none', 'small', 'normal', 'curve', 'rounded']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extra']),
  shadow: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  children: PropTypes.node.isRequired,
  header: PropTypes.node,
  footer: PropTypes.node,
  title: PropTypes.string,
  'aria-label': PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  color: 'light',
  title: 'Card Text',
  radius: 'normal',
  size: 'medium',
  shadow: 'medium',
  disabled: false,
  'aria-label': 'Card',
};

export { Card };
