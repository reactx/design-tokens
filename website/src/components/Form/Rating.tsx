import React, { useState, useEffect } from 'react';
import { InferProps } from 'prop-types';
import { cleanProps, generateClass } from '../../utils';
import { FluentIcon } from '../components/FluentIcon';

export type IRatingComp = {
  id?: string,
  color?: 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light',
  shape?: 'Star' | 'Heart',
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'extra',
  disabled?: boolean,
  className?: string,
  onClick?: (index: number) => void,
  count?: number,
  value?: number,
};

const RatingComponent = (props: IRatingComp) => {
  const [value, setValue] = useState(props.value || 1);
  const [ratingList, setRatingList] = useState<string[]>([]);
  const parentProps = { ...props };
  cleanProps(parentProps);

  const clickFun = (index: number) => {
    setValue(index);
    props.onClick && props.onClick(index);
  };

  useEffect(() => {
    if (props.shape && value) {
      let shape: string =  props.shape ==='Star' ? 'FavoriteStar' : 'Heart';
      let list = [];
      let fill = props.count ? (props.count - value) : 0;
      for (let i = 0; i < value; i++) 
        list.push(shape + 'Fill');
      for (let i = 0; i < fill; i++) 
        list.push(shape);
      setRatingList(list);
    }
  }, [props.shape, value])

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

const Rating = React.forwardRef((props: IRatingComp) => <RatingComponent {...props} />);

Rating.defaultProps = {
  count: 5,
  shape: 'Star',
  color: 'warning',
  size: 'medium',
  disabled: false,
  className: '',
};

export { Rating };
