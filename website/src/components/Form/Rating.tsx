import React, { useState, useEffect, FC } from 'react';
import { cleanProps, generateClass } from '../../utils';
import { FluentIcon } from '../components/FluentIcon';

export type ratingProps = {
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

const RatingComponent = (props: ratingProps) => {
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
      let shape: string = props.shape === 'Star' ? 'FavoriteStar' : 'Heart';
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

const Rating: FC<ratingProps> = React.forwardRef((props) => <RatingComponent {...props} />);

Rating.defaultProps = {
  count: 5,
  shape: 'Star',
  color: 'warning',
  size: 'medium',
};

export { Rating };
