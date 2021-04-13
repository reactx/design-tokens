import React from 'react';
import { Navbar, navbarProps } from './Navbar';

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
        category: 'Custom Attribute',
      },
    },
    middle: {
      table: {
        category: 'Custom Attribute',
      },
    },
    menu: {
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
  },
};

export const Basic = (args: navbarProps) => <Navbar {...args} />;
Basic.args = { brand: 'reactx', menu: <span>items</span> };
