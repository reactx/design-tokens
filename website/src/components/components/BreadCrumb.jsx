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

const BreadCrumbComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    // <div {...parentProps} className={generateClass(props, 'alert')}>
    //   {props.children}
    // </div>
    <div
      {...parentProps}
      className={
        generateClass(props, 'breadcrumb') +
        ' ' +
        props.itemColor +
        ' ' +
        props.itemRadius
      }
    >
      {props.items.map((item, index) => {
        return (
          <div className="breadcrumb-item" key={index}>
            <span title={item.title}>{item.title}</span>
          </div>
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
  itemColor: PropTypes.oneOf(Object.values(COLOR)),
  itemRadius: PropTypes.oneOf(Object.values(RADIUS)),
  className: PropTypes.string,
  items: PropTypes.array,
};

BreadCrumb.defaultProps = {
  itemColor: COLOR.LIGHT,
  itemRadius: RADIUS.NORMAL,
  className: '',
};

export { BreadCrumb };
