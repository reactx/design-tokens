import React from 'react';
import { BreadCrumb } from './BreadCrumb';

export default {
  title: 'Components/BreadCrumb',
  component: BreadCrumb,
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
    icon: {
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
    size: {
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

export const Basic = (args) => <BreadCrumb {...args} />;
Basic.args = {
  items: [
    { title: 'item 1', id: 1, data: 'value' },
    { title: 'item 2', id: 2, data: 'value' },
    { title: 'item 3', id: 3, data: 'value' },
  ],
  onClick: (item) => alert(item.id),
};
