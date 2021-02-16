import React from 'react';
import PropTypes from 'prop-types';
import { cleanProps } from '../../utils';

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA: 'extra',
  EXTRA_LARGE: 'extra-large',
};

const STYLE = {
  NONE: 'none',
  CARD: 'card',
};

const RADIUS = {
  NONE: 'none',
  SMALL: 'small',
  NORMAL: 'normal',
  CURVE: 'curve',
  ROUNDED: 'rounded',
};

const SHADOW = {
  NONE: 'none',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const FluentIconComponent = (props) => {
  const parentProps = { ...props };
  parentProps.style = { color: props.color };
  cleanProps(parentProps);

  return (
    <span
      {...parentProps}
      className={
        (props.className || '') +
        ' nirvana-icon-warper' +
        (props.radius !== RADIUS.NONE ? ' radius-' + props.radius : '') +
        (props.shadowOnHover !== SHADOW.NONE
          ? ' shadow-on-hover-' + props.shadowOnHover
          : '') +
        (props.shadow !== SHADOW.NONE ? ' shadow-' + props.shadow : '')
      }
    >
      <i
        className={
          'icon-size-' + props.iconSize + ' nirvana-icon nf-icon-' + props.icon
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
  radius: PropTypes.oneOf(Object.values(RADIUS)),
  shadow: PropTypes.oneOf(Object.values(SHADOW)),
  shadowOnHover: PropTypes.oneOf(Object.values(SHADOW)),
  iconSize: PropTypes.oneOf(Object.values(SIZE)),
  className: PropTypes.string,
};

FluentIcon.defaultProps = {
  iconSize: SIZE.MEDIUM,
  radius: RADIUS.NONE,
  shadow: SHADOW.NONE,
  shadowOnHover: SHADOW.NONE,
};

export { FluentIcon };
