import React from 'react';
import { icons } from '../shared/FluentIcons';
import { FluentIcon, fluentIconProps } from './FluentIcon';

export default {
  title: 'Components/Fluent Icon',
  component: FluentIcon,
  argTypes: {
    id: {
      table: {
        category: 'Attribute',
      },
    },
    title: {
      table: {
        category: 'Attribute',
      },
    },
    icon: {
      table: {
        category: 'Attribute',
      },
    },
    className: {
      table: {
        category: 'Attribute',
      },
    },
    disabled: {
      table: {
        category: 'Attribute',
      },
    },
    style: {
      table: {
        category: 'Style',
      },
    },
    color: {
      control: 'color',
      table: {
        category: 'Style',
      },
    },
    iconSize: {
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
    shadowOnHover: {
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

export const Basic = (args: fluentIconProps) => <FluentIcon {...args} />;
Basic.args = { icon: '12PointStar' };

export const All = (args: fluentIconProps) => (
  <>
    <div>There are {icons.length} icons</div>
    {icons.map((key) => (
      <div className="p-1 icon-preview">
        <i
          className={'icon-size-extra-large reactx-icon nf-icon-' + key}
          key={key}
          title={key}
        />
        <span>{key}</span>
      </div>
    ))}
  </>
);
