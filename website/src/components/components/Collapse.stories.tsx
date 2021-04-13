import React from 'react';
import { Collapse, collapseProps } from './Collapse';

export default {
  title: 'Components/Collapse',
  component: Collapse,
  argTypes: {
    id: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    title: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    head: {
      table: {
        category: 'Custom Attribute',
      },
    },
    children: {
      table: {
        category: 'Custom Attribute',
      },
    },
    disabled: {
      table: {
        category: 'Custom Attribute',
      },
    },
    className: {
      table: {
        category: 'Custom Attribute',
      },
    },
    open: {
      table: {
        category: 'Custom Attribute',
      },
    },
    accordionMode: {
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
    onClick: {
      table: {
        category: 'Action',
      },
    },
  },
};

export const Basic = (args: collapseProps) => <Collapse {...args} />;
Basic.args = {
  head: 'Title',
  children: 'detail data',
};
