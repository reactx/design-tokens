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
  PILL: 'pill',
};

const SHADOW = {
  NONE: 'none',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const ListComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);
  delete parentProps.onClick;

  return (
    <ul {...parentProps} className={generateClass(props, 'list')}>
      {props.items.map((item, index) => (
        <li
          key={index}
          id={item.id}
          className="list-item"
          onClick={() => props.onClick(item)}
        >
          {item.data}
        </li>
      ))}
    </ul>
  );
};

const List = React.forwardRef((props) => <ListComponent {...props} />);

List.propTypes = {
  radius: PropTypes.oneOf(Object.values(RADIUS)),
  shadow: PropTypes.oneOf(Object.values(SHADOW)),
  color: PropTypes.oneOf(Object.values(COLOR)),
  className: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

List.defaultProps = {
  radius: RADIUS.NORMAL,
  shadow: SHADOW.NONE,
  color: COLOR.NORMAL,
};

export { List };
