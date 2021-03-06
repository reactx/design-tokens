import React from 'react';
import { Table } from '../components/Table';

export default {
  title: 'Utility/Shadow',
};

export const Basic = () => (
  <>
    <Table
      header={['class', 'properties']}
      body={[
        { class: 'shadow-none', properties: 'box-shadow:none' },
        {
          class: 'shadow-small',
          properties:
            '    box-shadow: 0px 1.6px 3.6px rgb(0 0 0 / 13%), 0px 0px 2.9px rgb(0 0 0 / 11%)',
        },
        {
          class: 'shadow-medium',
          properties:
            'box-shadow: 0px 3.2px 7.2px rgb(0 0 0 / 13%), 0px 0px 3.8px rgb(0 0 0 / 11%)',
        },
        {
          class: 'shadow-large',
          properties:
            'box-shadow: 0px 0px 9.2px rgb(0 0 0 / 11%), 0px 12.8px 28.8px rgb(0 0 0 / 13%)',
        },

        { class: 'shadow-on-hover-none', properties: 'box-shadow:none' },
        {
          class: 'shadow-on-hover-small',
          properties:
            '    box-shadow: 0px 1.6px 3.6px rgb(0 0 0 / 13%), 0px 0px 2.9px rgb(0 0 0 / 11%)',
        },
        {
          class: 'shadow-on-hover-medium',
          properties:
            'box-shadow: 0px 3.2px 7.2px rgb(0 0 0 / 13%), 0px 0px 3.8px rgb(0 0 0 / 11%)',
        },
        {
          class: 'shadow-on-hover-large',
          properties:
            'box-shadow: 0px 0px 9.2px rgb(0 0 0 / 11%), 0px 12.8px 28.8px rgb(0 0 0 / 13%)',
        },
      ]}
    />

    <h3>Example:</h3>
    <div className="nirvana-bg-light display-block nirvana-p-1 nirvana-mb-2 shadow-none">
      None
    </div>
    <div className="nirvana-bg-light display-block nirvana-p-1 nirvana-mb-2 shadow-small">
      Small
    </div>
    <div className="nirvana-bg-light display-block nirvana-p-1 nirvana-mb-2 shadow-medium">
      Medium
    </div>
    <div className="nirvana-bg-light display-block nirvana-p-1 nirvana-mb-2 shadow-large">
      Large
    </div>
    <h3 className="nirvana-mb-1">On Hover Example:</h3>
    <div className="nirvana-bg-light display-block nirvana-p-1 nirvana-mb-2 shadow-small shadow-on-hover-none">
      None
    </div>
    <div className="nirvana-bg-light display-block nirvana-p-1 nirvana-mb-2 shadow-on-hover-small">
      Small
    </div>
    <div className="nirvana-bg-light display-block nirvana-p-1 nirvana-mb-2 shadow-on-hover-medium">
      Medium
    </div>
    <div className="nirvana-bg-light display-block nirvana-p-1 nirvana-mb-2 shadow-on-hover-large">
      Large
    </div>
  </>
);
