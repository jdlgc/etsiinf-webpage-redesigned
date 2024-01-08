import React, { useState } from 'react';

import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableExpandHeader,
  TableHeader,
  TableBody,
  TableExpandRow,
  TableCell,
  TableExpandedRow,
  TableToolbarSearch,
  TableToolbar
} from '@carbon/react';

const SubjectsTable = ({ rows, headers }) => {
  const [expandedRowId, setExpandedRowId] = useState(null);
  const [expandedLearningGuide, setExpandedLearningGuide] = useState(null);


  const handleExpandClick = (rowId) => {
    if (expandedRowId === rowId) {
      setExpandedRowId(null);
      setExpandedLearningGuide(null);
    } else {
      setExpandedRowId(rowId);
      setExpandedLearningGuide(rows.find(row => row.id === rowId)?.learning_guide || null);
    }
  };
  return (
    <DataTable
      rows={rows}
      headers={headers}
      render={({ rows, headers, getHeaderProps, getRowProps, getTableProps, onInputChange }) => (
        <TableContainer aria-label='Subjects table' role='table'>
          <TableToolbar aria-label='Subjects toolbar' role='toolbar'>
            <TableToolbarSearch expanded={true} onChange={onInputChange} />
          </TableToolbar>
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow role='row'>
                <TableExpandHeader />
                {headers.map((header) => (
                  <TableHeader key={header.key} {...getHeaderProps({ header, isSortable: true })} role='columnheader'>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <React.Fragment key={row.id}>
                  <TableExpandRow {...getRowProps({ row })} onClick={() => handleExpandClick(row.id)} isExpanded={expandedRowId === row.id} role='rowgroup'>
                    {row.cells.map((cell) => (
                      <TableCell key={cell.id} role='cell'>{cell.value}</TableCell>
                    ))}
                  </TableExpandRow>
                  {expandedRowId === row.id && (
                    <TableExpandedRow colSpan={headers.length + 1} role='rowgroup'>
                      <div>
                        <iframe tabIndex={row.isExpanded ? "0" : "-1"} src={expandedLearningGuide} width="100%" height="500px" />
                      </div>
                    </TableExpandedRow>
                  )}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    />
  );
};

export default SubjectsTable;