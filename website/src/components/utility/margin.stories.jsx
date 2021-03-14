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
        { class: 'Reactx-m-0', properties: 'margin: 0em' },
        { class: 'Reactx-m-1', properties: 'margin: 1em' },
        { class: 'Reactx-m-2', properties: 'margin: 2em' },
        { class: 'Reactx-m-3', properties: 'margin: 3em' },
        { class: 'Reactx-m-4', properties: 'margin: 4em' },
        { class: 'Reactx-m-5', properties: 'margin: 5em' },
        { class: 'Reactx-mt-0', properties: 'margin-top: 0em' },
        { class: 'Reactx-mt-1', properties: 'margin-top: 1em' },
        { class: 'Reactx-mt-2', properties: 'margin-top: 2em' },
        { class: 'Reactx-mt-3', properties: 'margin-top: 3em' },
        { class: 'Reactx-mt-4', properties: 'margin-top: 4em' },
        { class: 'Reactx-mt-5', properties: 'margin-top: 5em' },
        { class: 'Reactx-mb-0', properties: 'margin-bottom: 0em' },
        { class: 'Reactx-mb-1', properties: 'margin-bottom: 1em' },
        { class: 'Reactx-mb-2', properties: 'margin-bottom: 2em' },
        { class: 'Reactx-mb-3', properties: 'margin-bottom: 3em' },
        { class: 'Reactx-mb-4', properties: 'margin-bottom: 4em' },
        { class: 'Reactx-mb-5', properties: 'margin-bottom: 5em' },
        { class: 'Reactx-mr-0', properties: 'margin-right: 0em' },
        { class: 'Reactx-mr-1', properties: 'margin-right: 1em' },
        { class: 'Reactx-mr-2', properties: 'margin-right: 2em' },
        { class: 'Reactx-mr-3', properties: 'margin-right: 3em' },
        { class: 'Reactx-mr-4', properties: 'margin-right: 4em' },
        { class: 'Reactx-mr-5', properties: 'margin-right: 5em' },
        { class: 'Reactx-ml-0', properties: 'margin-left: 0em' },
        { class: 'Reactx-ml-1', properties: 'margin-left: 1em' },
        { class: 'Reactx-ml-2', properties: 'margin-left: 2em' },
        { class: 'Reactx-ml-3', properties: 'margin-left: 3em' },
        { class: 'Reactx-ml-4', properties: 'margin-left: 4em' },
        { class: 'Reactx-ml-5', properties: 'margin-left: 5em' },
        { class: 'Reactx-mx-0', properties: 'margin:0 0em' },
        { class: 'Reactx-mx-1', properties: 'margin:0 1em' },
        { class: 'Reactx-mx-2', properties: 'margin:0 2em' },
        { class: 'Reactx-mx-3', properties: 'margin:0 3em' },
        { class: 'Reactx-mx-4', properties: 'margin:0 4em' },
        { class: 'Reactx-mx-5', properties: 'margin:0 5em' },
        { class: 'Reactx-my-0', properties: 'margin: 0em 0' },
        { class: 'Reactx-my-1', properties: 'margin: 1em 0' },
        { class: 'Reactx-my-2', properties: 'margin: 2em 0' },
        { class: 'Reactx-my-3', properties: 'margin: 3em 0' },
        { class: 'Reactx-my-4', properties: 'margin: 4em 0' },
        { class: 'Reactx-my-5', properties: 'margin: 5em 0' },
      ]}
    />

    <h3>Example:</h3>
    <div className="Reactx-bg-primary display-block Reactx-m-0">Reactx-m-0</div>
    <div className="Reactx-bg-primary display-block Reactx-m-1">Reactx-m-1</div>
    <div className="Reactx-bg-primary display-block Reactx-m-2">Reactx-m-2</div>
    <div className="Reactx-bg-primary display-block Reactx-m-3">Reactx-m-3</div>
    <div className="Reactx-bg-primary display-block Reactx-m-4">Reactx-m-4</div>
    <div className="Reactx-bg-primary display-block Reactx-m-5">Reactx-m-5</div>
  </>
);
