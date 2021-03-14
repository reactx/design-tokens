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
        { class: 'Reactx-p-0', properties: 'padding: 0em' },
        { class: 'Reactx-p-1', properties: 'padding: 1em' },
        { class: 'Reactx-p-2', properties: 'padding: 2em' },
        { class: 'Reactx-p-3', properties: 'padding: 3em' },
        { class: 'Reactx-p-4', properties: 'padding: 4em' },
        { class: 'Reactx-p-5', properties: 'padding: 5em' },
        { class: 'Reactx-pt-0', properties: 'padding-top: 0em' },
        { class: 'Reactx-pt-1', properties: 'padding-top: 1em' },
        { class: 'Reactx-pt-2', properties: 'padding-top: 2em' },
        { class: 'Reactx-pt-3', properties: 'padding-top: 3em' },
        { class: 'Reactx-pt-4', properties: 'padding-top: 4em' },
        { class: 'Reactx-pt-5', properties: 'padding-top: 5em' },
        { class: 'Reactx-pb-0', properties: 'padding-bottom: 0em' },
        { class: 'Reactx-pb-1', properties: 'padding-bottom: 1em' },
        { class: 'Reactx-pb-2', properties: 'padding-bottom: 2em' },
        { class: 'Reactx-pb-3', properties: 'padding-bottom: 3em' },
        { class: 'Reactx-pb-4', properties: 'padding-bottom: 4em' },
        { class: 'Reactx-pb-5', properties: 'padding-bottom: 5em' },
        { class: 'Reactx-pr-0', properties: 'padding-right: 0em' },
        { class: 'Reactx-pr-1', properties: 'padding-right: 1em' },
        { class: 'Reactx-pr-2', properties: 'padding-right: 2em' },
        { class: 'Reactx-pr-3', properties: 'padding-right: 3em' },
        { class: 'Reactx-pr-4', properties: 'padding-right: 4em' },
        { class: 'Reactx-pr-5', properties: 'padding-right: 5em' },
        { class: 'Reactx-pl-0', properties: 'padding-left: 0em' },
        { class: 'Reactx-pl-1', properties: 'padding-left: 1em' },
        { class: 'Reactx-pl-2', properties: 'padding-left: 2em' },
        { class: 'Reactx-pl-3', properties: 'padding-left: 3em' },
        { class: 'Reactx-pl-4', properties: 'padding-left: 4em' },
        { class: 'Reactx-pl-5', properties: 'padding-left: 5em' },
        { class: 'Reactx-px-0', properties: 'padding:0 0em' },
        { class: 'Reactx-px-1', properties: 'padding:0 1em' },
        { class: 'Reactx-px-2', properties: 'padding:0 2em' },
        { class: 'Reactx-px-3', properties: 'padding:0 3em' },
        { class: 'Reactx-px-4', properties: 'padding:0 4em' },
        { class: 'Reactx-px-5', properties: 'padding:0 5em' },
        { class: 'Reactx-py-0', properties: 'padding: 0em 0' },
        { class: 'Reactx-py-1', properties: 'padding: 1em 0' },
        { class: 'Reactx-py-2', properties: 'padding: 2em 0' },
        { class: 'Reactx-py-3', properties: 'padding: 3em 0' },
        { class: 'Reactx-py-4', properties: 'padding: 4em 0' },
        { class: 'Reactx-py-5', properties: 'padding: 5em 0' },
      ]}
    />

    <h3>Example:</h3>
    <div className="Reactx-bg-primary display-block Reactx-p-0 Reactx-mb-1">
      Reactx-p-0
    </div>
    <div className="Reactx-bg-primary display-block Reactx-p-1 Reactx-mb-1">
      Reactx-p-1
    </div>
    <div className="Reactx-bg-primary display-block Reactx-p-2 Reactx-mb-1">
      Reactx-p-2
    </div>
    <div className="Reactx-bg-primary display-block Reactx-p-3 Reactx-mb-1">
      Reactx-p-3
    </div>
    <div className="Reactx-bg-primary display-block Reactx-p-4 Reactx-mb-1">
      Reactx-p-4
    </div>
    <div className="Reactx-bg-primary display-block Reactx-p-5 Reactx-mb-1">
      Reactx-p-5
    </div>
  </>
);
