import * as React from 'react';
import { Outlet, NavLink, useLocation } from "react-router-dom";
import {
  Button,
  Box,
  Typography,
  TextField,
  MenuItem
} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { Edit, Delete } from "@mui/icons-material";

const role = [
  {
    value: 'univer',
    label: 'Univer',
  },
  {
    value: 'faculty',
    label: 'Faculty',
  },
  {
    value: 'mentor',
    label: 'Mentor',
  },
  {
    value: 'student',
    label: 'Student',
  },
];

const AddAccount = () => {
  return (
    <Box className="container" sx={{ margin: "50px 0 0 50px" }}>
      <Typography
        variant="h4"
        sx={{
          color: "#D82C2C",
          fontWeight: "bold",
        }}>
        HomePage
      </Typography>

      <Box className="addContainer">
        <TextField
          id="outlined-select-currency"
          select
          size='medium'
          label="Select Role"
          defaultValue="student"
          helperText="Please select your role"
          sx={{ width: '300px', marginTop: '50px'}}
        >
          {role.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      

    </Box>
  )
}

export default AddAccount