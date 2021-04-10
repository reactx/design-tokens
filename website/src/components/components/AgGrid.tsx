import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { cleanProps, generateClass } from '../../utils';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import * as agGridEnterprise from 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';

agGridEnterprise.LicenseManager.setLicenseKey(
  'DownloadDevTools_COM_NDEwMjM0NTgwMDAwMA==59158b5225400879a12a96634544f5b6',
);

const ROW_SELECTION = {
  SINGLE: 'single',
  MULTIPLE: 'multiple',
};

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
          key={index}
          field={item.field}
          headerName={item.headerName || item.field}
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
  rowData: PropTypes.any,
  columns: PropTypes.array,
  cacheBlockSize: PropTypes.any,
  statusBar: PropTypes.any,
  rowModelType: PropTypes.any,
  rowClassRules: PropTypes.any,
  rowSelection: PropTypes.oneOf(Object.values(ROW_SELECTION)),
  //Action
  onSelectionChanged: PropTypes.func,
  onGridReady: PropTypes.func,
  onPaginationChanged: PropTypes.func,
  onRowDoubleClicked: PropTypes.func,
  onRowSelected: PropTypes.func,
  onCellClicked: PropTypes.func,
};

AgGrid.defaultProps = {
  paginationPageSize: 25,
  rowSelection: ROW_SELECTION.SINGLE,
};

export { AgGrid };
