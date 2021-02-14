import React from 'react';
import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
};
export const Default = () => (
  <Card header={<>Header</>} footer={<>Footer</>}>
    Card Text
  </Card>
);
export const Primary = () => (
  <Card header={<>Header</>} footer={<>Footer</>} color="primary">
    Card Text
  </Card>
);
export const Success = () => <Card color="success">Card Text</Card>;
export const Warning = () => <Card color="warning">Card Text</Card>;
export const Danger = () => <Card color="danger">Card Text</Card>;
export const Info = () => <Card color="info">Card Text</Card>;
export const Dark = () => <Card color="dark">Card Text</Card>;
export const Light = () => <Card color="light">Card Text</Card>;
