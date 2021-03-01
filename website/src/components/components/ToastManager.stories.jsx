import React from 'react';
import { ToastManager } from './ToastManager';

export default {
  title: 'Components/Toast Manager',
  component: ToastManager,
  argTypes: {
    items: {
      table: {
        category: 'Attribute',
      },
    },
    toastShowCount: {
      control: 'number',
      table: {
        category: 'Attribute',
      },
    },
    position: {
      control: 'inline-radio',
      table: {
        category: 'Attribute',
      },
    },
    doNotDisturb: {
      table: {
        category: 'Attribute',
      },
    },
    // radius: {
    //   control: 'inline-radio',
    //   table: {
    //     category: 'Style',
    //   },
    // },
    addToast: {
      table: {
        category: 'Action',
      },
    },
  },
};

export const Basic = (args) => <ToastManager {...args} />;
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
  ],
};
