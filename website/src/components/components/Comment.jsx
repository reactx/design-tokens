import React from 'react';
import PropTypes from 'prop-types';
import { cleanProps, generateClass } from '../../utils';
import { Avatar } from './Avatar';

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

const CommentComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div className="nirvana-comment-container">
      {props.items.map((item) => (
        <div
          key={item.id}
          {...parentProps}
          className={generateClass(props, 'comment')}
        >
          <div className="comment-avatar">
            <Avatar
              username={item.username}
              color={props.color}
              src={item.avatar}
              outline={true}
            />
          </div>
          <div className="comment-body">
            <div className="comment-username">{item.username}</div>
            <div className="comment-text">{item.comment}</div>
            <div className="comment-date">{item.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Comment = React.forwardRef((props) => <CommentComponent {...props} />);

Comment.propTypes = {
  id: PropTypes.string,
  color: PropTypes.oneOf(Object.values(COLOR)),
  radius: PropTypes.oneOf(Object.values(RADIUS)),
  shadow: PropTypes.oneOf(Object.values(SHADOW)),
  items: PropTypes.array.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Comment.defaultProps = {
  color: COLOR.PRIMARY,
  radius: RADIUS.NORMAL,
  shadow: SHADOW.SMALL,
  className: '',
};

export { Comment };
