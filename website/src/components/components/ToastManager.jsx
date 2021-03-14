import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { cleanProps, generateClass } from '../../utils';
import { Toast } from './Toast';

const POSITION = {
  TOP_RIGHT: 'top-right',
  TOP_CENTER: 'top-center',
  TOP_LEFT: 'top-left',
  BOTTOM_RIGHT: 'bottom-right',
  BOTTOM_CENTER: 'bottom-center',
  BOTTOM_LEFT: 'bottom-left',
};

const ToastManagerComponent = (props) => {
  const [toastList, SetToastList] = useState([]);

  useEffect(() => {
    if (!props.items || props.items.length === 0) return;
    let start = props.items.length - props.toastShowCount;
    let temp = [...props.items].slice(
      start > 0 ? start : 0,
      props.items.length,
    );
    SetToastList(temp);
  }, [props.items, props.toastShowCount]);

  const parentProps = { ...props };
  delete parentProps.type;
  cleanProps(parentProps);

  return (
    <div className={'reactx-toast-container' + (' toast-' + props.position)}>
      {!props.doNotDisturb &&
        toastList.map((item, index) => <Toast {...item} key={index} />)}
    </div>
  );
};

const ToastManager = React.forwardRef((props) => (
  <ToastManagerComponent {...props} />
));

ToastManager.propTypes = {
  position: PropTypes.oneOf(Object.values(POSITION)),
  toastShowCount: PropTypes.number,
  doNotDisturb: PropTypes.bool,
  items: PropTypes.array,
};

ToastManager.defaultProps = {
  position: POSITION.TOP_RIGHT,
  toastShowCount: 3,
};

export { ToastManager };
