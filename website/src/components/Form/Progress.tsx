import React from 'react';
import { InferProps } from 'prop-types';
import { cleanProps, generateClass } from '../../utils';

export interface IProgressComp  {
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

const ProgressComponent = (props: InferProps<IProgressComp>) => {
  const parentProps = { ...props };
  cleanProps(parentProps);
  const calcPosition = () => {
    let one = props.max / 100;
    let result = Math.ceil(props.value / one);
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

const Progress = React.forwardRef((props: IProgressComp) => <ProgressComponent {...props} />);

Progress.defaultProps = {
  radius: 'normal',
  color: 'primary',
  size: 'medium',
  shadow: 'none',
  className: '',
  max: 100,
};

export { Progress };
