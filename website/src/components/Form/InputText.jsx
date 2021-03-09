import React from 'react';
import PropTypes from 'prop-types';
import { cleanProps, generateClass } from '../../utils';

const randomNumber = 'input-' + Math.ceil(Math.random() * 1000);

const CONTROL_STYLE = {
  NORMAL: 'normal',
  INLINE: 'inline',
};

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

const TYPE = {
  TEXT: 'text',
  EMAIL: 'email',
  PASSWORD: 'password',
  TEL: 'tel',
  URL: 'url',
  SEARCH: 'search',
  COLOR: 'color',
  HIDDEN: 'hidden',
  NUMBER: 'number',
  DATE: 'date',
  DATE_TIME: 'datetime-local',
  TIME: 'time',
  MONTH: 'month',
  WEEK: 'week',
};

const InputTextComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div
      className={
        'nirvana-form-control' +
        (props.formControlStyle !== CONTROL_STYLE.NORMAL
          ? ' form-control-' + props.formControlStyle
          : '') +
        (props.size !== SIZE.MEDIUM ? ' form-control-' + props.size : '')
      }
    >
      {props.type !== TYPE.HIDDEN && props.label && (
        <>
          {typeof props.label === 'string' ? (
            <label htmlFor={props.id} className="control-label">
              {props.label}
              {props.required && (
                <span className="nirvana-color-danger">*</span>
              )}
            </label>
          ) : (
            <>{props.label}</>
          )}
        </>
      )}
      <div className={generateClass(props, 'input-container')}>
        {props.prepend && (
          <div className="control-prepend">{props.prepend}</div>
        )}
        {props.multiLine ? (
          <textarea
            {...parentProps}
            className={generateClass(props, 'input')}
          ></textarea>
        ) : (
          <input {...parentProps} className={generateClass(props, 'input')} />
        )}
        {props.append && <div className="control-append">{props.append}</div>}
      </div>
      {props.type !== TYPE.HIDDEN && props.description && (
        <div className="control-description">{props.description}</div>
      )}
      {props.type !== TYPE.HIDDEN &&
        props.validationStates === VALIDATION.VALID && (
          <div class="valid-feedback">{props.validMessage}</div>
        )}
      {props.type !== TYPE.HIDDEN &&
        props.validationStates === VALIDATION.INVALID && (
          <div class="invalid-feedback">{props.invalidMessage}</div>
        )}
    </div>
  );
};

const InputText = React.forwardRef((props) => (
  <InputTextComponent {...props} />
));

InputText.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(Object.values(TYPE)),
  radius: PropTypes.oneOf(Object.values(RADIUS)),
  size: PropTypes.oneOf(Object.values(SIZE)),
  shadow: PropTypes.oneOf(Object.values(SHADOW)),
  formControlStyle: PropTypes.oneOf(Object.values(CONTROL_STYLE)),
  validationStates: PropTypes.oneOf(Object.values(VALIDATION)),
  prepend: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  append: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  label: PropTypes.string,
  description: PropTypes.string,
  validMessage: PropTypes.string,
  invalidMessage: PropTypes.string,
  value: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  pattern: PropTypes.string,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  onChange: PropTypes.func,
  multiLine: PropTypes.bool,
};

InputText.defaultProps = {
  id: randomNumber,
  type: TYPE.TEXT,
  radius: RADIUS.NORMAL,
  size: SIZE.MEDIUM,
  shadow: SHADOW.NONE,
  validationStates: VALIDATION.NONE,
  formControlStyle: CONTROL_STYLE.NORMAL,
  disabled: false,
  readOnly: false,
  required: false,
  autoFocus: false,
  className: '',
};

export { InputText };
