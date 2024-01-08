'use client';

import React from 'react';
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableToolbar,
  TableToolbarSearch,
} from '@carbon/react';

const JanuaryExamsTable = ({ rows, headers }) => {
  return (
    <DataTable
      rows={rows}
      headers={headers}
      render={({
        rows,
        headers,
        getHeaderProps,
        getRowProps,
        getTableProps,
        onInputChange
      }) => (
        <TableContainer aria-label='Exams table' role='table'>
          <TableToolbar aria-label='Exams toolbar' role='toolbar'>
          <TableToolbarSearch expanded={true} onChange={onInputChange} role="searchbox" />
          </TableToolbar>
          <Table {...getTableProps()} size='lg' useZebraStyles={false} aria-label="January exams table">
            <TableHead>
              <TableRow role='row'>
                {headers.map((header) => (
                  <TableHeader key={header.key} {...getHeaderProps({ header, isSortable: true })} role='columnheader'>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index} {...getRowProps({ row })} role='row'>
                  {row.cells.map((cell) => (
                    <TableCell key={cell.id} role='cell'>{cell.value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    />
  );
};

export default JanuaryExamsTable;