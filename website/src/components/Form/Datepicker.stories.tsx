import React from 'react';
import { Datepicker, datepickerProps } from './Datepicker';
export default {
  title: 'Form/Datepicker',
  component: Datepicker,
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
        category: 'Attribute',
      },
    },
    mode: {
      control: 'inline-radio',
      table: {
        category: 'Attribute',
      },
    },
    placeholder: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    isGregorian: {
      table: {
        category: 'Attribute',
      },
    },
    timePicker: {
      table: {
        category: 'Attribute',
      },
    },
    persianDigits: {
      table: {
        category: 'Attribute',
      },
    },
    showTodayButton: {
      table: {
        category: 'Attribute',
      },
    },
    showToggleButton: {
      table: {
        category: 'Attribute',
      },
    },
    disabled: {
      table: {
        category: 'Attribute',
      },
    },
    inputFormat: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    inputJalaaliFormat: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    minDate: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    maxDate: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    onChange: {
      table: {
        category: 'Action',
      },
    },
  },
};

export const Basic = (args: datepickerProps) => <Datepicker {...args} />;
