import React from 'react';
import { AgGrid } from './AgGrid';

export default {
  title: 'Components/AgGrid',
  component: AgGrid,
  argTypes: {
    id: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    className: {
      table: {
        category: 'Attribute',
      },
    },
    rowData: {
      table: {
        category: 'Attribute',
      },
    },
    columns: {
      table: {
        category: 'Attribute',
      },
    },
    enableRtl: {
      table: {
        category: 'Attribute',
      },
    },
    animateRows: {
      table: {
        category: 'Attribute',
      },
    },
    pagination: {
      table: {
        category: 'Attribute',
      },
    },
    enableRangeSelection: {
      table: {
        category: 'Attribute',
      },
    },
    suppressMovableColumns: {
      table: {
        category: 'Attribute',
      },
    },
    treeData: {
      table: {
        category: 'Attribute',
      },
    },
    suppressCellSelection: {
      table: {
        category: 'Attribute',
      },
    },
    suppressContextMenu: {
      table: {
        category: 'Attribute',
      },
    },
    paginationAutoPageSize: {
      table: {
        category: 'Attribute',
      },
    },
    paginationPageSize: {
      table: {
        category: 'Attribute',
      },
    },
    cacheBlockSize: {
      table: {
        category: 'Attribute',
      },
    },
    statusBar: {
      table: {
        category: 'Attribute',
      },
    },
    rowModelType: {
      table: {
        category: 'Attribute',
      },
    },
    rowClassRules: {
      table: {
        category: 'Attribute',
      },
    },
    rowSelection: {
      control: 'inline-radio',
      table: {
        category: 'Attribute',
      },
    },
    onSelectionChanged: {
      table: {
        category: 'Action',
      },
    },
    onGridReady: {
      table: {
        category: 'Action',
      },
    },
    onPaginationChanged: {
      table: {
        category: 'Action',
      },
    },
    onRowDoubleClicked: {
      table: {
        category: 'Action',
      },
    },
    onRowSelected: {
      table: {
        category: 'Action',
      },
    },
    onCellClicked: {
      table: {
        category: 'Action',
      },
    },
  },
};

export const Basic = (args) => <AgGrid {...args} />;
Basic.args = {
  rowData: [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'BMW', model: 'M3', price: 85000 },
  ],
  columns: [
    { field: 'make', sortable: true, filter: true },
    { field: 'model', headerName: 'model name', sortable: false, filter: true },
    { field: 'price', sortable: true, filter: false },
  ],
};
