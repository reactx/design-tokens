import React from 'react';
import { Button, buttonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    id: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    type: {
      control: 'inline-radio',
      table: {
        category: 'Attribute',
      },
    },
    title: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    disabled: {
      table: {
        category: 'Attribute',
      },
    },
    children: {
      table: {
        category: 'Custom Attribute',
      },
    },
    loading: {
      table: {
        category: 'Custom Attribute',
      },
    },
    className: {
      table: {
        category: 'Custom Attribute',
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
    size: {
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
    outline: {
      table: {
        category: 'Style',
      },
    },
    onClick: {
      table: {
        category: 'Action',
      },
    },
  },
};

export const Basic = (args: buttonProps) => <Button {...args} />;
Basic.args = { children: 'Button Text' };
export const ButtonGroup = (args: buttonProps) => (
  <div className="reactx-btn-group">
    <Button {...args}>
      1
    </Button>
    <Button {...args}>
      2
    </Button>
    <Button {...args}>
      3
    </Button>
  </div>
);
