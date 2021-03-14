import React from 'react';
import { Navbar } from './Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  argTypes: {
    id: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    brand: {
      table: {
        category: 'Attribute',
      },
    },
    middle: {
      table: {
        category: 'Attribute',
      },
    },
    menu: {
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
    background: {
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

export const Basic = (args) => <Navbar {...args} />;
Basic.args = { brand: 'Reactx', menu: <span>items</span> };
