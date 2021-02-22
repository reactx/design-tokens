import React from 'react';
import { InputText } from './InputText';

export default {
  title: 'Form/Input Text',
  component: InputText,
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
    label: {
      table: {
        category: 'Attribute',
      },
    },
    placeholder: {
      table: {
        category: 'Attribute',
      },
    },
    description: {
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
    formControlStyle: {
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
    validMessage: {
      table: {
        category: 'Validation',
      },
    },
    invalidMessage: {
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

export const Basic = (args) => <InputText {...args} />;
Basic.args = { validMessage: 'is Valid', invalidMessage: 'is Invalid' };
