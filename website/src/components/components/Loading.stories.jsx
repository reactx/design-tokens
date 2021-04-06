import React from 'react';
import { Loading } from './Loading';

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
        category: 'Attribute',
      },
    },
    enabled: {
      table: {
        category: 'Attribute',
      },
    },
    text: {
      table: {
        category: 'Attribute',
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

export const Basic = (args) => <Loading {...args} />;
Basic.args = { enabled: true };
