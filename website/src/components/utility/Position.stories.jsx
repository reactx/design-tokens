import React from 'react';
import { Table } from '../components/Table';

export default {
  title: 'Utility/Position',
};

export const Basic = () => (
  <Table
    header={['class', 'properties']}
    body={[
      { class: 'position-static', properties: 'position:static' },
      { class: 'position-fixed', properties: 'position:fixed' },
      { class: 'position-absolute', properties: 'position:absolute' },
      { class: 'position-relative', properties: 'position:relative' },
      { class: 'position-sticky', properties: 'position:sticky' },
    ]}
  />
);
