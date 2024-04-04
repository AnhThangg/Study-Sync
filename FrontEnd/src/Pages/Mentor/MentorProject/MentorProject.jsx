import React from 'react'
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const MentorProject = () => {
  const students = [
    { id: 1, name: 'John Doe', grade: 'A', age: 20 },
    { id: 2, name: 'Jane Smith', grade: 'B', age: 21 },
    { id: 3, name: 'Alice Johnson', grade: 'C', age: 22 },
    // Add more students as needed
  ];
  return (
    <Table sx={{ border: '0' }}>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Grade</TableCell>
          <TableCell>Age</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {students.map((student) => (
          <TableRow key={student.id}>
            <TableCell>{student.id}</TableCell>
            <TableCell>{student.name}</TableCell>
            <TableCell>{student.grade}</TableCell>
            <TableCell>{student.age}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default MentorProject

