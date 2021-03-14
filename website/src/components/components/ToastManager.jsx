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
  const [toastList, SetToastList] = useState(props.items ? props.items : []);

  const addItem = (item) => {
    let list = [...toastList];
    list.push(item);
    SetToastList(list);
  };

  const parentProps = { ...props };
  delete parentProps.type;
  cleanProps(parentProps);

  return (
    <div className={'Reactx-toast-container' + (' toast-' + props.position)}>
      {toastList.map((item, index) => (
        <Toast {...item} />
      ))}
    </div>
  );
};

const ToastManager = React.forwardRef((props) => (
  <ToastManagerComponent {...props} />
));

ToastManager.propTypes = {
  addToast: PropTypes.func,
  toastShowCount: PropTypes.number,
  position: PropTypes.oneOf(Object.values(POSITION)),
  doNotDisturb: PropTypes.bool,
  items: PropTypes.array,
};

ToastManager.defaultProps = {
  position: POSITION.TOP_RIGHT,
  toastShowCount: 10,
};

export { ToastManager };
