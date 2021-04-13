import React from 'react';
import { AnalogClock, analogClockProps } from './AnalogClock';

export default {
  title: 'Widgets/Analog Clock',
  component: AnalogClock,
  argTypes: {
    id: {
      control: 'text',
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
    className: {
      table: {
        category: 'Attribute',
      },
    },
    theme: {
      control: 'inline-radio',
      table: {
        category: 'Style',
      },
    },
    onClick: {
      table: {
        category: 'Action',
      },
    },
  },
};

export const Basic = (args: analogClockProps) => <AnalogClock {...args} />;
