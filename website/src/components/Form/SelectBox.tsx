import React, { useRef, FC } from 'react';
import { cleanProps, generateClass } from '../../utils';

export type selectBoxProps = {
  id?: string,
  radius?: 'none' | 'small' | 'normal' | 'curve' | 'pill',
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'extra',
  shadow?: 'none' | 'small' | 'medium' | 'large',
  validationStates?: 'none' | 'valid' | 'invalid',
  title?: string,
  disabled?: boolean,
  required?: boolean,
  autoFocus?: boolean,
  multiple?: boolean,
  className?: string,
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  defaultValue?: string,
  items?: Array<any>,
  defaultText?: string,
};

const SelectBoxComponent = (props: selectBoxProps) => {
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
        props.items.map((item: any, index: number) => (
          <option key={index} value={item.value} className="selectbox-item">
            {item.name}
          </option>
        ))}
    </select>
  );
};

const SelectBox: FC<selectBoxProps> = React.forwardRef((props) => (
  <SelectBoxComponent {...props} />
));

SelectBox.defaultProps = {
  radius: 'normal',
  size: 'medium',
  shadow: 'none',
  validationStates: 'none',
  defaultText: '--Please choose an option--',
};

export { SelectBox };
