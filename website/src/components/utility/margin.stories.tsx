import React from 'react';
import { Table } from '../components/Table';

export default {
  title: 'Utility/Margin',
};

export const Basic = () => (
  <>
    <Table
      header={['class', 'properties']}
      body={[
        { class: 'reactx-m-0', properties: 'margin: 0em' },
        { class: 'reactx-m-1', properties: 'margin: 1em' },
        { class: 'reactx-m-2', properties: 'margin: 2em' },
        { class: 'reactx-m-3', properties: 'margin: 3em' },
        { class: 'reactx-m-4', properties: 'margin: 4em' },
        { class: 'reactx-m-5', properties: 'margin: 5em' },
        { class: 'reactx-mt-0', properties: 'margin-top: 0em' },
        { class: 'reactx-mt-1', properties: 'margin-top: 1em' },
        { class: 'reactx-mt-2', properties: 'margin-top: 2em' },
        { class: 'reactx-mt-3', properties: 'margin-top: 3em' },
        { class: 'reactx-mt-4', properties: 'margin-top: 4em' },
        { class: 'reactx-mt-5', properties: 'margin-top: 5em' },
        { class: 'reactx-mb-0', properties: 'margin-bottom: 0em' },
        { class: 'reactx-mb-1', properties: 'margin-bottom: 1em' },
        { class: 'reactx-mb-2', properties: 'margin-bottom: 2em' },
        { class: 'reactx-mb-3', properties: 'margin-bottom: 3em' },
        { class: 'reactx-mb-4', properties: 'margin-bottom: 4em' },
        { class: 'reactx-mb-5', properties: 'margin-bottom: 5em' },
        { class: 'reactx-mr-0', properties: 'margin-right: 0em' },
        { class: 'reactx-mr-1', properties: 'margin-right: 1em' },
        { class: 'reactx-mr-2', properties: 'margin-right: 2em' },
        { class: 'reactx-mr-3', properties: 'margin-right: 3em' },
        { class: 'reactx-mr-4', properties: 'margin-right: 4em' },
        { class: 'reactx-mr-5', properties: 'margin-right: 5em' },
        { class: 'reactx-ml-0', properties: 'margin-left: 0em' },
        { class: 'reactx-ml-1', properties: 'margin-left: 1em' },
        { class: 'reactx-ml-2', properties: 'margin-left: 2em' },
        { class: 'reactx-ml-3', properties: 'margin-left: 3em' },
        { class: 'reactx-ml-4', properties: 'margin-left: 4em' },
        { class: 'reactx-ml-5', properties: 'margin-left: 5em' },
        { class: 'reactx-mx-0', properties: 'margin:0 0em' },
        { class: 'reactx-mx-1', properties: 'margin:0 1em' },
        { class: 'reactx-mx-2', properties: 'margin:0 2em' },
        { class: 'reactx-mx-3', properties: 'margin:0 3em' },
        { class: 'reactx-mx-4', properties: 'margin:0 4em' },
        { class: 'reactx-mx-5', properties: 'margin:0 5em' },
        { class: 'reactx-my-0', properties: 'margin: 0em 0' },
        { class: 'reactx-my-1', properties: 'margin: 1em 0' },
        { class: 'reactx-my-2', properties: 'margin: 2em 0' },
        { class: 'reactx-my-3', properties: 'margin: 3em 0' },
        { class: 'reactx-my-4', properties: 'margin: 4em 0' },
        { class: 'reactx-my-5', properties: 'margin: 5em 0' },
      ]}
    />

    <h3>Example:</h3>
    <div className="reactx-bg-primary display-block reactx-m-0">reactx-m-0</div>
    <div className="reactx-bg-primary display-block reactx-m-1">reactx-m-1</div>
    <div className="reactx-bg-primary display-block reactx-m-2">reactx-m-2</div>
    <div className="reactx-bg-primary display-block reactx-m-3">reactx-m-3</div>
    <div className="reactx-bg-primary display-block reactx-m-4">reactx-m-4</div>
    <div className="reactx-bg-primary display-block reactx-m-5">reactx-m-5</div>
  </>
);
