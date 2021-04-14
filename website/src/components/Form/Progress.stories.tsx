import React from 'react';
import { Progress, progressProps } from './Progress';

export default {
  title: 'Form/Progress',
  component: Progress,
  argTypes: {
    id: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    showLabel: {
      table: {
        category: 'Custom Attribute',
      },
    },
    value: {
      table: {
        category: 'Attribute',
      },
    },
    max: {
      table: {
        category: 'Attribute',
      },
    },
    title: {
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
    striped: {
      table: {
        category: 'Style',
      },
    },
    animation: {
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
  },
};

export const Basic = (args: progressProps) => <Progress {...args} />;
Basic.args = { value: 50 };
