import * as React from "react";
import {
  Button,
  Box,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Edit, Delete } from "@mui/icons-material";
import { useState } from "react";
import { getAllStudents, getDetailStudent } from "../../../api/facultyApi";
import { useEffect } from "react";

const Student = () => {
  const [students, setStudents] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [inforStudent, setInforStudent] = useState([]);
  useEffect(() => {
    getAllStudents()
      .then((data) => {
        setStudents(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "No.",
      width: 100,
    },
    { field: "studentName", headerName: "Student Name", width: 400 },
    { field: "studentID", headerName: "Student ID", width: 300 },
    { field: "class", headerName: "Class", width: 300 },
    { field: "email", headerName: "Email", width: 300 },
  ];

  const rows = students.map((item, index) => ({
    id: index + 1,
    studentName: item.studentFullname,
    studentID: item.studentCode,
    class: item.studentClass,
    email: item.studentEmail,
    studentCode: item.studentCode,
  }));

  const onOpenDialog = async (id) => {
    const studentCode = id.row.studentCode;
    const getInfoStudent = await students.find(
      (item) => item.studentCode === studentCode
    );
    setInforStudent(getInfoStudent);
    console.log(getInfoStudent);
    setOpenDialog(true);
  };

  console.log(inforStudent);
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

  return (
    <Box className="container" sx={{ margin: "50px 0 0 50px" }}>
      <Typography
        variant="h4"
        sx={{
          color: "#D82C2C",
          fontWeight: "bold",
        }}
      >
        Student
      </Typography>

      <Box
        className="tableAccount"
        sx={{
          width: "95%",
          background: "#F6E8E8",
          borderRadius: "20px",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <DataGrid
          autoHeight
          rows={rows}
          onCellClick={onOpenDialog}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          sx={{
            border: "none",
            "& .MuiDataGrid-container--top [role=row]": {
              background: "#D82C2C",
              fontWeight: "bold",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: "bold",
              color: "#fff",
              fontSize: "30px",
            },
            "& .MuiDataGrid-row": {
              fontSize: "25px",
              color: "#707070",
            },
            "& .css-1essi2g-MuiDataGrid-columnHeaderRow": {
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            },
          }}
        />
      </Box>
      <Dialog
        sx={{
          "& .MuiDialog-paper": {
            width: "30%",
            maxWidth: "lg",
          },
        }}
        open={openDialog}
        // onClose=''
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ color: "#D82C2C", fontWeight: "bold", fontSize: "20px" }}
        >
          {"Information of Student!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box
              className="dialogContain"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {/* studentCode */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography sx={{ fontWeight: "bold", color: "#1e385d" }}>
                  Student Code:
                </Typography>
                <Typography
                  sx={{
                    marginLeft: "10px",
                    fontWeight: "bold",
                    color: "#718199",
                  }}
                >
                  {inforStudent.studentCode}
                </Typography>
              </Box>
              {/* studentClass */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography sx={{ fontWeight: "bold", color: "#1e385d" }}>
                  Student Class:
                </Typography>
                <Typography
                  sx={{
                    marginLeft: "10px",
                    fontWeight: "bold",
                    color: "#718199",
                  }}
                >
                  {inforStudent.studentClass}
                </Typography>
              </Box>
              {/* Name */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography sx={{ fontWeight: "bold", color: "#1e385d" }}>
                  Student Name:
                </Typography>
                <Typography
                  sx={{
                    marginLeft: "10px",
                    fontWeight: "bold",
                    color: "#718199",
                  }}
                >
                  {inforStudent.studentFullname}
                </Typography>
              </Box>
              {/* Gender */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography sx={{ fontWeight: "bold", color: "#1e385d" }}>
                  Gender:
                </Typography>
                <Typography
                  sx={{
                    marginLeft: "10px",
                    fontWeight: "bold",
                    color: "#718199",
                  }}
                >
                  {inforStudent.studentSex === true ? "Male" : "Female"}
                </Typography>
              </Box>
              {/* Birthday */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography sx={{ fontWeight: "bold", color: "#1e385d" }}>
                  Birthday:
                </Typography>
                <Typography
                  sx={{
                    marginLeft: "10px",
                    fontWeight: "bold",
                    color: "#718199",
                  }}
                >
                  {formatDate(inforStudent.studentBirthday)}
                </Typography>
              </Box>
              {/* Email */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography sx={{ fontWeight: "bold", color: "#1e385d" }}>
                  Email
                </Typography>
                <Typography
                  sx={{
                    marginLeft: "10px",
                    fontWeight: "bold",
                    color: "#718199",
                  }}
                >
                  {inforStudent.studentEmail}
                </Typography>
              </Box>
              {/* Phone */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography sx={{ fontWeight: "bold", color: "#1e385d" }}>
                  Phone:
                </Typography>
                <Typography
                  sx={{
                    marginLeft: "10px",
                    fontWeight: "bold",
                    color: "#718199",
                  }}
                >
                  {inforStudent.studentPhone}
                </Typography>
              </Box>
              {/* ADDRESS */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography sx={{ fontWeight: "bold", color: "#1e385d" }}>
                  Address:
                </Typography>
                <Typography
                  sx={{
                    marginLeft: "10px",
                    fontWeight: "bold",
                    color: "#718199",
                  }}
                >
                  {inforStudent.studentAddress}
                </Typography>
              </Box>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              textTransform: "none",
              fontSize: "17px",
              gap: "5px",
              border: "1px solid #D82C2C",
              width: "100px",
              background: "#D82C2C",
              color: "#fff",
              "&:hover": {
                background: "#fff",
                color: "#D82C2C",
                borderColor: "#D82C2C",
              },
            }}
            onClick={() => setOpenDialog(false)}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Student;
