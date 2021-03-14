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
        { class: 'Reactx-b-0', properties: 'border: 0px solid #E5E7EB' },
        { class: 'Reactx-b-1', properties: 'border: 1px solid #E5E7EB' },
        { class: 'Reactx-b-2', properties: 'border: 2px solid #E5E7EB' },
        { class: 'Reactx-b-3', properties: 'border: 3px solid #E5E7EB' },
        { class: 'Reactx-b-4', properties: 'border: 4px solid #E5E7EB' },
        { class: 'Reactx-b-5', properties: 'border: 5px solid #E5E7EB' },
        { class: 'Reactx-bt-0', properties: 'border-top: 0px solid #E5E7EB' },
        { class: 'Reactx-bt-1', properties: 'border-top: 1px solid #E5E7EB' },
        { class: 'Reactx-bt-2', properties: 'border-top: 2px solid #E5E7EB' },
        { class: 'Reactx-bt-3', properties: 'border-top: 3px solid #E5E7EB' },
        { class: 'Reactx-bt-4', properties: 'border-top: 4px solid #E5E7EB' },
        { class: 'Reactx-bt-5', properties: 'border-top: 5px solid #E5E7EB' },
        { class: 'Reactx-bl-0', properties: 'border-left: 0px solid #E5E7EB' },
        { class: 'Reactx-bl-1', properties: 'border-left: 1px solid #E5E7EB' },
        { class: 'Reactx-bl-2', properties: 'border-left: 2px solid #E5E7EB' },
        { class: 'Reactx-bl-3', properties: 'border-left: 3px solid #E5E7EB' },
        { class: 'Reactx-bl-4', properties: 'border-left: 4px solid #E5E7EB' },
        { class: 'Reactx-bl-5', properties: 'border-left: 5px solid #E5E7EB' },
        {
          class: 'Reactx-bb-0',
          properties: 'border-bottom: 0px solid #E5E7EB',
        },
        {
          class: 'Reactx-bb-1',
          properties: 'border-bottom: 1px solid #E5E7EB',
        },
        {
          class: 'Reactx-bb-2',
          properties: 'border-bottom: 2px solid #E5E7EB',
        },
        {
          class: 'Reactx-bb-3',
          properties: 'border-bottom: 3px solid #E5E7EB',
        },
        {
          class: 'Reactx-bb-4',
          properties: 'border-bottom: 4px solid #E5E7EB',
        },
        {
          class: 'Reactx-bb-5',
          properties: 'border-bottom: 5px solid #E5E7EB',
        },
        {
          class: 'Reactx-br-0',
          properties: 'border-right: 0px solid #E5E7EB',
        },
        {
          class: 'Reactx-br-1',
          properties: 'border-right: 1px solid #E5E7EB',
        },
        {
          class: 'Reactx-br-2',
          properties: 'border-right: 2px solid #E5E7EB',
        },
        {
          class: 'Reactx-br-3',
          properties: 'border-right: 3px solid #E5E7EB',
        },
        {
          class: 'Reactx-br-4',
          properties: 'border-right: 4px solid #E5E7EB',
        },
        {
          class: 'Reactx-br-5',
          properties: 'border-right: 5px solid #E5E7EB',
        },

        {
          class: 'border-primary',
          properties: 'border-color: var(--Reactx-primary)',
        },
        {
          class: 'border-danger',
          properties: 'border-color: var(--Reactx-danger)',
        },
        {
          class: 'border-info',
          properties: 'border-color: var(--Reactx-info)',
        },
        {
          class: 'border-success',
          properties: 'border-color: var(--Reactx-success)',
        },
        {
          class: 'border-dark',
          properties: 'border-color: var(--Reactx-dark)',
        },
        {
          class: 'border-light',
          properties: 'border-color: var(--Reactx-light)',
        },
        {
          class: 'border-warning',
          properties: 'border-color: var(--Reactx-warning)',
        },
        {
          class: 'border-secondary',
          properties: 'border-color: var(--Reactx-secondary)',
        },

        {
          class: 'Reactx-bx-0',
          properties:
            'border-left: 0px solid #E5E7EB;border-right: 0px solid #E5E7EB',
        },
        {
          class: 'Reactx-bx-1',
          properties:
            'border-left: 1px solid #E5E7EB;border-right: 1px solid #E5E7EB',
        },
        {
          class: 'Reactx-bx-2',
          properties:
            'border-left: 2px solid #E5E7EB;border-right: 2px solid #E5E7EB',
        },
        {
          class: 'Reactx-bx-3',
          properties:
            'border-left: 3px solid #E5E7EB;border-right: 3px solid #E5E7EB',
        },
        {
          class: 'Reactx-bx-4',
          properties:
            'border-left: 4px solid #E5E7EB;border-right: 4px solid #E5E7EB',
        },
        {
          class: 'Reactx-bx-5',
          properties:
            'border-left: 5px solid #E5E7EB;border-right: 5px solid #E5E7EB',
        },

        {
          class: 'Reactx-by-0',
          properties:
            'border-top: 0px solid #E5E7EB;border-bottom: 0px solid #E5E7EB',
        },
        {
          class: 'Reactx-by-1',
          properties:
            'border-top: 1px solid #E5E7EB;border-bottom: 1px solid #E5E7EB',
        },
        {
          class: 'Reactx-by-2',
          properties:
            'border-top: 2px solid #E5E7EB;border-bottom: 2px solid #E5E7EB',
        },
        {
          class: 'Reactx-by-3',
          properties:
            'border-top: 3px solid #E5E7EB;border-bottom: 3px solid #E5E7EB',
        },
        {
          class: 'Reactx-by-4',
          properties:
            'border-top: 4px solid #E5E7EB;border-bottom: 4px solid #E5E7EB',
        },
        {
          class: 'Reactx-by-5',
          properties:
            'border-top: 5px solid #E5E7EB;border-bottom: 5px solid #E5E7EB',
        },
      ]}
    />

    <h3>Example:</h3>
    <div className="Reactx-row Reactx-border-section">
      <div className="Reactx-bg-light Reactx-column col-auto Reactx-b-5 border-danger Reactx-p-1">
        Reactx-b-5
        <br />
        border-danger
      </div>
      <div className="Reactx-bg-light Reactx-column col-auto border-primary Reactx-bt-1 Reactx-p-1">
        Reactx-bt-1
        <br />
        border-primary
      </div>
      <div className="Reactx-bg-light Reactx-column col-auto Reactx-bb-3 Reactx-p-1">
        Reactx-bb-3
      </div>
      <div className="Reactx-bg-light Reactx-column col-auto Reactx-by-2 border-warning Reactx-p-1">
        Reactx-by-2
        <br />
        border-warning
      </div>
    </div>
  </>
);
