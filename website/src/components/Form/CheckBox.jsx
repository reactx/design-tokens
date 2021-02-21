import React from 'react';
import PropTypes from 'prop-types';
import { cleanProps, generateClass } from '../../utils';

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA: 'extra',
};

const CheckBoxComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <>
      <input
        {...parentProps}
        type="checkbox"
        className={generateClass(props, 'checkbox')}
      />
      <label htmlFor={props.id} className="checkbox-title">
        {props.label}
      </label>
    </>
  );
};

const CheckBox = React.forwardRef((props) => <CheckBoxComponent {...props} />);

CheckBox.propTypes = {
  id: PropTypes.string,
  size: PropTypes.oneOf(Object.values(SIZE)),
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

CheckBox.defaultProps = {
  size: SIZE.MEDIUM,
  checked: false,
  label: 'CheckBox Text',
  disabled: false,
  readOnly: false,
  autoFocus: false,
};

export { CheckBox };
