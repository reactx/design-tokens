import React, { useState, FC} from 'react';
import { cleanProps, generateClass } from '../../utils';

export type checkBoxProps ={
  id?: string,
  size?: 'small' | 'medium' | 'large' | 'extra',
  label?: string | React.ReactNode,
  checked?: boolean,
  disabled?: boolean,
  autoFocus?: boolean,
  className?: string,
  onChange?: (check : boolean) => void,
};

const CheckBoxComponent = (props: checkBoxProps) => {
  const [check, setCheck] = useState(props.checked || false);
  const parentProps = { ...props };
  cleanProps(parentProps);
  delete parentProps.checked;
  delete parentProps.onChange;

  return (
    <div
      id={parentProps.id!}
      className={generateClass(props, 'checkbox') + (check ? ' checked' : '')}
      onClick={() => {
        setCheck(!check);
        if(props.onChange)
        props.onChange(!check);
      }}
    >
      <div className="checkbox">
        <i className={'reactx-checkbox-check ' + (check ? 'on' : '')} />
      </div>
      <label htmlFor={props.id!} className="checkbox-title">
        {props.label}
      </label>
    </div>
  );
};


const CheckBox: FC<checkBoxProps> = React.forwardRef((props) => (
  <CheckBoxComponent {...props} />
));

CheckBox.defaultProps = {
  size: 'medium',
  checked: false,
  disabled: false,
  autoFocus: false,
};
export { CheckBox };
