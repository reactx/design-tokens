import React from 'react';
import { CheckBox, checkBoxProps} from './CheckBox';

export default {
  title: 'Form/CheckBox',
  component: CheckBox,
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
        category: 'Custom Attribute',
      },
    },
    size: {
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
    onClick: {
      table: {
        category: 'Action',
      },
    },
  },
};

export const Basic = (args: checkBoxProps) => <CheckBox {...args} />;
Basic.args = { label: 'Checkbox Text', onChange: (val: boolean) => console.log(val) };
