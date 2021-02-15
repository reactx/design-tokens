import React from 'react';
import PropTypes from 'prop-types';
import '../../sass/inputText.scss';
import { cleanProps } from '../../utils';

const InputTextComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <input
      {...parentProps}
      className={
        'nirvana-input ' +
        (props.className || '') +
        (props.size !== 'medium' ? ' size-' + props.size : '') +
        (props.validationStates !== 'none'
          ? ' nirvana-input-' + props.validationStates
          : '') +
        (props.radius !== 'normal' ? ' radius-' + props.radius : '') +
        (props.shadow !== 'none' ? ' shadow-' + props.shadow : '')
      }
    />
  );
};

const InputText = React.forwardRef((props) => (
  <InputTextComponent {...props}></InputTextComponent>
));

InputText.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf([
    // 'checkbox',
    'color',
    'date',
    'datetime-local',
    'email',
    // 'file',
    'hidden',
    // 'image',
    'month',
    'number',
    'password',
    // 'radio',
    'range',
    'search',
    'tel',
    'text',
    'time',
    'url',
    'week',
  ]),
  radius: PropTypes.oneOf(['none', 'small', 'normal', 'curve']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extra']),
  shadow: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  validationStates: PropTypes.oneOf(['none', 'valid', 'invalid']),
  value: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
};

InputText.defaultProps = {
  type: 'text',
  radius: 'normal',
  size: 'medium',
  shadow: 'none',
  title: 'InputText Text',
  validationStates: 'none',
  disabled: false,
  readOnly: false,
  required: false,
  loading: false,
};

export { InputText };
