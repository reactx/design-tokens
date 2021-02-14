import React from 'react';
import { Alert } from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
};

export const Default = (args) => <Alert {...args}>Alert Text</Alert>;
