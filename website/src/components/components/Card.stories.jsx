import React from 'react';
import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
};

export const Basic = (args) => <Card {...args}>Card Text</Card>;
