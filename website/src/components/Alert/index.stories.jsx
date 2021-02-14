import React from 'react';
import { Alert } from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
};

export const Primary = () => <Alert color="primary">Alert Text</Alert>;
export const Success = () => <Alert color="success">Alert Text</Alert>;
export const Warning = () => <Alert color="warning">Alert Text</Alert>;
export const Danger = () => <Alert color="danger">Alert Text</Alert>;
export const Info = () => <Alert color="info">Alert Text</Alert>;
export const Dark = () => <Alert color="dark">Alert Text</Alert>;
export const Light = () => <Alert color="light">Alert Text</Alert>;
