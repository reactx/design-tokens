import React from 'react';
import { BottomNavigation } from './BottomNavigation';

export default {
  title: 'Components/Bottom Navigation',
  component: BottomNavigation,
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
    default: {
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

export const Basic = (args) => <BottomNavigation {...args} />;
Basic.args = {
  items: [
    {
      id: 1,
      title: 'Item 1',
      icon: 'AutoRacing',
    },
    {
      id: 2,
      title: 'Item 2',
      icon: 'Cloudy',
    },
    {
      id: 3,
      title: 'Item 3',
      icon: 'Calories',
    },
    {
      id: 4,
      title: 'Item 4',
      icon: 'Camera',
    },
    {
      id: 5,
      title: 'Item 5',
      icon: 'CoffeeScript',
    },
  ],
  default: 3,
  onClick: (val) => console.log(val + ' selected'),
};
