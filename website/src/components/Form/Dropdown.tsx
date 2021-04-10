import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { cleanProps, generateClass } from '../../utils';
import { FluentIcon } from '../components/FluentIcon';

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

const DropdownComponent = (props) => {
  const [isOpen, SetOpen] = useState(false);
  const [selectItem, setSelectItem] = useState(
    props.defaultValue || props.items[0] || {},
  );
  const dropdownRef = useRef(null);
  const parentProps = { ...props };
  cleanProps(parentProps);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        SetOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const renderItem = (item) => {
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
          props.items.map((item, index) => {
            if (item.value === 'separator') return <hr key={index} />;
            return renderItem(item);
          })}
      </div>
    </div>
  );
};

const Dropdown = React.forwardRef((props) => <DropdownComponent {...props} />);

Dropdown.propTypes = {
  id: PropTypes.string,
  radius: PropTypes.oneOf(Object.values(RADIUS)),
  size: PropTypes.oneOf(Object.values(SIZE)),
  shadow: PropTypes.oneOf(Object.values(SHADOW)),
  validationStates: PropTypes.oneOf(Object.values(VALIDATION)),
  fixIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  title: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  items: PropTypes.array,
};

Dropdown.defaultProps = {
  radius: RADIUS.NORMAL,
  size: SIZE.MEDIUM,
  shadow: SHADOW.NONE,
  validationStates: VALIDATION.NONE,
};

export { Dropdown };
