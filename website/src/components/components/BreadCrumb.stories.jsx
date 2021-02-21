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
    itemColor: {
      control: 'inline-radio',
      table: {
        category: 'Style',
      },
    },
    itemRadius: {
      control: 'inline-radio',
      table: {
        category: 'Style',
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
};
