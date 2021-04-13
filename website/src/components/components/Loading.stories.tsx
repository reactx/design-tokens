import React from 'react';
import { Loading, loadingProps } from './Loading';

export default {
  title: 'Components/Loading',
  component: Loading,
  argTypes: {
    id: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    className: {
      table: {
        category: 'Custom Attribute',
      },
    },
    enabled: {
      table: {
        category: 'Custom Attribute',
      },
    },
    text: {
      table: {
        category: 'Custom Attribute',
      },
    },
    color: {
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
  },
};

export const Basic = (args: loadingProps) => <Loading {...args} />;
Basic.args = { enabled: true };
