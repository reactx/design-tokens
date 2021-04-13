import React from 'react';
import { Card, cardProps } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
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
    header: {
      table: {
        category: 'Attribute',
      },
    },
    footer: {
      table: {
        category: 'Attribute',
      },
    },
    cardTitle: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    disabled: {
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
    outline: {
      table: {
        category: 'Style',
      },
    },
  },
};

export const Basic = (args: cardProps) => <Card {...args} />;
Basic.args = {
  children: 'card Default Message',
  header: 'header',
  footer: 'footer',
};
