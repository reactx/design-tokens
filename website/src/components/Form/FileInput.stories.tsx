import React from 'react';
import { FileInput, fileInputProps } from './FileInput';

export default {
  title: 'Form/File Input',
  component: FileInput,
  argTypes: {
    id: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    format: {
      control: 'inline-radio',
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
    multiple: {
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
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    label: {
      table: {
        category: 'Custom Attribute',
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

export const Basic = (args: fileInputProps) => <FileInput {...args} />;
Basic.args = { label: 'File Input' };
