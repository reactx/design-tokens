import React, { useState } from 'react';
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
  const [open, setOpen] = useState(props.accordionMode ? false : true);
  const parentProps = { ...props };
  delete parentProps.onClick;
  cleanProps(parentProps);

  const clickAction = () => {
    debugger;
    if (!props.accordionMode) {
      setOpen(!open);
    }
    props.onClick(props.id);
  };

  return (
    <div {...parentProps} className={generateClass(props, 'collapse')}>
      <div className="collapse-title" onClick={() => clickAction()}>
        {props.head}
      </div>
      <div
        className={
          'collapse-data' +
          (open || (props.accordionMode && props.open) ? ' collapsed' : '')
        }
      >
        {props.children}
      </div>
    </div>
  );
};

const Collapse = React.forwardRef((props) => <CollapseComponent {...props} />);

Collapse.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node.isRequired, PropTypes.string]),
  head: PropTypes.oneOfType([PropTypes.node.isRequired, PropTypes.string]),
  radius: PropTypes.oneOf(Object.values(RADIUS)),
  shadow: PropTypes.oneOf(Object.values(SHADOW)),
  color: PropTypes.oneOf(Object.values(COLOR)),
  accordionMode: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  onClick: PropTypes.func,
  open: PropTypes.bool,
  id: PropTypes.string,
};

Collapse.defaultProps = {
  radius: RADIUS.NORMAL,
  color: COLOR.NORMAL,
  shadow: SHADOW.NONE,
};

export { Collapse };
