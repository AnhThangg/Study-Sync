import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'projectCode', label: 'Project Code', minWidth: 170, align: 'left', format: (value) => value.toString() },
  { id: 'projectName', label: 'Project Name', minWidth: 170 },
  { id: 'teamDeveloper', label: 'Team Developer', minWidth: 170, align: 'center' },
  { id: 'status', label: 'Status', minWidth: 170, align: 'center' }, 
];

function createData(projectCode, projectName, teamDeveloper, status) { 
  return { projectCode, projectName, teamDeveloper, status }; 
}

const rows = [
  createData('P001', 'Project A', 'C1SE.01', 'Active'), 
  createData('P002', 'Project B', 'C1SE.01', 'Inactive'), 
  createData('P003', 'Project C', 'C1SE.01', 'Active'), 
  createData('P004', 'Project D', 'C1SE.01', 'Active'), 
  createData('P005', 'Project E', 'C1SE.01', 'Inactive'), 
  createData('P006', 'Project F', 'C1SE.01', 'Active'), 
  createData('P007', 'Project G', 'C1SE.01', 'Inactive'), 
  createData('P008', 'Project H', 'C1SE.01', 'Active'), 
  createData('P009', 'Project I', 'C1SE.01', 'Inactive'), 
  createData('P010', 'Project J', 'C1SE.01', 'Active'), 
  createData('P011', 'Project K', 'C1SE.01', 'Inactive'), 
  createData('P012', 'Project L', 'C1SE.01', 'Active'), 
  createData('P013', 'Project M', 'C1SE.01', 'Inactive'), 
  createData('P014', 'Project N', 'C1SE.01', 'Active'), 
  createData('P015', 'Project O', 'C1SE.01', 'Inactive'), 
];

export default function ListProject() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 640 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontWeight: 'bold' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.projectCode}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
