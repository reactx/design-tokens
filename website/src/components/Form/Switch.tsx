import React, { useState } from 'react';
import { cleanProps } from '../../utils';

export type ISwitchComp = {
  label?: string | React.ReactNode;
  shadow?: 'none'|'small' | 'medium'| 'large';
  radius?: 'none' | 'small' | 'normal' | 'curve' | 'pill';
  size?: 'tiny'| 'small'| 'medium'|'large'|'extra';
  className?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  onChange?: (e: boolean) => void;
  checked?: boolean;
  title?: string;
  id?: string;
};

const SwitchComponent = (props: ISwitchComp) => {
  const [active, setActive] = useState(props.checked);
  const parentProps = { ...props };
  cleanProps(parentProps);
  delete parentProps.checked;

  return (
    <div className="reactx-switch-container">
      <label
        className={
          'reactx-switch ' +
          (props.className || '') +
          (props.size !== 'medium' ? ' switch-size-' + props.size : '')
        }
        disabled={props.disabled}
      >
        <input
          {...parentProps}
          checked={active}
          type="checkbox"
          onChange={() => setActive(!active)}
        />
        <span
          className={
            'reactx-slider ' +
            (props.radius !== 'normal' ? ' radius-' + props.radius : '') +
            (props.shadow !== 'none' ? ' shadow-' + props.shadow : '')
          }
        />
      </label>
      <label htmlFor={props.id} className="reactx-switch-title">
        {props.title}
      </label>
    </div>
  );
};

const Switch = React.forwardRef((props: ISwitchComp) => <SwitchComponent {...props}/>);

Switch.defaultProps = {
  radius: 'normal',
  shadow: 'none',
  size: 'medium',
};

export { Switch };
