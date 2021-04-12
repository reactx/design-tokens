import React from 'react';
import { InferProps } from 'prop-types';
import { cleanProps, generateClass } from '../../utils';

const randomNumber = 'range-' + Math.ceil(Math.random() * 1000);

export interface IRangeComp  {
  id?: string,
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'extra',
  formControlStyle?: 'normal' | 'inline',
  label?: string,
  value?: string,
  title?: string,
  disabled?: boolean,
  required?: boolean,
  autoFocus?: boolean,
  className?: string,
  min?: number,
  max?: number,
  step?: number,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
};


const RangeComponent = (props: InferProps<IRangeComp>) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div
      className={
        'reactx-form-control' +
        (props.formControlStyle !== 'normal'
          ? ' form-range-' + props.formControlStyle
          : '') +
        (props.size !== 'medium' ? ' range-size-' + props.size : '')
      }
    >
      {props.label && (
        <>
          {typeof props.label === 'string' ? (
            <label htmlFor={props.id} className="control-label">
              {props.label}
              {props.required && <span className="reactx-color-danger">*</span>}
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

const Range = React.forwardRef((props: IRangeComp) => <RangeComponent {...props} />);

Range.defaultProps = {
  id: randomNumber,
  size: 'medium',
  formControlStyle: 'normal',
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
  required: false,
  autoFocus: false,
  className: '',
};

export { Range };
