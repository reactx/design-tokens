import React from 'react';
import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
};

export const Basic = (args) => <Card {...args} />;
export const AllColor = () => (
  <>
    <Card color="primary" />
    <Card color="success" />
    <Card color="danger" />
    <Card color="warning" />
    <Card color="info" />
    <Card color="dark" />
    <Card color="light" />
  </>
);
export const AllColorOutline = () => (
  <>
    <Card color="primary" outline={true} />
    <Card color="success" outline={true} />
    <Card color="danger" outline={true} />
    <Card color="warning" outline={true} />
    <Card color="info" outline={true} />
    <Card color="dark" outline={true} />
    <Card color="light" outline={true} />
  </>
);
