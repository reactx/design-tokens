import React from 'react';
import { ToggleButton, toggleButtonProps } from './ToggleButton';

export default {
  title: 'Components/Toggle Button',
  component: ToggleButton,
  argTypes: {
    id: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    children: {
      table: {
        category: 'Attribute',
      },
    },
    toggleChildren: {
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
    disabled: {
      table: {
        category: 'Attribute',
      },
    },
    className: {
      table: {
        category: 'Attribute',
      },
    },
    toggle: {
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
    outline: {
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

export const Basic = (args: toggleButtonProps) => <ToggleButton {...args} />;
Basic.args = {
  children: 'ToggleBtn',
  toggleChildren: 'ToggleBtn Checked',
};
export const Compare = (args: toggleButtonProps) => (
  <>
    <div className="mb-1">
      <ToggleButton
        {...args}
        toggleChildren={'ToggleBtn Checked'}
        color="danger"
      >
        ToggleBtn
      </ToggleButton>
      <ToggleButton
        {...args}
        toggleChildren={'ToggleBtn Checked'}
        color="danger"
        toggle={true}
      >
        ToggleBtn
      </ToggleButton>
    </div>
    <div className="mb-1">
      <ToggleButton
        {...args}
        toggleChildren={'ToggleBtn Checked'}
        color="primary"
      >
        ToggleBtn
      </ToggleButton>
      <ToggleButton
        {...args}
        toggleChildren={'ToggleBtn Checked'}
        color="primary"
        toggle={true}
      >
        ToggleBtn
      </ToggleButton>
    </div>
    <div className="mb-1">
      <ToggleButton
        {...args}
        toggleChildren={'ToggleBtn Checked'}
        color="warning"
      >
        ToggleBtn
      </ToggleButton>
      <ToggleButton
        {...args}
        toggleChildren={'ToggleBtn Checked'}
        color="warning"
        toggle={true}
      >
        ToggleBtn
      </ToggleButton>
    </div>
    <div className="mb-1">
      <ToggleButton
        {...args}
        toggleChildren={'ToggleBtn Checked'}
        color="success"
      >
        ToggleBtn
      </ToggleButton>
      <ToggleButton
        {...args}
        toggleChildren={'ToggleBtn Checked'}
        color="success"
        toggle={true}
      >
        ToggleBtn
      </ToggleButton>
    </div>
  </>
);
