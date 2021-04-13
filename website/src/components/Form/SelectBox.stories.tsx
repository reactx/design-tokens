import React from 'react';
import { SelectBox, selectBoxProps } from './SelectBox';

export default {
  title: 'Form/SelectBox',
  component: SelectBox,
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
    disabled: {
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
    defaultText: {
      table: {
        category: 'Attribute',
      },
    },
    multiple: {
      table: {
        category: 'Attribute',
      },
    },
    title: {
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

export const Basic = (args: selectBoxProps) => <SelectBox {...args} />;
Basic.args = {
  items: [
    { name: 'item 1', value: '1' },
    { name: 'item 2', value: '2' },
    { name: 'item 3', value: '3' },
    { name: 'item 4', value: '4' },
  ],
};
