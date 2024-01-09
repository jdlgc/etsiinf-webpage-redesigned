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
          <TableToolbar aria-label='Toolbar for search' role='toolbar'>
            <TableToolbarSearch expanded={true} onChange={onInputChange} role="searchbox" />
          </TableToolbar>
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow role='row'>
                <TableHeader id='expand' role='columnheader'>Expand</TableHeader>
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
                  <TableExpandRow {...getRowProps({ row })} onClick={() => handleExpandClick(row.id)} isExpanded={expandedRowId === row.id} role='row'> {/* Ensure proper row role */}
                    {row.cells.map((cell) => (
                      <TableCell key={cell.id} headers='expand' role='cell'>
                        {cell.value}
                      </TableCell>
                    ))}
                  </TableExpandRow>
                  {expandedRowId === row.id && (
                    <TableExpandedRow colSpan={headers.length + 1} role='rowgroup'> {/* Ensure proper rowgroup role */}
                      <div>
                        <iframe tabIndex={row.isExpanded ? "0" : "-1"} src={expandedLearningGuide} allowfullscreen
                          style={{ width: '100%', height: '200px' }}
                          title="July exams"
                        ></iframe>
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