import React from 'react';
import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
};

export const Default = (args) => <Card {...args}>Card Text</Card>;
