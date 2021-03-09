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
};

const RADIUS = {
  NONE: 'none',
  SMALL: 'small',
  NORMAL: 'normal',
  CURVE: 'curve',
  ROUNDED: 'rounded',
  PILL: 'pill',
};

const SHADOW = {
  NONE: 'none',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const CollapseComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div
      {...parentProps}
      className={generateClass(props, 'collapse')}
      onClick={() => props.onClick(props.id)}
    >
      <div className="collapse-title" onClick={() => props.onClick(props.id)}>
        {props.head}
      </div>
      <div className={'collapse-data' + (props.open ? ' collapsed' : '')}>
        {props.children}
      </div>
    </div>
  );
};

const Collapse = React.forwardRef((props) => <CollapseComponent {...props} />);

Collapse.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node.isRequired, PropTypes.string]),
  head: PropTypes.oneOfType([PropTypes.node.isRequired, PropTypes.string]),
  color: PropTypes.oneOf(Object.values(COLOR)),
  radius: PropTypes.oneOf(Object.values(RADIUS)),
  shadow: PropTypes.oneOf(Object.values(SHADOW)),
  title: PropTypes.string,
  disabled: PropTypes.bool,
  open: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Collapse.defaultProps = {
  color: COLOR.LIGHT,
  radius: RADIUS.NORMAL,
  shadow: SHADOW.NONE,
  className: '',
};

export { Collapse };
