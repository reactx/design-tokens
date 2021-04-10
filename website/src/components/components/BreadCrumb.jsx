import React from 'react';
import PropTypes from 'prop-types';
import { cleanProps, generateClass } from '../../utils';

const COLOR = {
  PRIMARY: 'primary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
  DARK: 'dark',
  LIGHT: 'light',
  NORMAL: 'normal',
};

const RADIUS = {
  NONE: 'none',
  SMALL: 'small',
  NORMAL: 'normal',
  CURVE: 'curve',
  PILL: 'pill',
};

const SHADOW = {
  NONE: 'none',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const SIZE = {
  TINY: 'tiny',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA: 'extra',
};

const BreadCrumbComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);
  delete parentProps.onClick;
  return (
    <div {...parentProps} className={generateClass(props, 'breadcrumb') + (props.stepMode ? " step" : "")}>
      {props.items.map((item, index) => {
        return (
          <>
            {index !== 0 && (
              <i className={'reactx-icon nf-icon-' + props.icon} />
            )}
            <div
              className={"breadcrumb-item" + (item.active ? " active" : "")}
              key={index}
              onClick={() => props.onClick(item)}
            >
              {props.itemIcon && <span className="bread-icon">
                <i className={"reactx-icon nf-icon-" + item.icon} />
              </span>}
              <span className="bread-title" title={item.title}>{item.title}</span>
            </div>
          </>
        );
      })}
    </div>
  );
};

const BreadCrumb = React.forwardRef((props) => (
  <BreadCrumbComponent {...props} />
));

BreadCrumb.propTypes = {
  id: PropTypes.string,
  color: PropTypes.oneOf(Object.values(COLOR)),
  radius: PropTypes.oneOf(Object.values(RADIUS)),
  size: PropTypes.oneOf(Object.values(SIZE)),
  shadow: PropTypes.oneOf(Object.values(SHADOW)),
  className: PropTypes.string,
  icon: PropTypes.string,
  items: PropTypes.array,
  onClick: PropTypes.func,
  stepMode: PropTypes.bool,
  itemIcon: PropTypes.bool,
};

BreadCrumb.defaultProps = {
  color: COLOR.NORMAL,
  radius: RADIUS.NORMAL,
  size: SIZE.MEDIUM,
  shadow: SHADOW.NONE,
  icon: 'ChevronRight',
};

export { BreadCrumb };
