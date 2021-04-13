import React from 'react';
import { Table, tableProps } from './Table';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    id: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    header: {
      table: {
        category: 'Custom Attribute',
      },
    },
    body: {
      table: {
        category: 'Custom Attribute',
      },
    },
    footer: {
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
  },
};

export const Basic = (args: tableProps) => <Table {...args} />;
Basic.args = {
  header: ['class', 'properties'],
  body: [
    { class: 'p-0', properties: 'padding:0em' },
    { class: 'p-1', properties: 'padding:1em' },
  ],
};
