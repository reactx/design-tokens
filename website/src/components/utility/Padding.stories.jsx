import React from 'react';
import { Table } from '../components/Table';

export default {
  title: 'Utility/Padding',
};

export const Basic = () => (
  <>
    <Table
      header={['class', 'properties']}
      body={[
        { class: 'nirvana-p-0', properties: 'padding: 0em' },
        { class: 'nirvana-p-1', properties: 'padding: 1em' },
        { class: 'nirvana-p-2', properties: 'padding: 2em' },
        { class: 'nirvana-p-3', properties: 'padding: 3em' },
        { class: 'nirvana-p-4', properties: 'padding: 4em' },
        { class: 'nirvana-p-5', properties: 'padding: 5em' },
        { class: 'nirvana-pt-0', properties: 'padding-top: 0em' },
        { class: 'nirvana-pt-1', properties: 'padding-top: 1em' },
        { class: 'nirvana-pt-2', properties: 'padding-top: 2em' },
        { class: 'nirvana-pt-3', properties: 'padding-top: 3em' },
        { class: 'nirvana-pt-4', properties: 'padding-top: 4em' },
        { class: 'nirvana-pt-5', properties: 'padding-top: 5em' },
        { class: 'nirvana-pb-0', properties: 'padding-bottom: 0em' },
        { class: 'nirvana-pb-1', properties: 'padding-bottom: 1em' },
        { class: 'nirvana-pb-2', properties: 'padding-bottom: 2em' },
        { class: 'nirvana-pb-3', properties: 'padding-bottom: 3em' },
        { class: 'nirvana-pb-4', properties: 'padding-bottom: 4em' },
        { class: 'nirvana-pb-5', properties: 'padding-bottom: 5em' },
        { class: 'nirvana-pr-0', properties: 'padding-right: 0em' },
        { class: 'nirvana-pr-1', properties: 'padding-right: 1em' },
        { class: 'nirvana-pr-2', properties: 'padding-right: 2em' },
        { class: 'nirvana-pr-3', properties: 'padding-right: 3em' },
        { class: 'nirvana-pr-4', properties: 'padding-right: 4em' },
        { class: 'nirvana-pr-5', properties: 'padding-right: 5em' },
        { class: 'nirvana-pl-0', properties: 'padding-left: 0em' },
        { class: 'nirvana-pl-1', properties: 'padding-left: 1em' },
        { class: 'nirvana-pl-2', properties: 'padding-left: 2em' },
        { class: 'nirvana-pl-3', properties: 'padding-left: 3em' },
        { class: 'nirvana-pl-4', properties: 'padding-left: 4em' },
        { class: 'nirvana-pl-5', properties: 'padding-left: 5em' },
      ]}
    />

    <h3>Example:</h3>
    <div className="nirvana-bg-primary display-block nirvana-p-0 nirvana-mb-1">
      nirvana-p-0
    </div>
    <div className="nirvana-bg-primary display-block nirvana-p-1 nirvana-mb-1">
      nirvana-p-1
    </div>
    <div className="nirvana-bg-primary display-block nirvana-p-2 nirvana-mb-1">
      nirvana-p-2
    </div>
    <div className="nirvana-bg-primary display-block nirvana-p-3 nirvana-mb-1">
      nirvana-p-3
    </div>
    <div className="nirvana-bg-primary display-block nirvana-p-4 nirvana-mb-1">
      nirvana-p-4
    </div>
    <div className="nirvana-bg-primary display-block nirvana-p-5 nirvana-mb-1">
      nirvana-p-5
    </div>
  </>
);
