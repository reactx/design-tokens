import React from 'react';
import { Modal, modalProps } from './Modal';

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
        category: 'Custom Attribute',
      },
    },
    children: {
      table: {
        category: 'Custom Attribute',
      },
    },
    footer: {
      table: {
        category: 'Custom Attribute',
      },
    },
    show: {
      table: {
        category: 'Custom Attribute',
      },
    },
    backdrop: {
      table: {
        category: 'Custom Attribute',
      },
    },
    closeBtn: {
      table: {
        category: 'Custom Attribute',
      },
    },
    className: {
      table: {
        category: 'Custom Attribute',
      },
    },
    backdropClose: {
      table: {
        category: 'Custom Attribute',
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
    closeAction: {
      table: {
        category: 'Action',
      },
    },
  },
};

export const Basic = (args: modalProps) => <Modal {...args} />;
Basic.args = { children: 'Modal Default Message' };

export const WithHeaderFooter = (args: modalProps) => <Modal {...args} />;
WithHeaderFooter.args = {
  children: 'Modal Default Message',
  header: 'header',
  footer: 'footer',
};
