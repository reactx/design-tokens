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

const SelectBoxComponent = (props) => {
  const [isOpen, SetOpen] = useState(false);
  const [selectItem, setSelectItem] = useState(
    props.defaultValue || props.items[0] || {},
  );
  const selectboxRef = useRef(null);
  const parentProps = { ...props };
  cleanProps(parentProps);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        selectboxRef.current &&
        !selectboxRef.current.contains(event.target)
      ) {
        SetOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectboxRef]);

  const renderItem = (item) => {
    return (
      <div
        className={
          'selectbox-item ' +
          (item.value === props.defaultValue?.value
            ? ' selectbox-selected'
            : '')
        }
        onClick={(e) => {
          if (props.onChange) props.onChange(item);
          SetOpen(false);
          setSelectItem(item);
          e.stopPropagation();
        }}
      >
        <span className="selectbox-value">{item.value}</span>
        <span className="selectbox-name">{item.name}</span>
      </div>
    );
  };

  return (
    <div
      ref={selectboxRef}
      {...parentProps}
      className={generateClass(props, 'selectbox') + (isOpen ? ' _active' : '')}
      onClick={() => {
        !props.disabled && SetOpen(!isOpen);
      }}
    >
      <div className="selectbox-item">
        {props.fixIcon ? (
          <>
            {typeof props.fixIcon === 'string' ? (
              <FluentIcon
                icon={props.fixIcon}
                className="nirvana-p-0"
                iconSize={props.size}
              />
            ) : (
              <>{props.fixIcon}</>
            )}
          </>
        ) : (
          <>
            <span className="selectbox-arrow">
              {isOpen ? (
                <FluentIcon
                  icon="ChevronFold10"
                  iconSize={props.size}
                  className="nirvana-p-0"
                />
              ) : (
                <FluentIcon
                  icon="ChevronUnfold10"
                  iconSize={props.size}
                  className="nirvana-p-0"
                />
              )}
            </span>
            <span className="selectbox-value">{selectItem.value}</span>
            <span className="selectbox-name">{selectItem.name}</span>
          </>
        )}
      </div>
      <div className="selectbox-dropdown">
        {props.items &&
          props.items.map((item, index) => {
            if (item.value === 'separator') return <hr key={index} />;
            return renderItem(item);
          })}
      </div>
    </div>
  );
};

const SelectBox = React.forwardRef((props) => (
  <SelectBoxComponent {...props} />
));

SelectBox.propTypes = {
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

SelectBox.defaultProps = {
  radius: RADIUS.NORMAL,
  size: SIZE.MEDIUM,
  shadow: SHADOW.NONE,
  validationStates: VALIDATION.NONE,
  title: 'SelectBox Text',
  text: 'SelectBox Text',
  disabled: false,
  readOnly: false,
  required: false,
  autoFocus: false,
  className: '',
};

export { SelectBox };
