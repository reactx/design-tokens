import React from 'react';
import { Table } from '../components/Table';

export default {
  title: 'Utility/Display',
};

export const Basic = () => (
  <Table
    header={['class', 'properties']}
    body={[
      { class: 'display-inline', properties: 'display:inline;' },
      { class: 'display-block', properties: 'display:block;' },
      { class: 'display-contents', properties: 'display:contents;' },
      { class: 'display-flex', properties: 'display:flex;' },
      { class: 'display-flow-root', properties: 'display:flow-root;' },
      { class: 'display-grid', properties: 'display:grid;' },
      { class: 'display-inline-block', properties: 'display:inline-block;' },
      { class: 'display-inline-flex', properties: 'display:inline-flex;' },
      { class: 'display-inline-flex', properties: 'display:inline-flex;' },
      { class: 'display-inline-grid', properties: 'display:inline-grid;' },
      { class: 'display-inline-table', properties: 'display:inline-table;' },
      { class: 'display-list-item', properties: 'display:list-item;' },
      { class: 'display-run-in', properties: 'display:run-in;' },
      { class: 'display-table', properties: 'display:table;' },
      { class: 'display-table-cell', properties: 'display:table-cell;' },
      { class: 'display-table-row', properties: 'display:table-row;' },
      { class: 'display-none', properties: 'display:none;' },
    ]}
  />
);
