import React from 'react';
import { Table } from './Table';

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
        category: 'Attribute',
      },
    },
    body: {
      table: {
        category: 'Attribute',
      },
    },
    footer: {
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

export const Basic = (args) => <Table {...args} />;
Basic.args = {
  header: ['class', 'properties'],
  body: [
    { class: 'p-0', properties: 'padding:0em' },
    { class: 'p-1', properties: 'padding:1em' },
  ],
};
