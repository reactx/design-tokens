import React from 'react';
import { Tab } from './Tab';

export default {
  title: 'Components/Tab',
  component: Tab,
  argTypes: {
    id: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    tabList: {
      table: {
        category: 'Attribute',
      },
    },
    activeTabId: {
      table: {
        category: 'Attribute',
      },
    },
    children: {
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
    onClick: {
      table: {
        category: 'Action',
      },
    },
    deleteTabAction: {
      table: {
        category: 'Action',
      },
    },
    addTabAction: {
      table: {
        category: 'Action',
      },
    },
  },
};

export const Basic = (args) => <Tab {...args} />;
Basic.args = {
  children: 'Tab data',
  addTabAction: () => alert('add Tab'),
  deleteTabAction: () => alert('delete Tab'),
  tabList: [
    { name: 'item 1 test', tabId: 1 },
    { name: 'item 2 test', tabId: 2 },
  ],
};
