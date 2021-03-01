import React from 'react';
import { Column } from './Column';

export default {
  title: 'Grid System/Column',
  component: Column,
  argTypes: {
    id: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    children: {
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

export const Basic = (args) => <Column {...args} />;
