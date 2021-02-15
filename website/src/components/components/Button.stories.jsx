import React from 'react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Basic = (args) => <Button {...args} />;
// Basic.args = { pseudo: { hover: true } };
