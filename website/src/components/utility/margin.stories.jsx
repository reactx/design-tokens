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
        { class: 'nirvana-m-0', properties: 'margin: 0em' },
        { class: 'nirvana-m-1', properties: 'margin: 1em' },
        { class: 'nirvana-m-2', properties: 'margin: 2em' },
        { class: 'nirvana-m-3', properties: 'margin: 3em' },
        { class: 'nirvana-m-4', properties: 'margin: 4em' },
        { class: 'nirvana-m-5', properties: 'margin: 5em' },
        { class: 'nirvana-mt-0', properties: 'margin-top: 0em' },
        { class: 'nirvana-mt-1', properties: 'margin-top: 1em' },
        { class: 'nirvana-mt-2', properties: 'margin-top: 2em' },
        { class: 'nirvana-mt-3', properties: 'margin-top: 3em' },
        { class: 'nirvana-mt-4', properties: 'margin-top: 4em' },
        { class: 'nirvana-mt-5', properties: 'margin-top: 5em' },
        { class: 'nirvana-mb-0', properties: 'margin-bottom: 0em' },
        { class: 'nirvana-mb-1', properties: 'margin-bottom: 1em' },
        { class: 'nirvana-mb-2', properties: 'margin-bottom: 2em' },
        { class: 'nirvana-mb-3', properties: 'margin-bottom: 3em' },
        { class: 'nirvana-mb-4', properties: 'margin-bottom: 4em' },
        { class: 'nirvana-mb-5', properties: 'margin-bottom: 5em' },
        { class: 'nirvana-mr-0', properties: 'margin-right: 0em' },
        { class: 'nirvana-mr-1', properties: 'margin-right: 1em' },
        { class: 'nirvana-mr-2', properties: 'margin-right: 2em' },
        { class: 'nirvana-mr-3', properties: 'margin-right: 3em' },
        { class: 'nirvana-mr-4', properties: 'margin-right: 4em' },
        { class: 'nirvana-mr-5', properties: 'margin-right: 5em' },
        { class: 'nirvana-ml-0', properties: 'margin-left: 0em' },
        { class: 'nirvana-ml-1', properties: 'margin-left: 1em' },
        { class: 'nirvana-ml-2', properties: 'margin-left: 2em' },
        { class: 'nirvana-ml-3', properties: 'margin-left: 3em' },
        { class: 'nirvana-ml-4', properties: 'margin-left: 4em' },
        { class: 'nirvana-ml-5', properties: 'margin-left: 5em' },
        { class: 'nirvana-mx-0', properties: 'margin:0 0em' },
        { class: 'nirvana-mx-1', properties: 'margin:0 1em' },
        { class: 'nirvana-mx-2', properties: 'margin:0 2em' },
        { class: 'nirvana-mx-3', properties: 'margin:0 3em' },
        { class: 'nirvana-mx-4', properties: 'margin:0 4em' },
        { class: 'nirvana-mx-5', properties: 'margin:0 5em' },
        { class: 'nirvana-my-0', properties: 'margin: 0em 0' },
        { class: 'nirvana-my-1', properties: 'margin: 1em 0' },
        { class: 'nirvana-my-2', properties: 'margin: 2em 0' },
        { class: 'nirvana-my-3', properties: 'margin: 3em 0' },
        { class: 'nirvana-my-4', properties: 'margin: 4em 0' },
        { class: 'nirvana-my-5', properties: 'margin: 5em 0' },
      ]}
    />

    <h3>Example:</h3>
    <div className="nirvana-bg-primary display-block nirvana-m-0">
      nirvana-m-0
    </div>
    <div className="nirvana-bg-primary display-block nirvana-m-1">
      nirvana-m-1
    </div>
    <div className="nirvana-bg-primary display-block nirvana-m-2">
      nirvana-m-2
    </div>
    <div className="nirvana-bg-primary display-block nirvana-m-3">
      nirvana-m-3
    </div>
    <div className="nirvana-bg-primary display-block nirvana-m-4">
      nirvana-m-4
    </div>
    <div className="nirvana-bg-primary display-block nirvana-m-5">
      nirvana-m-5
    </div>
  </>
);
