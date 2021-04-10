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

const TableComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div {...parentProps} className={generateClass(props, 'table')}>
      <div className="table-header">
        {props.header.map((item, index) => (
          <div key={index} className="table-header-item">
            {item}
          </div>
        ))}
      </div>
      <div className="table-body">
        {props.body.map((record, recIndex) => (
          <div className="table-row" key={recIndex}>
            {props.header.map((item, index) => (
              <div key={index} className="table-row-item">
                {record[item]}
              </div>
            ))}
          </div>
        ))}
      </div>
      {props.footer && <div className="table-footer">{props.footer}</div>}
    </div>
  );
};

const Table = React.forwardRef((props) => <TableComponent {...props} />);

Table.propTypes = {
  id: PropTypes.string,
  color: PropTypes.oneOf(Object.values(COLOR)),
  radius: PropTypes.oneOf(Object.values(RADIUS)),
  shadow: PropTypes.oneOf(Object.values(SHADOW)),
  header: PropTypes.array.isRequired,
  body: PropTypes.array.isRequired,
  footer: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Table.defaultProps = {
  color: COLOR.NORMAL,
  radius: RADIUS.NORMAL,
  shadow: SHADOW.NONE,
  className: '',
};

export { Table };
