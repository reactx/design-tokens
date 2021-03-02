import React from 'react';
import { Row } from './Row';
import { Column } from './Column';

export default {
  title: 'Grid System/Row',
  component: Row,
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

export const Basic = (args) => <Row {...args} />;
Basic.args = {
  children: (
    <>
      <Column size="auto">Auto</Column>
      <Column size="auto">Auto</Column>
      <Column size="12">col-12</Column>
      <Column size="3">Col-3</Column>
    </>
  ),
};
