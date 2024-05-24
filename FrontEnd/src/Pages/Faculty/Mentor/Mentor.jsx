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
import { Edit, Delete, CancelPresentation } from "@mui/icons-material";
import { useState } from "react";
import { getAllMentor, getDetailMetor } from "../../../api/facultyApi";
import { useEffect } from "react";

const Mentor = () => {
  const [mentors, setMentors] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [inforMentor, setInforMentor] = useState([]);

  useEffect(() => {
    getAllMentor()
      .then((data) => {
        setMentors(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const columns = [
    { field: "id", headerName: "No.", width: 100 },
    { field: "mentorName", headerName: "Mentor Name", width: 400 },
    { field: "mentorDegree", headerName: "Mentor Degree", width: 300 },
    { field: "phone", headerName: "Phone", width: 300 },
    { field: "email", headerName: "Email", width: 300 },
  ];

  const rows = mentors.map((item, index) => ({
    id: index + 1,
    mentorName: item.mentorFullname,
    mentorDegree: item.mentorDegree,
    phone: item.mentorPhone,
    email: item.mentorEmail,
    mentorCode: item.mentorCode,
  }));

  const onOpenDialog = async (id) => {
    const mentorCode = id.row.mentorCode;
    // console.log(mentorCode);
    const getInfoMentor = await mentors.find(
      (item) => item.mentorCode === mentorCode
    );
    setInforMentor(getInfoMentor);
    console.log(getInfoMentor);
    setOpenDialog(true);
  };

  console.log(inforMentor);
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
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
        Mentor
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
      <Dialog sx={{
        '& .MuiDialog-paper': {
          width: '30%',
          maxWidth: 'lg',
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
          {"Information of Mentor!"}
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
              {/* mentorCode */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography sx={{ fontWeight: "bold", color: "#1e385d" }}>
                  Mentor Code:
                </Typography>
                <Typography
                  sx={{
                    marginLeft: "10px",
                    fontWeight: "bold",
                    color: "#718199",
                  }}
                >
                  {inforMentor.mentorCode}
                </Typography>
              </Box>

              {/* mentorName */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography sx={{ fontWeight: "bold", color: "#1e385d" }}>
                  Mentor Name:
                </Typography>
                <Typography
                  sx={{
                    marginLeft: "10px",
                    fontWeight: "bold",
                    color: "#718199",
                  }}
                >
                  {inforMentor.mentorFullname}
                </Typography>
              </Box>

              {/* mentorGender */}
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
                  {inforMentor.mentorSex === true ? "Male" : "Female"}
                </Typography>
              </Box>

              {/* birthday */}
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
                  {formatDate(inforMentor.mentorBirthday)}
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
                  {inforMentor.mentorPhone}
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
                  Email:
                </Typography>
                <Typography
                  sx={{
                    marginLeft: "10px",
                    fontWeight: "bold",
                    color: "#718199",
                  }}
                >
                  {inforMentor.mentorEmail}
                </Typography>
              </Box>
              {/* Degree */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography sx={{ fontWeight: "bold", color: "#1e385d" }}>
                  Degree:
                </Typography>
                <Typography
                  sx={{
                    marginLeft: "10px",
                    fontWeight: "bold",
                    color: "#718199",
                  }}
                >
                  {inforMentor.mentorDegree}
                </Typography>
              </Box>
              {/* ScientificName */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography sx={{ fontWeight: "bold", color: "#1e385d" }}>
                ScientificName:
                </Typography>
                <Typography
                  sx={{
                    marginLeft: "10px",
                    fontWeight: "bold",
                    color: "#718199",
                  }}
                >
                  {inforMentor.mentorScientificName}
                </Typography>
              </Box>
              {/* Address */}
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
                  {inforMentor.mentorAddress}
                </Typography>
              </Box>

            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button sx={{
            textTransform: 'none',
            fontSize: '17px',
            gap: '5px',
            border: '1px solid #D82C2C',
            width: '100px',
            background: '#D82C2C',
            color: '#fff',
            '&:hover': {
              background: '#fff',
              color: '#D82C2C',
              borderColor: '#D82C2C',
              
            },
          }} onClick={() => setOpenDialog(false)}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Mentor;
