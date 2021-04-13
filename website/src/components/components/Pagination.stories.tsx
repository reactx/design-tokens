import React from 'react';
import { Pagination, paginationProps } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    id: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    disabled: {
      table: {
        category: 'Custom Attribute',
      },
    },
    items: {
      table: {
        category: 'Custom Attribute',
      },
    },
    className: {
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
    changePagePosition: {
      table: {
        category: 'Action',
      },
    },
  },
};

export const Basic = (args: paginationProps) => <Pagination {...args} />;
Basic.args = { items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] };
