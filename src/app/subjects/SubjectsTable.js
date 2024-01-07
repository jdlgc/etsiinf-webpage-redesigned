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
        <TableContainer title="Listado de asignaturas del plan de estudios" description="10AN - MÁSTER UNIVERSITARIO EN INGENIERÍA INFORMÁTICA (MUII)">
          <TableToolbar>
            <TableToolbarSearch expanded={true} onChange={onInputChange} />
          </TableToolbar>
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                <TableExpandHeader />
                {headers.map((header) => (
                  <TableHeader key={header.key} {...getHeaderProps({ header, isSortable: true })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <React.Fragment key={row.id}>
                  <TableExpandRow {...getRowProps({ row })} onClick={() => handleExpandClick(row.id)} isExpanded={expandedRowId === row.id}>
                    {row.cells.map((cell) => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableExpandRow>
                  {expandedRowId === row.id && (
                    <TableExpandedRow colSpan={headers.length + 1}>
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