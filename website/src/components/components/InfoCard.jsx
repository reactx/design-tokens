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
    <Card
      shadow={props.shadow}
      radius={props.radius}
      color={props.color}
      outline={props.outline}
      title={props.description}
    >
      <div className={'info-card'}>
        <h2>{props.number}</h2>
        <p>{props.description}</p>
      </div>
    </Card>
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
  className: PropTypes.string,
  onClick: PropTypes.func,
};

InfoCard.defaultProps = {
  color: COLOR.LIGHT,
  radius: RADIUS.NORMAL,
  shadow: SHADOW.NONE,
  outline: false,
  className: '',
};

export { InfoCard };
