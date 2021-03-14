import React from 'react';
import PropTypes from 'prop-types';
import { cleanProps, generateClass } from '../../utils';
import { Card } from './Card';

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
  PILL: 'pill',
};

const SHADOW = {
  NONE: 'none',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const InfoCardComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div
      {...parentProps}
      className={
        generateClass(props, 'info-card') +
        (props.inline ? ' info-card-inline' : '')
      }
    >
      <span className="info-card-number">{props.number}</span>
      <p className="info-card-description">{props.description}</p>
    </div>
  );
};

const InfoCard = React.forwardRef((props) => <InfoCardComponent {...props} />);

InfoCard.propTypes = {
  id: PropTypes.string,
  color: PropTypes.oneOf(Object.values(COLOR)),
  radius: PropTypes.oneOf(Object.values(RADIUS)),
  shadow: PropTypes.oneOf(Object.values(SHADOW)),
  number: PropTypes.oneOfType([PropTypes.node.isRequired, PropTypes.string]),
  description: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  outline: PropTypes.bool,
  inline: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

InfoCard.defaultProps = {
  color: COLOR.PRIMARY,
  radius: RADIUS.NORMAL,
  shadow: SHADOW.NONE,
  outline: false,
  className: '',
};

export { InfoCard };
