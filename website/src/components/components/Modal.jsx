import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { cleanProps } from '../../utils';
import { FluentIcon } from './FluentIcon';

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
        (props.backdrop && props.show ? ' modal-backdrop' : '')
      }
    >
      <div
        {...parentProps}
        className={
          (props.show ? 'modal-wrapper-active ' : '') +
          'modal-wrapper ' +
          (props.className || '') +
          ('modal-' + props.modalType) +
          (props.color ? ' nirvana-modal-' + props.color : '') +
          (props.radius !== RADIUS.NORMAL ? ' radius-' + props.radius : '') +
          (props.shadow !== SHADOW.MEDIUM ? ' shadow-' + props.shadow : '')
        }
        ref={modalRef}
      >
        {props.header && (
          <div className="modal-header">
            <div className="modal-title">{props.header}</div>
            {props.closeBtn && (
              <div className="modal-btn">
                <button
                  className="close-btn"
                  aria-label="close"
                  onClick={() => {
                    props.closeAction;
                  }}
                >
                  <FluentIcon
                    icon="CalculatorMultiply"
                    color="#fff"
                    iconSize="tiny"
                    className="nirvana-p-0"
                  />
                </button>
              </div>
            )}
          </div>
        )}
        <div className="modal-body">{props.children}</div>
        {props.footer && <div className="modal-footer">{props.footer}</div>}
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
  closeAction: PropTypes.func,
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
