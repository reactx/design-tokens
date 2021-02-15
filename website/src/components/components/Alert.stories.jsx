import React from 'react';
import { Alert } from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
};

export const Basic = (args) => <Alert {...args} />;
export const AllColor = () => (
  <>
    <Alert color="primary" />
    <Alert color="success" />
    <Alert color="danger" />
    <Alert color="warning" />
    <Alert color="info" />
    <Alert color="dark" />
    <Alert color="light" />
  </>
);
export const AllColorOutline = () => (
  <>
    <Alert color="primary" outline={true} />
    <Alert color="success" outline={true} />
    <Alert color="danger" outline={true} />
    <Alert color="warning" outline={true} />
    <Alert color="info" outline={true} />
    <Alert color="dark" outline={true} />
    <Alert color="light" outline={true} />
  </>
);
