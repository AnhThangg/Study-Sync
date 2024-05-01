import React from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  colors,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Project() {
  const usenavigate = useNavigate();

  const handleCreateProject = () => {
    usenavigate("/student/createProject");
  };

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
          height: "auto",
          backgroundColor: "#F6E8E8",
          borderRadius: "20px",
          margin: "50px 50px 20px 50px",
          padding: "10px",
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: "20px", fontWeight: "bold", color:"#707070" }}>
                  No.
                </TableCell>
                <TableCell sx={{ fontSize: "20px", fontWeight: "bold",color:"#707070" }}>
                  Project Code
                </TableCell>
                <TableCell sx={{ fontSize: "20px", fontWeight: "bold",color:"#707070" }}>
                  Project Name
                </TableCell>
                <TableCell sx={{ fontSize: "20px", fontWeight: "bold",color:"#707070" }}>
                  Leader
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>KCKH01</TableCell>
                <TableCell>Quản lí đồ án nghiên cứu khoa học</TableCell>
                <TableCell>Nguyễn Trần Anh Thắng</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>KCKH01</TableCell>
                <TableCell>Quản lí đồ án nghiên cứu khoa học</TableCell>
                <TableCell>Nguyễn Trần Anh Thắng</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>KCKH01</TableCell>
                <TableCell>Quản lí đồ án nghiên cứu khoa học</TableCell>
                <TableCell>Nguyễn Trần Anh Thắng</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>KCKH01</TableCell>
                <TableCell>Quản lí đồ án nghiên cứu khoa học</TableCell>
                <TableCell>Nguyễn Trần Anh Thắng</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
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
          onClick={handleCreateProject}
        >
          + Create Project
        </Button>
      </Box>
    </Box>
  );
}

export default Project;
