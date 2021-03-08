import React from 'react';
import { Comment } from './Comment';

export default {
  title: 'Components/Comment',
  component: Comment,
  argTypes: {
    id: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    items: {
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

export const Basic = (args) => <Comment {...args} />;
Basic.args = {
  items: [
    {
      id: '1',
      avatar: '',
      username: 'nirvana',
      comment: 'comment 1',
      date: '1399',
    },
    {
      id: '2',
      avatar: '',
      username: 'microsoft',
      comment: 'comment 2',
      date: '1399',
    },
  ],
};
