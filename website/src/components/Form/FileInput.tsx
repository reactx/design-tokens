import React, { FC }  from 'react';
import { cleanProps, generateClass } from '../../utils';

export type fileInputProps = {
  id?: string,
  radius?: 'none' | 'small' | 'normal' | 'curve' | 'pill',
  size?: 'small' | 'medium' | 'large' | 'extra',
  shadow?: 'none' | 'small' | 'medium' | 'large',
  validationStates?: 'none' |
  'valid' |
  'invalid',
  format?: '*' |
  'png|jpg|gif|jpeg|bmp' |
  'docx|doc|xlsx|pdf|xls|ppt|pptx|rtf|txt|csv' |
  'zip|rar|7zip|apk' |
  'mp3|wav|wma' |
  'mp4|mkv|wmv|avi' |
  'ico',
  title?: string,
  label?: string,
  disabled?: boolean,
  multiple?: boolean,
  required?: boolean,
  autoFocus?: boolean,
  className?: boolean,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,

};

const FileInputComponent = (props: fileInputProps) => {
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

const FileInput: FC<fileInputProps> = React.forwardRef((props) => (
  <FileInputComponent {...props} />
));


FileInput.defaultProps = {
  radius: 'normal',
  size: 'medium',
  shadow: 'none',
  validationStates: 'none',
  format: '*',
};

export { FileInput };
