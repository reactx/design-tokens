import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { cleanProps, generateClass } from '../../utils';
import { Collapse } from './Collapse';

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

const AccordionComponent = (props) => {
  const [active, setActive] = useState(props.default || null);
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div {...parentProps} className={generateClass(props, 'accordion')}>
      {props.items.map((item, index) => (
        <Collapse
          key={index}
          id={item.id}
          head={item.head}
          radius="none"
          accordionMode={true}
          open={item.id === active}
          color={props.color}
          onClick={(id) => {
            active === id ? setActive(null) : setActive(id);
          }}
        >
          {item.children}
        </Collapse>
      ))}
    </div>
  );
};

const Accordion = React.forwardRef((props) => (
  <AccordionComponent {...props} />
));

Accordion.propTypes = {
  radius: PropTypes.oneOf(Object.values(RADIUS)),
  shadow: PropTypes.oneOf(Object.values(SHADOW)),
  color: PropTypes.oneOf(Object.values(COLOR)),
  className: PropTypes.string,
  default: PropTypes.string,
  items: PropTypes.array,
  id: PropTypes.string,
};

Accordion.defaultProps = {
  radius: RADIUS.NORMAL,
  color: COLOR.NORMAL,
  shadow: SHADOW.NONE,
};

export { Accordion };
