import React from 'react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Basic = (args) => <Button {...args} />;
// Basic.args = { pseudo: { hover: true } };
export const AllColor = () => (
  <>
    <Button color="primary" />
    <Button color="success" />
    <Button color="danger" />
    <Button color="warning" />
    <Button color="info" />
    <Button color="dark" />
    <Button color="light" />
  </>
);
export const AllColorOutline = () => (
  <>
    <Button color="primary" outline={true} />
    <Button color="success" outline={true} />
    <Button color="danger" outline={true} />
    <Button color="warning" outline={true} />
    <Button color="info" outline={true} />
    <Button color="dark" outline={true} />
    <Button color="light" outline={true} />
  </>
);
