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
export const Success = () => (
  <Card header={<>Header</>} footer={<>Footer</>} color="success">
    Card Text
  </Card>
);
export const Warning = () => (
  <Card header={<>Header</>} footer={<>Footer</>} color="warning">
    Card Text
  </Card>
);
export const Danger = () => (
  <Card header={<>Header</>} footer={<>Footer</>} color="danger">
    Card Text
  </Card>
);
export const Info = () => (
  <Card header={<>Header</>} footer={<>Footer</>} color="info">
    Card Text
  </Card>
);
export const Dark = () => (
  <Card header={<>Header</>} footer={<>Footer</>} color="dark">
    Card Text
  </Card>
);
export const Light = () => (
  <Card header={<>Header</>} footer={<>Footer</>} color="light">
    Card Text
  </Card>
);
