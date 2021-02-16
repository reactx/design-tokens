import React from 'react';
import PropTypes from 'prop-types';
import '../../sass/fluentIcon.scss';
import { cleanProps } from '../../utils';

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA: 'extra',
};

const FluentIconComponent = (props) => {
  const parentProps = { ...props };
  parentProps.style = { color: props.color };
  cleanProps(parentProps);

  return (
    <span {...parentProps} className={'nirvana-fluent-icon-warper'}>
      <i
        className={
          'icon-size-' +
          props.iconSize +
          ' nirvana-fluent-icon nf-icon-' +
          props.icon
        }
      />
      {parentProps.title && (
        <span className="nirvana-icon-title">{parentProps.title}</span>
      )}
    </span>
  );
};

const FluentIcon = React.forwardRef((props) => (
  <FluentIconComponent {...props} />
));

FluentIcon.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  iconSize: PropTypes.oneOf(Object.values(SIZE)),
};

FluentIcon.defaultProps = {
  iconSize: SIZE.MEDIUM,
};

export { FluentIcon };
