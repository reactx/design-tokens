import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { cleanProps, generateClass } from '../../utils';
import { FluentIcon } from '../components/FluentIcon';

const COLOR = {
  PRIMARY: 'primary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
  DARK: 'dark',
  LIGHT: 'light',
};

const SHAPE = {
  STAR: 'Star',
  HEART: 'Heart',
};

const SHAPE_ICON = {
  Star: 'FavoriteStar',
  Heart: 'Heart',
};

const SIZE = {
  TINY: 'tiny',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA: 'extra',
  EXTRA_LARGE: 'extra-large',
};

const RatingComponent = (props) => {
  const [value, setValue] = useState(props.value || 1);
  const parentProps = { ...props };
  const ratingList = [];
  cleanProps(parentProps);

  let fill = props.count - value;

  for (let i = 0; i < value; i++) {
    ratingList.push(SHAPE_ICON[props.shape] + 'Fill');
  }

  for (let i = 0; i < fill; i++) {
    ratingList.push(SHAPE_ICON[props.shape]);
  }

  const clickFun = (index) => {
    setValue(index);
    props.onClick(index);
  };

  return (
    <div {...parentProps} className={generateClass(props, 'rating')}>
      {ratingList.map((item, index) => (
        <FluentIcon
          icon={item}
          key={index}
          iconSize={props.size}
          onClick={() => clickFun(index + 1)}
          color={'var(--reactx-' + props.color + ')'}
        />
      ))}
    </div>
  );
};

const Rating = React.forwardRef((props) => <RatingComponent {...props} />);

Rating.propTypes = {
  id: PropTypes.string,
  color: PropTypes.oneOf(Object.values(COLOR)),
  shape: PropTypes.oneOf(Object.values(SHAPE)),
  size: PropTypes.oneOf(Object.values(SIZE)),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  count: PropTypes.number,
  value: PropTypes.number,
};

Rating.defaultProps = {
  count: 5,
  shape: SHAPE.STAR,
  color: COLOR.WARNING,
  size: SIZE.MEDIUM,
  disabled: false,
  className: '',
};

export { Rating };
