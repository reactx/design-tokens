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

const BottomNavigationComponent = (props) => {
  const [active, setActive] = useState(props.default || 1);
  const parentProps = { ...props };
  cleanProps(parentProps);
  delete parentProps.onClick;
  return (
    <div {...parentProps} className={generateClass(props, 'btm-navigation')}>
      {props.items.map((item, index) => (
        <div
          key={index}
          className={'btm-nav-item' + (active === item.id ? ' active' : '')}
          onClick={() => {
            setActive(item.id);
            props.onClick(item.id);
          }}
        >
          <div className="btm-nav-icon">
            <i className={'reactx-icon nf-icon-' + item.icon}></i>
          </div>
          <div className="btm-nav-title">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

const BottomNavigation = React.forwardRef((props) => (
  <BottomNavigationComponent {...props} />
));

BottomNavigation.propTypes = {
  radius: PropTypes.oneOf(Object.values(RADIUS)),
  shadow: PropTypes.oneOf(Object.values(SHADOW)),
  color: PropTypes.oneOf(Object.values(COLOR)),
  className: PropTypes.string,
  default: PropTypes.string,
  onClick: PropTypes.func,
  items: PropTypes.array,
  id: PropTypes.string,
};

BottomNavigation.defaultProps = {
  radius: RADIUS.NORMAL,
  color: COLOR.NORMAL,
  shadow: SHADOW.NONE,
};

export { BottomNavigation };
