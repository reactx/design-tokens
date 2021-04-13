import React from 'react';
import { Toast, toastProps } from './Toast';

export default {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    id: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    header: {
      table: {
        category: 'Custom Attribute',
      },
    },
    children: {
      table: {
        category: 'Custom Attribute',
      },
    },
    showDuration: {
      table: {
        category: 'Custom Attribute',
      },
    },
    useDefaultIcon: {
      table: {
        category: 'Custom Attribute',
      },
    },
    progressBar: {
      table: {
        category: 'Custom Attribute',
      },
    },
    className: {
      table: {
        category: 'Custom Attribute',
      },
    },
    outline: {
      table: {
        category: 'Style',
      },
    },
    color: {
      control: 'inline-radio',
      table: {
        category: 'Style',
      },
    },
    radius: {
      control: 'inline-radio',
      table: {
        category: 'Style',
      },
    },
    shadow: {
      control: 'inline-radio',
      table: {
        category: 'Style',
      },
    },
    onClick: {
      table: {
        category: 'Action',
      },
    },
    closeAction: {
      table: {
        category: 'Action',
      },
    },
  },
};

export const SnackBar = (args: toastProps) => <Toast {...args} />;
SnackBar.args = { children: 'SnackBar Message' };
export const WithHeader = (args: toastProps) => <Toast {...args} />;
WithHeader.args = { children: 'Toast Message', header: 'Toast Title' };
