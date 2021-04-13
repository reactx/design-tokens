import React, { FC } from 'react';
import { cleanProps, generateClass } from '../../utils';

export type progressProps = {
  id?: string,
  showLabel?: boolean,
  striped?: boolean,
  animation?: boolean,
  radius?: 'none' | 'small' | 'normal' | 'curve' | 'pill',
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'extra',
  shadow?: 'none' | 'small' | 'medium' | 'large',
  color?: 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light',
  value?: number,
  max?: number,
  title?: string,
  className?: string,
};

const ProgressComponent = (props: progressProps) => {
  const parentProps = { ...props };
  cleanProps(parentProps);
  const calcPosition = () => {
    let one = props.max ? props.max / 100 : 0;
    let result = props.value ? Math.ceil(props.value / one) : 0;
    return result + '%';
  };

  return (
    <div {...parentProps} className={generateClass(props, 'progress')}>
      <div
        className={
          'progress-bar' +
          (props.striped ? ' striped' : '') +
          (props.animation ? ' animation' : '')
        }
        style={{ width: calcPosition() }}
      ></div>
      {props.showLabel && (
        <span className="progress-label">{calcPosition()}</span>
      )}
    </div>
  );
};

const Progress: FC<progressProps> = React.forwardRef((props) => <ProgressComponent {...props} />);

Progress.defaultProps = {
  radius: 'normal',
  color: 'primary',
  size: 'medium',
  shadow: 'none',
  max: 100,
};

export { Progress };
