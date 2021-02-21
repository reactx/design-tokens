import React, { useRef, useCallback } from 'react';
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
    <details {...parentProps} className={generateClass(props, 'collapse')}>
      <summary className="collapse-title">{props.head}</summary>
      <div className="collapse-data">{props.children}</div>
    </details>
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
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Collapse.defaultProps = {
  color: COLOR.PRIMARY,
  radius: RADIUS.NORMAL,
  shadow: SHADOW.NONE,
  title: 'Collapse Text',
  disabled: false,
  children: 'Collapse Message',
  className: '',
};

export { Collapse };
