import React from 'react';
import PropTypes from 'prop-types';
import { cleanProps, generateClass } from '../../utils';

const randomNumber = 'range-' + Math.ceil(Math.random() * 1000);

const CONTROL_STYLE = {
  NORMAL: 'normal',
  INLINE: 'inline',
};

const SIZE = {
  TINY: 'tiny',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA: 'extra',
};

const RangeComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div
      className={
        'nirvana-form-control' +
        (props.formControlStyle !== CONTROL_STYLE.NORMAL
          ? ' form-range-' + props.formControlStyle
          : '') +
        (props.size !== SIZE.MEDIUM ? ' range-size-' + props.size : '')
      }
    >
      {props.label && (
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
      <input
        {...parentProps}
        type="range"
        className={generateClass(props, 'range')}
      />
    </div>
  );
};

const Range = React.forwardRef((props) => <RangeComponent {...props} />);

Range.propTypes = {
  id: PropTypes.string,
  size: PropTypes.oneOf(Object.values(SIZE)),
  formControlStyle: PropTypes.oneOf(Object.values(CONTROL_STYLE)),
  label: PropTypes.string,
  value: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func,
};

Range.defaultProps = {
  id: randomNumber,
  size: SIZE.MEDIUM,
  formControlStyle: CONTROL_STYLE.NORMAL,
  min: 0,
  max: 100,
  step: 1,
  title: 'Range Text',
  label: 'Range Label',
  disabled: false,
  required: false,
  autoFocus: false,
  className: '',
};

export { Range };
