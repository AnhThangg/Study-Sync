import React from "react";
import { Box, Button, Table, Typography } from "@mui/material";

function Project() {
  return (
    <Box sx={{ margin: "50px 0 0 50px" }}>
      <Box
        sx={{
          borderBottom: "1.5px solid #707070",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#D82C2C",
            fontWeight: "bold",
          }}
        >
          Project
        </Typography>
      </Box>
      
      <Box
        sx={{
          width: "1036px",
          height: "400px",
          backgroundColor: "#F6E8E8",
          borderRadius: "20px",
          margin: "50px 50px 20px 50px",
        }}
      >
        <Table
        sx={{
          marginTop:'20px',

        }}>
        <thead >
          <tr>
            <th>No.</th>
            <th>Project Code</th>
            <th>Project Name</th>
            <th>Leader</th>
          </tr>
        </thead>
      </Table>
      </Box>
    
      <Box
        sx={{
          margin: "0 50px 0 50px",
        }}
      >
        <Button
          sx={{
            border: "3px solid #D82C2C",
            borderRadius: "20px",
            width: "200px",
            height: "50px",
            color: "#D82C2C",
            fontSize: "16px",
            textTransform: "none",
          }}
        >
          + Create Project
        </Button>
      </Box>
    </Box>
  );
}

export default Project;
