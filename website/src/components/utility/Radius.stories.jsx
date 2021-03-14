import React from 'react';
import { Table } from '../components/Table';

export default {
  title: 'Utility/Radius',
};

export const Basic = () => (
  <>
    <Table
      header={['class', 'properties']}
      body={[
        { class: 'radius-none', properties: 'border-radius:0' },
        { class: 'radius-small', properties: 'border-radius: 2px' },
        { class: 'radius-normal', properties: 'border-radius: 4px' },
        { class: 'radius-curve', properties: 'border-radius: 8px' },
        { class: 'radius-rounded', properties: 'border-radius: 50%' },
        { class: 'radius-pill', properties: 'border-radius: 50rem' },

        {
          class: 'radius-t-none',
          properties: 'border-top-right-radius:0;border-top-left-radius:0',
        },
        {
          class: 'radius-t-small',
          properties: 'border-top-right-radius: 2px;border-top-left-radius:2px',
        },
        {
          class: 'radius-t-normal',
          properties: 'border-top-right-radius: 4px;border-top-left-radius:4px',
        },
        {
          class: 'radius-t-curve',
          properties: 'border-top-right-radius: 8px;border-top-left-radius:8px',
        },
        {
          class: 'radius-t-rounded',
          properties: 'border-top-right-radius: 50%;border-top-left-radius:50%',
        },
        {
          class: 'radius-t-pill',
          properties:
            'border-top-right-radius: 50rem;border-top-left-radius:50rem',
        },

        {
          class: 'radius-b-none',
          properties:
            'border-bottom-right-radius:0;border-bottom-left-radius:0',
        },
        {
          class: 'radius-b-small',
          properties:
            'border-bottom-right-radius: 2px;border-bottom-left-radius:2px',
        },
        {
          class: 'radius-b-normal',
          properties:
            'border-bottom-right-radius: 4px;border-bottom-left-radius:4px',
        },
        {
          class: 'radius-b-curve',
          properties:
            'border-bottom-right-radius: 8px;border-bottom-left-radius:8px',
        },
        {
          class: 'radius-b-rounded',
          properties:
            'border-bottom-right-radius: 50%;border-bottom-left-radius:50%',
        },
        {
          class: 'radius-b-pill',
          properties:
            'border-bottom-right-radius: 50rem;border-bottom-left-radius:50rem',
        },

        { class: 'radius-tr-none', properties: 'border-top-right-radius:0;' },
        {
          class: 'radius-tr-small',
          properties: 'border-top-right-radius: 2px;',
        },
        {
          class: 'radius-tr-normal',
          properties: 'border-top-right-radius: 4px;',
        },
        {
          class: 'radius-tr-curve',
          properties: 'border-top-right-radius: 8px;',
        },
        {
          class: 'radius-tr-rounded',
          properties: 'border-top-right-radius: 50%;',
        },
        {
          class: 'radius-tr-pill',
          properties: 'border-top-right-radius: 50rem;',
        },

        { class: 'radius-tl-none', properties: 'border-top-left-radius:0;' },
        {
          class: 'radius-tl-small',
          properties: 'border-top-left-radius: 2px;',
        },
        {
          class: 'radius-tl-normal',
          properties: 'border-top-left-radius: 4px;',
        },
        {
          class: 'radius-tl-curve',
          properties: 'border-top-left-radius: 8px;',
        },
        {
          class: 'radius-tl-rounded',
          properties: 'border-top-left-radius: 50%;',
        },
        {
          class: 'radius-tl-pill',
          properties: 'border-top-left-radius: 50rem;',
        },

        {
          class: 'radius-br-none',
          properties: 'border-bottom-right-radius:0;',
        },
        {
          class: 'radius-br-small',
          properties: 'border-bottom-right-radius: 2px;',
        },
        {
          class: 'radius-br-normal',
          properties: 'border-bottom-right-radius: 4px;',
        },
        {
          class: 'radius-br-curve',
          properties: 'border-bottom-right-radius: 8px;',
        },
        {
          class: 'radius-br-rounded',
          properties: 'border-bottom-right-radius: 50%;',
        },
        {
          class: 'radius-br-pill',
          properties: 'border-bottom-right-radius: 50rem;',
        },

        { class: 'radius-bl-none', properties: 'border-bottom-left-radius:0;' },
        {
          class: 'radius-bl-small',
          properties: 'border-bottom-left-radius: 2px;',
        },
        {
          class: 'radius-bl-normal',
          properties: 'border-bottom-left-radius: 4px;',
        },
        {
          class: 'radius-bl-curve',
          properties: 'border-bottom-left-radius: 8px;',
        },
        {
          class: 'radius-bl-rounded',
          properties: 'border-bottom-left-radius: 50%;',
        },
        {
          class: 'radius-bl-pill',
          properties: 'border-bottom-left-radius: 50rem;',
        },
      ]}
    />

    <h3>Example:</h3>
    <div className="Reactx-row Reactx-border-section">
      <div className="Reactx-bg-primary Reactx-column col-auto radius-pill">
        pill
      </div>
      <div className="Reactx-bg-success Reactx-column col-auto radius-small">
        small
      </div>
      <div className="Reactx-bg-warning Reactx-column col-auto radius-normal">
        normal
      </div>
      <div className="Reactx-bg-info Reactx-column col-auto radius-curve">
        curve
      </div>
      <div className="Reactx-bg-dark Reactx-column col-auto radius-rounded">
        rounded
      </div>
      <div className="Reactx-bg-danger Reactx-column col-auto radius-none">
        none
      </div>
    </div>
  </>
);
