import React, { FC } from 'react';
import { cleanProps, generateClass } from '../../utils';

export type infoCardProps = {
  id?: string,
  radius?: "none" | "small" | "normal" | "curve" | "pill",
  shadow?: "none" | "small" | "medium" | "large",
  color?: "primary" | "success" | "danger" | "warning" | "info" | "dark" | "light" | "normal",
  number: React.ReactNode | string,
  description: React.ReactNode | string,
  outline?: boolean,
  inline?: boolean,
  className?: string,
  onClick?: () => void,
};

const InfoCardComponent = (props: infoCardProps) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div
      {...parentProps}
      className={
        generateClass(props, 'info-card') +
        (props.inline ? ' info-card-inline' : '')
      }
    >
      <span className="info-card-number">{props.number}</span>
      <p className="info-card-description">{props.description}</p>
    </div>
  );
};

const InfoCard: FC<infoCardProps> = React.forwardRef((props) => <InfoCardComponent {...props} />);
InfoCard.defaultProps = {
  color: "normal",
  radius: "normal",
  shadow: "none",
};
export { InfoCard };
