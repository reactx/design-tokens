import React from 'react';
import { AgGrid, agGridProps } from './AgGrid';

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
        category: 'Custom Attribute',
      },
    },
    rowData: {
      table: {
        category: 'Custom Attribute',
      },
    },
    columns: {
      table: {
        category: 'Custom Attribute',
      },
    },
    enableRtl: {
      table: {
        category: 'Custom Attribute',
      },
    },
    animateRows: {
      table: {
        category: 'Custom Attribute',
      },
    },
    pagination: {
      table: {
        category: 'Custom Attribute',
      },
    },
    enableRangeSelection: {
      table: {
        category: 'Custom Attribute',
      },
    },
    suppressMovableColumns: {
      table: {
        category: 'Custom Attribute',
      },
    },
    treeData: {
      table: {
        category: 'Custom Attribute',
      },
    },
    suppressCellSelection: {
      table: {
        category: 'Custom Attribute',
      },
    },
    suppressContextMenu: {
      table: {
        category: 'Custom Attribute',
      },
    },
    paginationAutoPageSize: {
      table: {
        category: 'Custom Attribute',
      },
    },
    paginationPageSize: {
      table: {
        category: 'Custom Attribute',
      },
    },
    cacheBlockSize: {
      table: {
        category: 'Custom Attribute',
      },
    },
    statusBar: {
      table: {
        category: 'Custom Attribute',
      },
    },
    rowModelType: {
      table: {
        category: 'Custom Attribute',
      },
    },
    rowClassRules: {
      table: {
        category: 'Custom Attribute',
      },
    },
    rowSelection: {
      control: 'inline-radio',
      table: {
        category: 'Custom Attribute',
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

export const Basic = (args: agGridProps) => <AgGrid {...args} />;
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
