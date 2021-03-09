import React from 'react';
import { Accordion } from './Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
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
  },
};

export const Basic = (args) => <Accordion {...args} />;
Basic.args = {
  items: [
    { id: 1, head: 'Accordion 1 Title', children: 'Accordion 1 Message' },
    { id: 2, head: 'Accordion 2 Title', children: 'Accordion 2 Message' },
    { id: 3, head: 'Accordion 3 Title', children: 'Accordion 3 Message' },
  ],
  default: 1,
};
