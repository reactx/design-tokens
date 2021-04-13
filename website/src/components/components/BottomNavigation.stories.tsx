import React from 'react';
import { BottomNavigation, bottomNavigationProps } from './BottomNavigation';

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
        category: 'Custom Attribute',
      },
    },
    default: {
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
    label: {
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

export const Basic = (args: bottomNavigationProps) => <BottomNavigation {...args} />;
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
  onClick: (val: string) => console.log(val + ' selected'),
};
