import React from 'react';
import { Toast } from './Toast';

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
        category: 'Attribute',
      },
    },
    children: {
      table: {
        category: 'Attribute',
      },
    },
    showDuration: {
      table: {
        category: 'Attribute',
      },
    },
    useDefaultIcon: {
      table: {
        category: 'Attribute',
      },
    },
    progressBar: {
      table: {
        category: 'Attribute',
      },
    },
    outline: {
      table: {
        category: 'Attribute',
      },
    },
    className: {
      table: {
        category: 'Attribute',
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

export const SnackBar = (args) => <Toast {...args} />;
SnackBar.args = { children: 'SnackBar Message' };
export const WithHeader = (args) => <Toast {...args} />;
WithHeader.args = { children: 'Toast Message', header: 'Toast Title' };
