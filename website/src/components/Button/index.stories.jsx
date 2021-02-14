import React from 'react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Primary = () => <Button color="primary">Button Text</Button>;
// Primary.args = { pseudo: { hover: true } };
export const Success = () => <Button color="success">Button Text</Button>;
export const Warning = () => <Button color="warning">Button Text</Button>;
export const Danger = () => <Button color="danger">Button Text</Button>;
export const Info = () => <Button color="info">Button Text</Button>;
export const Dark = () => <Button color="dark">Button Text</Button>;
export const Light = () => <Button color="light">Button Text</Button>;
