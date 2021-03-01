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
    size: {
      table: {
        category: 'Attribute',
      },
    },
    sizeMd: {
      table: {
        category: 'Attribute',
      },
    },
    sizeLg: {
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
Basic.args = { children: 'col-12' };
export const MultiCol = (args) => (
  <>
    <Column {...args} size="4">
      col-4
    </Column>
    <Column {...args} size="4">
      col-4
    </Column>
    <Column {...args} size="4">
      col-4
    </Column>
  </>
);
