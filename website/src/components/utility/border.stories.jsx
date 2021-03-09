import React from 'react';
import { Table } from '../components/Table';

export default {
  title: 'Utility/Border',
};

export const Basic = () => (
  <>
    <Table
      header={['class', 'properties']}
      body={[
        { class: 'nirvana-b-0', properties: 'border: 0px solid #E5E7EB' },
        { class: 'nirvana-b-1', properties: 'border: 1px solid #E5E7EB' },
        { class: 'nirvana-b-2', properties: 'border: 2px solid #E5E7EB' },
        { class: 'nirvana-b-3', properties: 'border: 3px solid #E5E7EB' },
        { class: 'nirvana-b-4', properties: 'border: 4px solid #E5E7EB' },
        { class: 'nirvana-b-5', properties: 'border: 5px solid #E5E7EB' },
        { class: 'nirvana-bt-0', properties: 'border-top: 0px solid #E5E7EB' },
        { class: 'nirvana-bt-1', properties: 'border-top: 1px solid #E5E7EB' },
        { class: 'nirvana-bt-2', properties: 'border-top: 2px solid #E5E7EB' },
        { class: 'nirvana-bt-3', properties: 'border-top: 3px solid #E5E7EB' },
        { class: 'nirvana-bt-4', properties: 'border-top: 4px solid #E5E7EB' },
        { class: 'nirvana-bt-5', properties: 'border-top: 5px solid #E5E7EB' },
        { class: 'nirvana-bl-0', properties: 'border-left: 0px solid #E5E7EB' },
        { class: 'nirvana-bl-1', properties: 'border-left: 1px solid #E5E7EB' },
        { class: 'nirvana-bl-2', properties: 'border-left: 2px solid #E5E7EB' },
        { class: 'nirvana-bl-3', properties: 'border-left: 3px solid #E5E7EB' },
        { class: 'nirvana-bl-4', properties: 'border-left: 4px solid #E5E7EB' },
        { class: 'nirvana-bl-5', properties: 'border-left: 5px solid #E5E7EB' },
        {
          class: 'nirvana-bb-0',
          properties: 'border-bottom: 0px solid #E5E7EB',
        },
        {
          class: 'nirvana-bb-1',
          properties: 'border-bottom: 1px solid #E5E7EB',
        },
        {
          class: 'nirvana-bb-2',
          properties: 'border-bottom: 2px solid #E5E7EB',
        },
        {
          class: 'nirvana-bb-3',
          properties: 'border-bottom: 3px solid #E5E7EB',
        },
        {
          class: 'nirvana-bb-4',
          properties: 'border-bottom: 4px solid #E5E7EB',
        },
        {
          class: 'nirvana-bb-5',
          properties: 'border-bottom: 5px solid #E5E7EB',
        },
        {
          class: 'nirvana-br-0',
          properties: 'border-right: 0px solid #E5E7EB',
        },
        {
          class: 'nirvana-br-1',
          properties: 'border-right: 1px solid #E5E7EB',
        },
        {
          class: 'nirvana-br-2',
          properties: 'border-right: 2px solid #E5E7EB',
        },
        {
          class: 'nirvana-br-3',
          properties: 'border-right: 3px solid #E5E7EB',
        },
        {
          class: 'nirvana-br-4',
          properties: 'border-right: 4px solid #E5E7EB',
        },
        {
          class: 'nirvana-br-5',
          properties: 'border-right: 5px solid #E5E7EB',
        },

        {
          class: 'border-primary',
          properties: 'border-color: var(--nirvana-primary)',
        },
        {
          class: 'border-danger',
          properties: 'border-color: var(--nirvana-danger)',
        },
        {
          class: 'border-info',
          properties: 'border-color: var(--nirvana-info)',
        },
        {
          class: 'border-success',
          properties: 'border-color: var(--nirvana-success)',
        },
        {
          class: 'border-dark',
          properties: 'border-color: var(--nirvana-dark)',
        },
        {
          class: 'border-light',
          properties: 'border-color: var(--nirvana-light)',
        },
        {
          class: 'border-warning',
          properties: 'border-color: var(--nirvana-warning)',
        },
        {
          class: 'border-secondary',
          properties: 'border-color: var(--nirvana-secondary)',
        },

        {
          class: 'nirvana-bx-0',
          properties:
            'border-left: 0px solid #E5E7EB;border-right: 0px solid #E5E7EB',
        },
        {
          class: 'nirvana-bx-1',
          properties:
            'border-left: 1px solid #E5E7EB;border-right: 1px solid #E5E7EB',
        },
        {
          class: 'nirvana-bx-2',
          properties:
            'border-left: 2px solid #E5E7EB;border-right: 2px solid #E5E7EB',
        },
        {
          class: 'nirvana-bx-3',
          properties:
            'border-left: 3px solid #E5E7EB;border-right: 3px solid #E5E7EB',
        },
        {
          class: 'nirvana-bx-4',
          properties:
            'border-left: 4px solid #E5E7EB;border-right: 4px solid #E5E7EB',
        },
        {
          class: 'nirvana-bx-5',
          properties:
            'border-left: 5px solid #E5E7EB;border-right: 5px solid #E5E7EB',
        },

        {
          class: 'nirvana-by-0',
          properties:
            'border-top: 0px solid #E5E7EB;border-bottom: 0px solid #E5E7EB',
        },
        {
          class: 'nirvana-by-1',
          properties:
            'border-top: 1px solid #E5E7EB;border-bottom: 1px solid #E5E7EB',
        },
        {
          class: 'nirvana-by-2',
          properties:
            'border-top: 2px solid #E5E7EB;border-bottom: 2px solid #E5E7EB',
        },
        {
          class: 'nirvana-by-3',
          properties:
            'border-top: 3px solid #E5E7EB;border-bottom: 3px solid #E5E7EB',
        },
        {
          class: 'nirvana-by-4',
          properties:
            'border-top: 4px solid #E5E7EB;border-bottom: 4px solid #E5E7EB',
        },
        {
          class: 'nirvana-by-5',
          properties:
            'border-top: 5px solid #E5E7EB;border-bottom: 5px solid #E5E7EB',
        },
      ]}
    />

    <h3>Example:</h3>
    <div className="nirvana-row nirvana-border-section">
      <div className="nirvana-bg-light nirvana-column col-auto nirvana-b-5 border-danger nirvana-p-1">
        nirvana-b-5
        <br />
        border-danger
      </div>
      <div className="nirvana-bg-light nirvana-column col-auto border-primary nirvana-bt-1 nirvana-p-1">
        nirvana-bt-1
        <br />
        border-primary
      </div>
      <div className="nirvana-bg-light nirvana-column col-auto nirvana-bb-3 nirvana-p-1">
        nirvana-bb-3
      </div>
      <div className="nirvana-bg-light nirvana-column col-auto nirvana-by-2 border-warning nirvana-p-1">
        nirvana-by-2
        <br />
        border-warning
      </div>
    </div>
  </>
);
