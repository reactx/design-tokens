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
  PILL: 'pill',
};

const SHADOW = {
  NONE: 'none',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA: 'extra',
};

const ToolTipComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div
      {...parentProps}
      className={
        generateClass(props, 'tooltip') +
        (props.active ? ' Reactx-tooltip-active' : ' Reactx-tooltip-fade-out')
      }
    >
      {props.children}
    </div>
  );
};

const ToolTip = React.forwardRef((props) => <ToolTipComponent {...props} />);

ToolTip.propTypes = {
  id: PropTypes.string,
  color: PropTypes.oneOf(Object.values(COLOR)),
  radius: PropTypes.oneOf(Object.values(RADIUS)),
  shadow: PropTypes.oneOf(Object.values(SHADOW)),
  size: PropTypes.oneOf(Object.values(SIZE)),
  children: PropTypes.oneOfType([PropTypes.node.isRequired, PropTypes.string]),
  className: PropTypes.string,
  active: PropTypes.bool,
};

ToolTip.defaultProps = {
  id: 'tooltip-container',
  color: COLOR.PRIMARY,
  radius: RADIUS.NORMAL,
  size: SIZE.MEDIUM,
  shadow: SHADOW.NONE,
  className: '',
};

export { ToolTip };
