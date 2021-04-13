import React from 'react';
import { Comment, commentProps, commentItems } from './Comment';

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
    shadow: {
      control: 'inline-radio',
      table: {
        category: 'Style',
      },
    },
    like: {
      table: {
        category: 'action',
      },
    },
    replay: {
      table: {
        category: 'action',
      },
    },
  },
};

export const Basic = (args: commentProps) => <Comment {...args} />;
Basic.args = {
  items: [
    {
      id: '1',
      avatar: '',
      username: 'reactx',
      comment: 'comment 1',
      date: '1399',
      liked: true,
      likeCount: 10,
      dislikeCount: 1,
    },
  ],
  like: (item: commentItems, action: string) => alert(item.id + ' is ' + action),
  replay: (item: commentItems) => alert(item.id),
};

export const WithReplay = (args: commentProps) => <Comment {...args} />;
WithReplay.args = {
  items: [
    {
      id: '1',
      avatar: '',
      username: 'reactx',
      comment: 'comment 1',
      date: '1399',
      liked: true,
      likeCount: 10,
      dislikeCount: 1,
    },
    {
      id: '2',
      avatar: '',
      username: 'microsoft',
      comment: 'comment 2',
      date: '1399',
      disliked: true,
      likeCount: 1,
      dislikeCount: 11,
      isReplayed: true,
      replayLock: true,
    },
  ],
  like: (item: commentItems, action: string) => alert(item.id + ' is ' + action),
  replay: (item: commentItems) => alert(item.id),
};
