import React from 'react';
import { Column, columnProps } from './Column';

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
        category: 'Custom Attribute',
      },
    },
  },
};

export const Basic = (args: columnProps) => <Column {...args} />;
Basic.args = { children: 'col-12' };
export const MultiCol = () => (
  <>
    <Column size="4">col-4</Column>
    <Column size="4">col-4</Column>
    <Column size="4">col-4</Column>
  </>
);
