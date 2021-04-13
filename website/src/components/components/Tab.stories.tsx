import React from 'react';
import { Tab, tabProps } from './Tab';

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
        category: 'Custom Attribute',
      },
    },
    activeTabId: {
      table: {
        category: 'Custom Attribute',
      },
    },
    children: {
      table: {
        category: 'Custom Attribute',
      },
    },
    title: {
      control: 'text',
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
    setActiveTab: {
      table: {
        category: 'Action',
      },
    },
  },
};

export const Basic = (args: tabProps) => <Tab {...args} />;
Basic.args = {
  children: 'Tab data',
  addTabAction: () => alert('add Tab'),
  deleteTabAction: () => alert('delete Tab'),
  tabList: [
    { name: 'item 1 test', tabId: '1' },
    { name: 'item 2 test', tabId: '2' },
  ],
  activeTabId: '1'
};
