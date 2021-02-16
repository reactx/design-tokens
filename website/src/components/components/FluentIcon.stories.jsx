import React from 'react';
import { icons } from '../shared/FluentIcons';
import { FluentIcon } from './FluentIcon';

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
  },
};

export const Basic = (args) => <FluentIcon {...args} />;
Basic.args = { icon: '12PointStar' };

export const All = (args) => (
  <>
    <div>There are {icons.length} icons</div>
    {icons.map((key) => (
      <FluentIcon {...args} icon={key} key={key} title={key} />
    ))}
  </>
);
