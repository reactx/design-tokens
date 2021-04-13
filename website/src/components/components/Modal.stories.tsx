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
    backdropClose: {
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
