import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { cleanProps, generateClass } from '../../utils';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import * as agGridEnterprise from 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

agGridEnterprise.LicenseManager.setLicenseKey(
  'DownloadDevTools_COM_NDEwMjM0NTgwMDAwMA==59158b5225400879a12a96634544f5b6',
);

const AgGridComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const resize = (e) => {
      gridRef.current.api.sizeColumnsToFit();
    };

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [gridRef.current]);

  return (
    <AgGridReact
      ref={gridRef}
      {...parentProps}
      className={'ag-theme-alpine ' + (props.className ? props.className : '')}
    >
      {props.columns.map((item, index) => (
        <AgGridColumn
          field={item.title}
          key={index}
          sortable={item.sortable}
          filter={item.filter}
        />
      ))}
    </AgGridReact>
  );
};

const AgGrid = React.forwardRef((props, ref) => (
  <AgGridComponent ref={ref} {...props} />
));

AgGrid.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  enableRtl: PropTypes.bool,
  animateRows: PropTypes.bool,
  pagination: PropTypes.bool,
  enableRangeSelection: PropTypes.bool,
  suppressMovableColumns: PropTypes.bool,
  treeData: PropTypes.bool,
  suppressCellSelection: PropTypes.bool,
  suppressContextMenu: PropTypes.bool,
  paginationAutoPageSize: PropTypes.bool,
  paginationPageSize: PropTypes.number,
  onSelectionChanged: PropTypes.func,
  onGridReady: PropTypes.func,
  onPaginationChanged: PropTypes.func,
  onRowDoubleClicked: PropTypes.func,
  onRowSelected: PropTypes.func,
  onCellClicked: PropTypes.func,
  rowData: PropTypes.any,
  columns: PropTypes.array,
  cacheBlockSize: PropTypes.any,
  statusBar: PropTypes.any,
  rowModelType: PropTypes.any,
  rowClassRules: PropTypes.any,
  rowSelection: PropTypes.string,
};

AgGrid.defaultProps = {
  enableRtl: false,
  paginationAutoPageSize: false,
  suppressContextMenu: false,
  pagination: false,
  animateRows: false,
  suppressMovableColumns: false,
  suppressCellSelection: false,
  className: '',
  paginationPageSize: 25,
  rowSelection: 'single',
};

export { AgGrid };
