import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { cleanProps, generateClass } from '../../utils';

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA: 'extra',
};

const CheckBoxComponent = (props) => {
  const [check, setCheck] = useState(props.checked || false);
  const parentProps = { ...props };
  cleanProps(parentProps);
  delete parentProps.check;
  delete parentProps.onChange;

  return (
    <div
      {...parentProps}
      checked={check}
      className={generateClass(props, 'checkbox') + (check ? ' checked' : '')}
      onClick={() => {
        setCheck(!check);
        props.onChange(!check);
      }}
    >
      <div className="checkbox">
        <i className={'reactx-checkbox-check ' + (check ? 'on' : '')} />
      </div>
      <label htmlFor={props.id} className="checkbox-title">
        {props.label}
      </label>
    </div>
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
  disabled: false,
  readOnly: false,
  autoFocus: false,
};

export { CheckBox };
