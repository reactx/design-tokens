import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { cleanProps } from '../../utils';

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

const TYPE = {
  FULL: 'full',
  LEFT: 'left',
  RIGHT: 'right',
};

const ModalComponent = (props) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!props.show) return;
    if (!props.backdropClose) return;
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        props.closeAction(!props.show);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef]);

  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div
      className={
        'nirvana-modal-container' +
        (props.backdrop && props.show ? ' nirvana-modal-backdrop' : '')
      }
    >
      <div
        {...parentProps}
        className={
          (props.show ? 'nirvana-modal-wrapper-active ' : '') +
          'nirvana-modal-wrapper ' +
          (props.className || '') +
          ('modal-' + props.modalType) +
          (props.color ? ' nirvana-modal-' + props.color : '') +
          (props.radius !== RADIUS.NORMAL ? ' radius-' + props.radius : '') +
          (props.shadow !== SHADOW.MEDIUM ? ' shadow-' + props.shadow : '')
        }
        ref={modalRef}
      >
        {props.header && (
          <div className="nirvana-modal-header">
            <div className="nirvana-modal-title">{props.header}</div>
            {props.closeBtn && (
              <div className="nirvana-modal-btn">
                <button
                  className="nirvana-close-btn"
                  aria-label="close"
                  // onClick={() => {
                  //   props.closeAction(!props.show);
                  // }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        )}
        <div className="nirvana-modal-body">{props.children}</div>
        {props.footer && (
          <div className="nirvana-modal-footer">{props.footer}</div>
        )}
      </div>
    </div>
  );
};

const Modal = React.forwardRef((props) => <ModalComponent {...props} />);

Modal.propTypes = {
  id: PropTypes.string,
  color: PropTypes.oneOf(Object.values(COLOR)),
  radius: PropTypes.oneOf(Object.values(RADIUS)),
  shadow: PropTypes.oneOf(Object.values(SHADOW)),
  modalType: PropTypes.oneOf(Object.values(TYPE)),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  header: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  footer: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  closeBtn: PropTypes.bool,
  backdrop: PropTypes.bool,
  show: PropTypes.bool,
  className: PropTypes.string,
};

Modal.defaultProps = {
  modalType: TYPE.FULL,
  color: COLOR.LIGHT,
  radius: RADIUS.NORMAL,
  shadow: SHADOW.MEDIUM,
  show: true,
  backdrop: false,
  closeBtn: false,
};

export { Modal };
