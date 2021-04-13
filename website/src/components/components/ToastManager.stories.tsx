import React from 'react';
import { ToastManager, toastManagerProps } from './ToastManager';

export default {
  title: 'Components/Toast Manager',
  component: ToastManager,
  argTypes: {
    items: {
      table: {
        category: 'Custom Attribute',
      },
    },
    toastShowCount: {
      control: 'number',
      table: {
        category: 'Custom Attribute',
      },
    },
    position: {
      control: 'inline-radio',
      table: {
        category: 'Custom Attribute',
      },
    },
    doNotDisturb: {
      table: {
        category: 'Custom Attribute',
      },
    },
  },
};

export const Basic = (args: toastManagerProps) => <ToastManager {...args} />;

Basic.args = {
  items: [
    { children: 'SnackBar Message', useDefaultIcon: true, color: 'primary' },
    { children: 'Toast Message', header: 'Toast Header' },
    {
      children: 'Toast Message',
      header: 'Toast Header',
      color: 'danger',
      useDefaultIcon: true,
    },
    {
      children: 'Toast Message',
      color: 'success',
      useDefaultIcon: true,
      outline: true,
    },
  ],
};
