import React from 'react';
import { FloatAction, floatActionProps, floatActionItems } from './FloatAction';

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
        category: 'Custom Attribute',
      },
    },
    subChildren: {
      table: {
        category: 'Custom Attribute',
      },
    },
    className: {
      table: {
        category: 'Custom Attribute',
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

export const Basic = (args: floatActionProps) => <FloatAction {...args} />;
Basic.args = {
  children: <i className="reactx-icon nf-icon-Add" />,
  subChildren: [
    {
      data: <i className="reactx-icon nf-icon-AddFriend" />,
      props: { id: 1, className: 'reactx-bg-primary' },
    },
    {
      data: <i className="reactx-icon nf-icon-AddField" />,
      props: { id: 2, className: 'reactx-bg-success' },
    },
    {
      data: <i className="reactx-icon nf-icon-AddHome" />,
      props: { id: 3, className: 'reactx-bg-danger' },
    },
  ],
  onClick: (item: floatActionItems) => alert(item.props.id),
};
