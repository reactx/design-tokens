import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { cleanProps, generateClass } from '../../utils';

const SHADOW = {
  NONE: 'none',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const VALIDATION = {
  NONE: 'none',
  VALID: 'valid',
  INVALID: 'invalid',
};

const RADIUS = {
  NONE: 'none',
  SMALL: 'small',
  NORMAL: 'normal',
  CURVE: 'curve',
  PILL: 'pill',
};

const SIZE = {
  TINY: 'tiny',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA: 'extra',
};

const SelectBoxComponent = (props) => {
  const selectboxRef = useRef(null);
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <select
      ref={selectboxRef}
      {...parentProps}
      className={generateClass(props, 'selectbox')}
    >
      <option value="" className="selectbox-item">
        {props.defaultText}
      </option>
      {props.items &&
        props.items.map((item, index) => (
          <option key={index} value={item.value} className="selectbox-item">
            {item.name}
          </option>
        ))}
    </select>
  );
};

const SelectBox = React.forwardRef((props) => (
  <SelectBoxComponent {...props} />
));

SelectBox.propTypes = {
  id: PropTypes.string,
  radius: PropTypes.oneOf(Object.values(RADIUS)),
  size: PropTypes.oneOf(Object.values(SIZE)),
  shadow: PropTypes.oneOf(Object.values(SHADOW)),
  validationStates: PropTypes.oneOf(Object.values(VALIDATION)),
  title: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  autoFocus: PropTypes.bool,
  multiple: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  items: PropTypes.array,
  defaultText: PropTypes.string,
};

SelectBox.defaultProps = {
  radius: RADIUS.NORMAL,
  size: SIZE.MEDIUM,
  shadow: SHADOW.NONE,
  validationStates: VALIDATION.NONE,
  defaultText: '--Please choose an option--',
};

export { SelectBox };
