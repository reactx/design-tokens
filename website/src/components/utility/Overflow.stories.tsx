import React from 'react';
import { Table } from '../components/Table';

export default {
  title: 'Utility/Overflow',
};

export const Basic = () => (
  <Table
    header={['class', 'properties']}
    body={[
      { class: 'overflow-hidden', properties: 'overflow:hidden' },
      { class: 'overflow-auto', properties: 'overflow:auto' },
      { class: 'overflow-scroll', properties: 'overflow:scroll' },
      { class: 'overflow-visible', properties: 'overflow:visible' },
      { class: 'overflow-overlay', properties: 'overflow:overlay' },
      { class: 'overflow-unset', properties: 'overflow:unset' },
    ]}
  />
);
