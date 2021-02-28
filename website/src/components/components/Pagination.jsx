import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { cleanProps, generateClass } from '../../utils';
import { FluentIcon } from './FluentIcon';

const RADIUS = {
  NONE: 'none',
  SMALL: 'small',
  NORMAL: 'normal',
  CURVE: 'curve',
  PILL: 'pill',
  ROUNDED: 'rounded',
};

const SIZE = {
  TINY: 'tiny',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA: 'extra',
};

const PaginationComponent = (props) => {
  const [active, setActive] = useState(0);
  const parentProps = { ...props };
  cleanProps(parentProps);

  const changePagePosition = (item) => {
    setActive(item);
    props.changePagePosition(item);
  };

  let output = [...props.items];
  if (output.length > 5) {
    if (active < 5) {
      output = output.slice(0, 5);
    } else {
      if (active + 5 >= props.items.length) {
        let m = active + 5 - props.items.length;
        output = output.slice(active - m, active - m + 5);
      } else {
        output = output.slice(active, active + 5);
      }
    }
  }

  return (
    <div className="nirvana-pagination-container">
      <FluentIcon
        icon="DoubleChevronLeft"
        shadowOnHover="small"
        radius={props.radius}
        iconSize={props.size}
        onClick={() => changePagePosition(0)}
        disabled={active === 0}
      />

      <FluentIcon
        icon="ChevronLeft"
        shadowOnHover="small"
        radius={props.radius}
        iconSize={props.size}
        onClick={() => changePagePosition(active - 1)}
        disabled={active === 0}
      />
      <ul {...parentProps} className={generateClass(props, 'pagination')}>
        {output.map((item) => (
          <li
            key={item}
            onClick={() => changePagePosition(item - 1)}
            className={
              'nirvana-pagination-item ' +
              (item === active + 1 ? 'nirvana-active' : '')
            }
          >
            {item}
          </li>
        ))}
      </ul>
      <FluentIcon
        icon="ChevronRight"
        shadowOnHover="small"
        radius={props.radius}
        iconSize={props.size}
        onClick={() => changePagePosition(active + 1)}
        disabled={active + 1 === props.items.length}
      />
    </div>
  );
};

const Pagination = React.forwardRef((props) => (
  <PaginationComponent {...props} />
));

Pagination.propTypes = {
  id: PropTypes.string,
  radius: PropTypes.oneOf(Object.values(RADIUS)),
  items: PropTypes.array,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  changePagePosition: PropTypes.func,
  size: PropTypes.oneOf(Object.values(SIZE)),
};

Pagination.defaultProps = {
  radius: RADIUS.NORMAL,
  disabled: false,
  className: '',
  size: SIZE.MEDIUM,
};

export { Pagination };
