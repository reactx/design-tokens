import React, { FC } from 'react';
import { generateClass } from '../../utils';
import { Loading } from './Loading';

const LOADING_SIZE = {
  tiny: 'tiny',
  small: 'tiny',
  medium: 'small',
  large: 'medium',
  extra: 'large',
  undefined: "small"
};

export type avatarProps = {
  id?: string,
  size?: "tiny" | "small" | "medium" | "large" | "extra",
  color?: "primary" | "success" | "danger" | "warning" | "info" | "dark" | "light" | "normal",
  radius?: "none" | "small" | "normal" | "curve" | "pill",
  shadow?: "none" | "small" | "medium" | "large",
  outline?: boolean,
  username: string,
  src?: string,
  title?: string,
  disabled?: boolean,
  letterCount: number,
  loading?: boolean,
  className?: string,
  onClick?: () => void,
};

const AvatarComponent = (props: avatarProps) => {
  return (
    <div id={props.id} title={props.title || props.username} className={generateClass(props, 'avatar')}
      onClick={() => props.onClick && props.onClick()}>
      {props.src ? (
        <img src={props.src} alt={props.username} />
      ) : (
        <span className="reactx-avatar-letter">
          {props.username
            .substring(0, props.letterCount)
            .trim()
            .replace(/^\w/, (c) => c.toUpperCase())}
        </span>
      )}
      {props.loading && (
        <Loading
          enabled={props.loading}
          color={props.color}
          size={LOADING_SIZE[props.size]}
        />
      )}
    </div>
  );
};

const Avatar: FC<avatarProps> = React.forwardRef((props) => <AvatarComponent {...props} />);
Avatar.defaultProps = {
  color: "normal",
  radius: "normal",
  size: "medium",
  shadow: "none",
  letterCount: 1,
};
export { Avatar };
