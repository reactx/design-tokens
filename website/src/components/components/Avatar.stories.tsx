import React from 'react';
import { Avatar, avatarProps } from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    id: {
      control: 'text',
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
    username: {
      table: {
        category: 'Custom Attribute',
      },
    },
    src: {
      table: {
        category: 'Custom Attribute',
      },
    },
    disabled: {
      table: {
        category: 'Custom Attribute',
      },
    },
    className: {
      table: {
        category: 'Custom Attribute',
      },
    },
    loading: {
      table: {
        category: 'Custom Attribute',
      },
    },
    letterCount: {
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

export const Basic = (args: avatarProps) => <Avatar {...args} />;
Basic.args = { username: 'reactx' };
