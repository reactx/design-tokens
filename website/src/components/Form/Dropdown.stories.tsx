import React from 'react';
import { Dropdown, IDropdownComp } from './Dropdown';

export default {
  title: 'Form/Dropdown',
  component: Dropdown,
  argTypes: {
    id: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    items: {
      table: {
        category: 'Attribute',
      },
    },
    defaultValue: {
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
    readOnly: {
      table: {
        category: 'Attribute',
      },
    },
    required: {
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
    fixIcon: {
      table: {
        category: 'Attribute',
      },
    },
    radius: {
      control: 'inline-radio',
      table: {
        category: 'Style',
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
    validationStates: {
      control: 'inline-radio',
      table: {
        category: 'Validation',
      },
    },
    onChange: {
      table: {
        category: 'Action',
      },
    },
  },
};

export const Basic = (args: IDropdownComp) => <Dropdown {...args} />;
Basic.args = {
  items: [
    { name: 'item 1', value: 'value' },
    { name: 'item 2', value: 'value' },
  ],
};
export const WithFixIcon = (args: IDropdownComp) => <Dropdown {...args} />;
WithFixIcon.args = {
  items: [
    { name: 'item 1', value: 'value' },
    { name: 'item 2', value: 'value' },
  ],
  fixIcon: 'BorderAll',
};
