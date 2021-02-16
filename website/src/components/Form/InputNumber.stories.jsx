import React from 'react';
import { InputNumber } from './InputNumber';

export default {
  title: 'Form/Input Number',
  component: InputNumber,
  argTypes: {
    id: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    type: {
      control: 'inline-radio',
      table: {
        category: 'Attribute',
      },
    },
    value: {
      table: {
        category: 'Attribute',
      },
    },
    placeholder: {
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
    loading: {
      table: {
        category: 'Attribute',
      },
    },
    className: {
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
    pattern: {
      table: {
        category: 'Validation',
      },
    },
    minLength: {
      table: {
        category: 'Validation',
      },
    },
    maxLength: {
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

export const Basic = (args) => <InputNumber {...args} />;
