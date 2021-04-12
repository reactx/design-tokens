import React from 'react';
import { Switch, ISwitchComp } from './Switch';

export default {
  title: 'Form/Switch',
  component: Switch,
  argTypes: {
    id: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    checked: {
      table: {
        category: 'Attribute',
      },
    },
    label: {
      table: {
        category: 'Attribute',
      },
    },
    title: {
      table: {
        category: 'Attribute',
      },
    },
    disabled: {
      table: {
        category: 'Attribute',
      },
    },
    autoFocus: {
      table: {
        category: 'Attribute',
      },
    },
    className: {
      table: {
        category: 'Attribute',
      },
    },
    size: {
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
    radius: {
      control: 'inline-radio',
      table: {
        category: 'Style',
      },
    },
    onChange: {
      table: {
        category: 'Action',
      },
    },
  },
};

export const Basic = (args: ISwitchComp) => <Switch {...args} />;
Basic.args = { label: 'switch Text' };
