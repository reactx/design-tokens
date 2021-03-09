import React from 'react';
import { TimeLine } from './TimeLine';

export default {
  title: 'Components/TimeLine',
  component: TimeLine,
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
    className: {
      table: {
        category: 'Attribute',
      },
    },
  },
};

export const Basic = (args) => <TimeLine {...args} />;
Basic.args = {
  items: [
    {
      title: 'TimeLine 1',
      description: 'TimeLine Default Message 1',
      date: '1399',
    },
    {
      title: 'TimeLine 2',
      description: 'TimeLine Default Message 2',
      date: '1398',
    },
  ],
};
