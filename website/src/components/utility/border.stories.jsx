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
        { class: 'reactx-b-0', properties: 'border: 0px solid #E5E7EB' },
        { class: 'reactx-b-1', properties: 'border: 1px solid #E5E7EB' },
        { class: 'reactx-b-2', properties: 'border: 2px solid #E5E7EB' },
        { class: 'reactx-b-3', properties: 'border: 3px solid #E5E7EB' },
        { class: 'reactx-b-4', properties: 'border: 4px solid #E5E7EB' },
        { class: 'reactx-b-5', properties: 'border: 5px solid #E5E7EB' },
        { class: 'reactx-bt-0', properties: 'border-top: 0px solid #E5E7EB' },
        { class: 'reactx-bt-1', properties: 'border-top: 1px solid #E5E7EB' },
        { class: 'reactx-bt-2', properties: 'border-top: 2px solid #E5E7EB' },
        { class: 'reactx-bt-3', properties: 'border-top: 3px solid #E5E7EB' },
        { class: 'reactx-bt-4', properties: 'border-top: 4px solid #E5E7EB' },
        { class: 'reactx-bt-5', properties: 'border-top: 5px solid #E5E7EB' },
        { class: 'reactx-bl-0', properties: 'border-left: 0px solid #E5E7EB' },
        { class: 'reactx-bl-1', properties: 'border-left: 1px solid #E5E7EB' },
        { class: 'reactx-bl-2', properties: 'border-left: 2px solid #E5E7EB' },
        { class: 'reactx-bl-3', properties: 'border-left: 3px solid #E5E7EB' },
        { class: 'reactx-bl-4', properties: 'border-left: 4px solid #E5E7EB' },
        { class: 'reactx-bl-5', properties: 'border-left: 5px solid #E5E7EB' },
        {
          class: 'reactx-bb-0',
          properties: 'border-bottom: 0px solid #E5E7EB',
        },
        {
          class: 'reactx-bb-1',
          properties: 'border-bottom: 1px solid #E5E7EB',
        },
        {
          class: 'reactx-bb-2',
          properties: 'border-bottom: 2px solid #E5E7EB',
        },
        {
          class: 'reactx-bb-3',
          properties: 'border-bottom: 3px solid #E5E7EB',
        },
        {
          class: 'reactx-bb-4',
          properties: 'border-bottom: 4px solid #E5E7EB',
        },
        {
          class: 'reactx-bb-5',
          properties: 'border-bottom: 5px solid #E5E7EB',
        },
        {
          class: 'reactx-br-0',
          properties: 'border-right: 0px solid #E5E7EB',
        },
        {
          class: 'reactx-br-1',
          properties: 'border-right: 1px solid #E5E7EB',
        },
        {
          class: 'reactx-br-2',
          properties: 'border-right: 2px solid #E5E7EB',
        },
        {
          class: 'reactx-br-3',
          properties: 'border-right: 3px solid #E5E7EB',
        },
        {
          class: 'reactx-br-4',
          properties: 'border-right: 4px solid #E5E7EB',
        },
        {
          class: 'reactx-br-5',
          properties: 'border-right: 5px solid #E5E7EB',
        },

        {
          class: 'border-primary',
          properties: 'border-color: var(--reactx-primary)',
        },
        {
          class: 'border-danger',
          properties: 'border-color: var(--reactx-danger)',
        },
        {
          class: 'border-info',
          properties: 'border-color: var(--reactx-info)',
        },
        {
          class: 'border-success',
          properties: 'border-color: var(--reactx-success)',
        },
        {
          class: 'border-dark',
          properties: 'border-color: var(--reactx-dark)',
        },
        {
          class: 'border-light',
          properties: 'border-color: var(--reactx-light)',
        },
        {
          class: 'border-warning',
          properties: 'border-color: var(--reactx-warning)',
        },
        {
          class: 'border-secondary',
          properties: 'border-color: var(--reactx-secondary)',
        },

        {
          class: 'reactx-bx-0',
          properties:
            'border-left: 0px solid #E5E7EB;border-right: 0px solid #E5E7EB',
        },
        {
          class: 'reactx-bx-1',
          properties:
            'border-left: 1px solid #E5E7EB;border-right: 1px solid #E5E7EB',
        },
        {
          class: 'reactx-bx-2',
          properties:
            'border-left: 2px solid #E5E7EB;border-right: 2px solid #E5E7EB',
        },
        {
          class: 'reactx-bx-3',
          properties:
            'border-left: 3px solid #E5E7EB;border-right: 3px solid #E5E7EB',
        },
        {
          class: 'reactx-bx-4',
          properties:
            'border-left: 4px solid #E5E7EB;border-right: 4px solid #E5E7EB',
        },
        {
          class: 'reactx-bx-5',
          properties:
            'border-left: 5px solid #E5E7EB;border-right: 5px solid #E5E7EB',
        },

        {
          class: 'reactx-by-0',
          properties:
            'border-top: 0px solid #E5E7EB;border-bottom: 0px solid #E5E7EB',
        },
        {
          class: 'reactx-by-1',
          properties:
            'border-top: 1px solid #E5E7EB;border-bottom: 1px solid #E5E7EB',
        },
        {
          class: 'reactx-by-2',
          properties:
            'border-top: 2px solid #E5E7EB;border-bottom: 2px solid #E5E7EB',
        },
        {
          class: 'reactx-by-3',
          properties:
            'border-top: 3px solid #E5E7EB;border-bottom: 3px solid #E5E7EB',
        },
        {
          class: 'reactx-by-4',
          properties:
            'border-top: 4px solid #E5E7EB;border-bottom: 4px solid #E5E7EB',
        },
        {
          class: 'reactx-by-5',
          properties:
            'border-top: 5px solid #E5E7EB;border-bottom: 5px solid #E5E7EB',
        },
      ]}
    />

    <h3>Example:</h3>
    <div className="reactx-row reactx-border-section">
      <div className="reactx-bg-light reactx-column col-auto reactx-b-5 border-danger reactx-p-1">
        reactx-b-5
        <br />
        border-danger
      </div>
      <div className="reactx-bg-light reactx-column col-auto border-primary reactx-bt-1 reactx-p-1">
        reactx-bt-1
        <br />
        border-primary
      </div>
      <div className="reactx-bg-light reactx-column col-auto reactx-bb-3 reactx-p-1">
        reactx-bb-3
      </div>
      <div className="reactx-bg-light reactx-column col-auto reactx-by-2 border-warning reactx-p-1">
        reactx-by-2
        <br />
        border-warning
      </div>
    </div>
  </>
);
