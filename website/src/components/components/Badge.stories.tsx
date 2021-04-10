import React from 'react';
import { Badge } from './Badge';
import { Button } from './Button';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    id: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    children: {
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
    outline: {
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
  },
};

export const Basic = (args) => <Badge {...args} />;
Basic.args = { children: 'reactx' };
export const WithButton = (args) => (
  <Button>
    <span>Notification</span>
    <Badge {...args} />
  </Button>
);
WithButton.args = { children: '1', color: 'primary' };
