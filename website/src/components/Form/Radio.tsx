import React, { useState } from 'react';
import { InferProps } from 'prop-types';
import { cleanProps, generateClass } from '../../utils';

export interface IRadioComp  {
  id?: string,
  size?: 'small' | 'medium' | 'large' | 'extra',
  label?: string| React.ReactNode, 
  checked?: boolean,
  disabled?: boolean,
  autoFocus?: boolean,
  className?: string,
  onChange?: (check: boolean) => void,
};


const RadioComponent = (props: InferProps<IRadioComp>) => {
  const [check, setCheck] = useState(props.checked || false);
  const parentProps = { ...props };
  cleanProps(parentProps);
  delete parentProps.checked;
  delete parentProps.onChange;

  return (
    <div
      {...parentProps}
      className={
        generateClass(props, 'radio') + (props.checked ? ' checked' : '')
      }
      onClick={() => {
        setCheck(!check);
        if (props.onChange)
          props.onChange(!check);
      }}
    >
      <div className="radio">
        <i className={'reactx-radio-check ' + (check ? 'on' : '')} />
      </div>
      <label htmlFor={props.id} className="radio-title">
        {props.label}
      </label>
    </div>
  );
};

const Radio = React.forwardRef((props: IRadioComp) => <RadioComponent {...props} />);

Radio.defaultProps = {
  size: 'medium',
  checked: false,
  disabled: false,
  autoFocus: false,
};

export { Radio };