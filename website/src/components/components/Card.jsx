import React from 'react';
import PropTypes from 'prop-types';
import { cleanProps, generateClass } from '../../utils';

const COLOR = {
  PRIMARY: 'primary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
  DARK: 'dark',
  LIGHT: 'light',
  NORMAL: 'normal',
};

const RADIUS = {
  NONE: 'none',
  SMALL: 'small',
  NORMAL: 'normal',
  CURVE: 'curve',
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
    <div {...parentProps} className={generateClass(props, 'card')}>
      {props.header && <div className="card-header">{props.header}</div>}
      <div className="card-body">
        {props.cardTitle && <h5 className="card-title">{props.cardTitle}</h5>}
        {props.children}
      </div>
      {props.footer && <div className="card-footer">{props.footer}</div>}
    </div>
  );
};

const Card = React.forwardRef((props) => <CardComponent {...props} />);

Card.propTypes = {
  id: PropTypes.string,
  color: PropTypes.oneOf(Object.values(COLOR)),
  radius: PropTypes.oneOf(Object.values(RADIUS)),
  shadow: PropTypes.oneOf(Object.values(SHADOW)),
  children: PropTypes.oneOfType([PropTypes.node.isRequired, PropTypes.string]),
  header: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  footer: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  cardTitle: PropTypes.string,
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Card.defaultProps = {
  color: COLOR.NORMAL,
  radius: RADIUS.NORMAL,
  shadow: SHADOW.NONE,
};

export { Card };
