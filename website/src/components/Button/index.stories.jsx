import React from 'react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Default = () => <Button color="">Default</Button>;
export const Primary = () => <Button color="primary">Primary</Button>;
export const Success = () => <Button color="success">Success</Button>;
export const Warning = () => <Button color="warning">Warning</Button>;
export const Danger = () => <Button color="danger">Danger</Button>;
export const Info = () => <Button color="info">Info</Button>;
