import React from 'react';
import PropTypes from 'prop-types';
import { cleanProps, generateClass } from '../../utils';

const SHADOW = {
  NONE: 'none',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const VALIDATION = {
  NONE: 'none',
  VALID: 'valid',
  INVALID: 'invalid',
};

const RADIUS = {
  NONE: 'none',
  SMALL: 'small',
  NORMAL: 'normal',
  CURVE: 'curve',
  PILL: 'pill',
};

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA: 'extra',
};

const FORMAT = {
  ALL: '*',
  PICTURE: 'png|jpg|gif|jpeg|bmp',
  DOCUMENT: 'docx|doc|xlsx|pdf|xls|ppt|pptx|rtf|txt|csv',
  ARCHIVE: 'zip|rar|7zip|apk',
  AUDIO: 'mp3|wav|wma',
  VIDEO: 'mp4|mkv|wmv|avi',
  ICON: 'ico',
};

const FileInputComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div className="reactx-form-control">
      <label htmlFor={props.id} className="control-label">
        {props.label}
        {props.required && <span className="reactx-color-danger">*</span>}
      </label>
      <input
        {...parentProps}
        type="file"
        className={generateClass(props, 'input')}
      />
    </div>
  );
};

const FileInput = React.forwardRef((props) => (
  <FileInputComponent {...props} />
));
FileInput.propTypes = {
  id: PropTypes.string,
  radius: PropTypes.oneOf(Object.values(RADIUS)),
  size: PropTypes.oneOf(Object.values(SIZE)),
  shadow: PropTypes.oneOf(Object.values(SHADOW)),
  validationStates: PropTypes.oneOf(Object.values(VALIDATION)),
  format: PropTypes.oneOf(Object.values(FORMAT)),
  title: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  required: PropTypes.bool,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

FileInput.defaultProps = {
  radius: RADIUS.NORMAL,
  size: SIZE.MEDIUM,
  shadow: SHADOW.NONE,
  validationStates: VALIDATION.NONE,
  format: FORMAT.ALL,
};

export { FileInput };
