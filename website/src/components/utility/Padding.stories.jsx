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
        { class: 'reactx-p-0', properties: 'padding: 0em' },
        { class: 'reactx-p-1', properties: 'padding: 1em' },
        { class: 'reactx-p-2', properties: 'padding: 2em' },
        { class: 'reactx-p-3', properties: 'padding: 3em' },
        { class: 'reactx-p-4', properties: 'padding: 4em' },
        { class: 'reactx-p-5', properties: 'padding: 5em' },
        { class: 'reactx-pt-0', properties: 'padding-top: 0em' },
        { class: 'reactx-pt-1', properties: 'padding-top: 1em' },
        { class: 'reactx-pt-2', properties: 'padding-top: 2em' },
        { class: 'reactx-pt-3', properties: 'padding-top: 3em' },
        { class: 'reactx-pt-4', properties: 'padding-top: 4em' },
        { class: 'reactx-pt-5', properties: 'padding-top: 5em' },
        { class: 'reactx-pb-0', properties: 'padding-bottom: 0em' },
        { class: 'reactx-pb-1', properties: 'padding-bottom: 1em' },
        { class: 'reactx-pb-2', properties: 'padding-bottom: 2em' },
        { class: 'reactx-pb-3', properties: 'padding-bottom: 3em' },
        { class: 'reactx-pb-4', properties: 'padding-bottom: 4em' },
        { class: 'reactx-pb-5', properties: 'padding-bottom: 5em' },
        { class: 'reactx-pr-0', properties: 'padding-right: 0em' },
        { class: 'reactx-pr-1', properties: 'padding-right: 1em' },
        { class: 'reactx-pr-2', properties: 'padding-right: 2em' },
        { class: 'reactx-pr-3', properties: 'padding-right: 3em' },
        { class: 'reactx-pr-4', properties: 'padding-right: 4em' },
        { class: 'reactx-pr-5', properties: 'padding-right: 5em' },
        { class: 'reactx-pl-0', properties: 'padding-left: 0em' },
        { class: 'reactx-pl-1', properties: 'padding-left: 1em' },
        { class: 'reactx-pl-2', properties: 'padding-left: 2em' },
        { class: 'reactx-pl-3', properties: 'padding-left: 3em' },
        { class: 'reactx-pl-4', properties: 'padding-left: 4em' },
        { class: 'reactx-pl-5', properties: 'padding-left: 5em' },
        { class: 'reactx-px-0', properties: 'padding:0 0em' },
        { class: 'reactx-px-1', properties: 'padding:0 1em' },
        { class: 'reactx-px-2', properties: 'padding:0 2em' },
        { class: 'reactx-px-3', properties: 'padding:0 3em' },
        { class: 'reactx-px-4', properties: 'padding:0 4em' },
        { class: 'reactx-px-5', properties: 'padding:0 5em' },
        { class: 'reactx-py-0', properties: 'padding: 0em 0' },
        { class: 'reactx-py-1', properties: 'padding: 1em 0' },
        { class: 'reactx-py-2', properties: 'padding: 2em 0' },
        { class: 'reactx-py-3', properties: 'padding: 3em 0' },
        { class: 'reactx-py-4', properties: 'padding: 4em 0' },
        { class: 'reactx-py-5', properties: 'padding: 5em 0' },
      ]}
    />

    <h3>Example:</h3>
    <div className="reactx-bg-primary display-block reactx-p-0 reactx-mb-1">
      reactx-p-0
    </div>
    <div className="reactx-bg-primary display-block reactx-p-1 reactx-mb-1">
      reactx-p-1
    </div>
    <div className="reactx-bg-primary display-block reactx-p-2 reactx-mb-1">
      reactx-p-2
    </div>
    <div className="reactx-bg-primary display-block reactx-p-3 reactx-mb-1">
      reactx-p-3
    </div>
    <div className="reactx-bg-primary display-block reactx-p-4 reactx-mb-1">
      reactx-p-4
    </div>
    <div className="reactx-bg-primary display-block reactx-p-5 reactx-mb-1">
      reactx-p-5
    </div>
  </>
);
