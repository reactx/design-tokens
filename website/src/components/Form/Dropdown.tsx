import React, { useState, useEffect, useRef } from 'react';
import { InferProps }  from 'prop-types';
import { cleanProps, generateClass } from '../../utils';

export interface IDropdownComp  {
  id?: string,
  radius?: 'none' | 'small' | 'normal' | 'curve' | 'pill',
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'extra',
  shadow?: 'none' | 'small' | 'medium' | 'large',
  validationStates?: 'none' | 'valid' | 'invalid',
  fixIcon?: string | React.ReactNode,
  title?: string,
  disabled?: boolean,
  readOnly?: boolean,
  required?: boolean,
  autoFocus?: boolean,
  className?: string,
  onChange?: (item: IDropdownItem) => void,
  defaultValue?: string,
  items?: Array<IDropdownItem>,
}

 export interface IDropdownItem  {
   name: string,
   value: string
 }

const DropdownComponent = (props: InferProps<IDropdownComp>) => {
  const [isOpen, SetOpen] = useState(false);
  const [selectItem, setSelectItem] = useState(
    props.defaultValue || props.items[0] || {},
  );
  const dropdownRef = useRef<HTMLDivElement>(null);
  const parentProps = { ...props };
  cleanProps(parentProps);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        SetOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const renderItem = (item: IDropdownItem) => {
    return (
      <div
        className={
          'dropdown-item ' +
          (item.value === props.defaultValue?.value ? ' dropdown-selected' : '')
        }
        onClick={(e) => {
          if (props.onChange) props.onChange(item);
          SetOpen(false);
          setSelectItem(item);
          e.stopPropagation();
        }}
      >
        <span className="dropdown-value">{item.value}</span>
        <span className="dropdown-name">{item.name}</span>
      </div>
    );
  };

  return (
    <div
      ref={dropdownRef}
      {...parentProps}
      className={generateClass(props, 'dropdown') + (isOpen ? ' _active' : '')}
      onClick={() => {
        !props.disabled && SetOpen(!isOpen);
      }}
    >
      <div className="dropdown-item">
        {props.fixIcon ? (
          <>
            {typeof props.fixIcon === 'string' ? (
              <i className={'reactx-icon nf-icon-' + props.fixIcon} />
            ) : (
              <>{props.fixIcon}</>
            )}
          </>
        ) : (
          <>
            <span className="dropdown-arrow">
              <i
                className={
                  'reactx-icon nf-icon-' +
                  (isOpen ? 'ChevronFold10' : 'ChevronUnfold10')
                }
              />
            </span>
            <span className="dropdown-value">{selectItem.value}</span>
            <span className="dropdown-name">{selectItem.name}</span>
          </>
        )}
      </div>
      <div className="dropdown-dropdown">
        {props.items &&
          props.items.map((item: IDropdownItem, index: number) => {
            if (item.value === 'separator') return <hr key={index} />;
            return renderItem(item);
          })}
      </div>
    </div>
  );
};

const Dropdown = React.forwardRef((props: IDropdownComp ) => <DropdownComponent {...props} />);

Dropdown.defaultProps = {
  radius: 'normal',
  size: 'medium',
  shadow: 'none',
  validationStates: 'none',
};

export { Dropdown };
