import React from 'react';
import { Modal } from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    id: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    header: {
      table: {
        category: 'Attribute',
      },
    },
    children: {
      table: {
        category: 'Attribute',
      },
    },
    footer: {
      table: {
        category: 'Attribute',
      },
    },
    show: {
      table: {
        category: 'Attribute',
      },
    },
    backdrop: {
      table: {
        category: 'Attribute',
      },
    },
    closeBtn: {
      table: {
        category: 'Attribute',
      },
    },
    className: {
      table: {
        category: 'Attribute',
      },
    },
    modalType: {
      control: 'inline-radio',
      table: {
        category: 'Style',
      },
    },
    color: {
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
    shadow: {
      control: 'inline-radio',
      table: {
        category: 'Style',
      },
    },
  },
};

export const Basic = (args) => <Modal {...args} />;
