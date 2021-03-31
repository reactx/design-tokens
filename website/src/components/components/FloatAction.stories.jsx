import React from 'react';
import { FloatAction } from './FloatAction';

export default {
  title: 'Components/Float Action',
  component: FloatAction,
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
    subChildren: {
      table: {
        category: 'Attribute',
      },
    },
    className: {
      table: {
        category: 'Attribute',
      },
    },
    direction: {
      control: 'inline-radio',
      table: {
        category: 'Style',
      },
    },
    float: {
      control: 'inline-radio',
      table: {
        category: 'Style',
      },
    },
    position: {
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

export const Basic = (args) => <FloatAction {...args} />;
Basic.args = {
  children: <i className="reactx-icon nf-icon-Add" />,
  subChildren: [
    { data: <i className="reactx-icon nf-icon-AddFriend" />, props: {} },
    { data: <i className="reactx-icon nf-icon-AddField" />, props: {} },
    { data: <i className="reactx-icon nf-icon-AddHome" />, props: {} },
  ],
};
