import React from 'react';
import { icons } from '../shared/FluentIcons';
import { FluentIcon } from './FluentIcon';

export default {
  title: 'Components/Fluent Icon',
  component: FluentIcon,
};

export const Basic = (args) => <FluentIcon {...args} />;
Basic.args = { icon: '12PointStar' };

export const All = () => (
  <>
    There are {icons.length} icons
    {icons.map((key) => (
      <FluentIcon icon={key} key={key} aria-hidden />
    ))}
  </>
);
