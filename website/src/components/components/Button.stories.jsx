import React from 'react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Default = (args) => <Button {...args}>Button Text</Button>;
// Default.args = { pseudo: { hover: true } };
