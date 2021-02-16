import React from 'react';
import PropTypes from 'prop-types';
import { cleanProps } from '../../utils';

const COLOR = {
  PRIMARY: 'primary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
  DARK: 'dark',
  LIGHT: 'light',
};

const RADIUS = {
  NONE: 'none',
  SMALL: 'small',
  NORMAL: 'normal',
  CURVE: 'curve',
};

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA: 'extra',
};

const SHADOW = {
  NONE: 'none',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const CardComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div
      {...parentProps}
      className={
        'nirvana-card ' +
        (props.className || '') +
        (props.outline
          ? props.color
            ? ' border-1 nirvana-color-' + props.color
            : ''
          : props.color
          ? ' nirvana-card-' + props.color
          : '') +
        (props.size !== SIZE.MEDIUM ? ' card-size-' + props.size : '') +
        (props.radius !== RADIUS.NORMAL ? ' radius-' + props.radius : '') +
        (props.shadow !== SHADOW.NONE ? ' shadow-' + props.shadow : '')
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
  color: PropTypes.oneOf(Object.values(COLOR)),
  radius: PropTypes.oneOf(Object.values(RADIUS)),
  size: PropTypes.oneOf(Object.values(SIZE)),
  shadow: PropTypes.oneOf(Object.values(SHADOW)),
  children: PropTypes.oneOfType([PropTypes.node.isRequired, PropTypes.string]),
  header: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  footer: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  title: PropTypes.string,
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  title: 'Card Text',
  color: COLOR.LIGHT,
  radius: RADIUS.NORMAL,
  size: SIZE.MEDIUM,
  shadow: SHADOW.NONE,
  outline: false,
  disabled: false,
  children: 'Card Body Text',
  header: 'Header Text',
  footer: 'Footer Text',
};

export { Card };
