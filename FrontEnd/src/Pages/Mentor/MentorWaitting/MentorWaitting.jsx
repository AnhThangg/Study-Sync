import React from 'react';
import { Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { NavLink } from 'react-router-dom';

const columns = [
  { id: 'no', label: 'No', minWidth: 50 },
  { id: 'teamDeveloper', label: 'Team Developer', minWidth: 170 },
  {
    id: 'projectName',
    label: 'Project Name',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toString(),
  },
  {
    id: 'leader',
    label: 'Leader',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toString(),
  },
];

function createData(no, teamDeveloper, projectName, leader) {
  return { no, teamDeveloper, projectName, leader };
}

const rows = [
  createData(1, 'C2SE.01', 'AIs Job Market Impact', 'Nguyen Van A'),
  createData(2, 'C2SE.02', 'Sustainable Urban Development', 'Tran Thi B'),
  createData(3, 'C2SE.03', 'Microbiome and Health', 'Hoang Minh C'),
  createData(4, 'C2SE.04', 'Renewable Energy Integration', 'Le Thi D'),
  createData(5, 'C2SE.05', 'CRISPR and Genetic Engineering ', 'Pham Van E'),
  createData(6, 'C2SE.06', 'Decision Making Psychology', 'Nguyen Thi F'),
  createData(7, 'C2SE.07', 'Coastal Climate Adaptation', 'Tran Van G'),
  createData(8, 'C2SE.08', 'Economics of Space Exploration', 'Nguyen Thi H'),
  createData(9, 'C2SE.09', 'Social Media and Mental Health', 'Le Van I'),
  createData(10, 'C2SE.10', 'Quantum Computing', 'Pham Thi K'),
  createData(11, 'C2SE.11', 'Cybersecurity Measures', 'Nguyen Van L'),
  createData(12, 'C2SE.12', 'Sustainable Agriculture Methods', 'Tran Thi M'),
  createData(13, 'C2SE.13', 'Cultural Diversity in the Workplace', 'Hoang Van N'),
  createData(14, 'C2SE.14', 'Advanced Energy Materials', 'Le Thi O'),
  createData(15, 'C2SE.15', 'Food Security Innovation', 'Pham Van P'),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const homeClick = () => {
    window.location.href = "/Mentor/MentorProjectInformation"
  }
  return (
    <Paper sx={{ width: '90%', overflow: 'hidden'}}>
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
              .map((row) => (
                
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.no}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        <Typography
                          component="div"
                          style={{ cursor: 'pointer' }}
                          onClick={homeClick}
                          >
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </Typography>
                      </TableCell>
                    );
                  })}
                </TableRow>
                
                
              ))}
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