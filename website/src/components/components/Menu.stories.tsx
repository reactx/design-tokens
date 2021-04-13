import React from 'react';
import { Menu, menuProps } from './Menu';

export default {
  title: 'Components/Menu',
  component: Menu,
  argTypes: {
    id: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    className: {
      control: 'text',
      table: {
        category: 'Custom Attribute',
      },
    },
    items: {
      table: {
        category: 'Custom Attribute',
      },
    },
    icon: {
      table: {
        category: 'Custom Attribute',
      },
    },
    shortcutKey: {
      table: {
        category: 'Custom Attribute',
      },
    },
    rtl: {
      table: {
        category: 'Style',
      },
    },
    color: {
      control: 'color',
      table: {
        category: 'Style',
      },
    },
    background: {
      control: 'color',
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
  },
};

export const Basic = (args: menuProps) => <Menu {...args} />;
Basic.args = {
  items: [
    {
      id: 0,
      text: 'Menu Item 1',
      hasDevider: false,
      icon: 'nf-icon-Send',
      shortcut: '',
      data: { item: 'item 1' },
      children: [],
    },
    {
      id: 1,
      text: 'Menu Item 2',
      hasDevider: true,
      icon: 'nf-icon-CloudDownload',
      shortcut: 'F2',
      data: { item: 'item 2' },
      children: [],
    },
    {
      id: 2,
      text: 'Menu Item 3',
      hasDevider: false,
      icon: 'nf-icon-Delete',
      shortcut: 'Del',
      data: { item: 'item 3' },
      children: [
        {
          id: 0,
          text: 'Sub Item 1',
          hasDevider: false,
          icon: 'nf-icon-Delete',
          shortcut: '',
          data: { item: 'sub-item 1' },
          children: [],
        },
        {
          id: 1,
          text: 'Sub Item 2',
          hasDevider: false,
          icon: 'nf-icon-Delete',
          shortcut: '',
          data: { item: 'sub-item 2' },
          children: [],
        },
      ],
    },
  ],
};
