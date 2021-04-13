import React from 'react';
import { ToolTip, toolTipProps } from './ToolTip';

export default {
  title: 'Components/ToolTip',
  component: ToolTip,
  argTypes: {
    id: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    active: {
      table: {
        category: 'Custom Attribute',
      },
    },
    children: {
      table: {
        category: 'Custom Attribute',
      },
    },
    className: {
      table: {
        category: 'Custom Attribute',
      },
    },
    position: {
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
    size: {
      control: 'inline-radio',
      table: {
        category: 'Style',
      },
    },
  },
};

export const Basic = (args: toolTipProps) => <ToolTip {...args} />;
Basic.args = {
  active: true,
  position: { top: '10px', left: '10px' },
  children: 'Tooltip text',
};
