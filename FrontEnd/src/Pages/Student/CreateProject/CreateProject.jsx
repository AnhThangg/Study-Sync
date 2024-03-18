import React from "react";
import {
  Box,
  Button,
  IconButton,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import "./CreateProject.scss";
import { Delete } from "@mui/icons-material";

function CreateProject() {
  const InfoItem = ({ label, value }) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        marginBottom: "5px",
        width: "50%",
      }}
    >
      <Typography className="txtcel1" sx={{ fontWeight: "bold" }}>
        {label}:
      </Typography>
      <Typography className="txtcel2" sx={{ marginLeft: "10px" }}>
        {value}
      </Typography>
    </Box>
  );

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
          Create Project
        </Typography>
      </Box>

      <Box>
        <Box sx={{ margin: "30px 50px 0 0" }}>
          <Input
            type="text"
            placeholder="Name Project"
            sx={{
              width: "100%",
              padding: "5px",
              border: "1px solid #999999",
              borderRadius: "5px",
            }}
          ></Input>
        </Box>

        <Box>
          {/* Infomation Leader */}
          <Box
            sx={{
              margin: "20px 0 0 10px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#818181",
              }}
            >
              Leader
            </Typography>
          </Box>

          <Box
            sx={{
              margin: "10px 50px 20px 20px",
              color: "#818181",
            }}
          >
            <InfoItem label="Full Name" value="Thang, Nguyen Tran Anh" />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "5px",
              }}
            >
              <InfoItem label="Student Code" value="26211329003" />
              <InfoItem label="Class" value="K26 CMU-TPM4" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "5px",
              }}
            >
              <InfoItem label="Phone" value="0869132529" />
              <InfoItem label="Email" value="anhthang2529@gmail.com" />
            </Box>
            <InfoItem label="Department" value="Khoa Công Nghệ Phần Mềm CMU" />
            <InfoItem
              label="Address"
              value="60/1 Lê Thị Tính, An Khê, Thanh Khê, Đà Nẵng"
            />
          </Box>
        </Box>
        {/* Team member */}
        <Box>
          <Box
            sx={{
              margin: "20px 0 0 10px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#818181",
              }}
            >
              Team Members
            </Typography>
          </Box>
          <Box
            className="id_student"
            sx={{ display: "flex", flexDirection: "row", marginLeft: "20px" }}
          >
            <TextField type="number" size="small" sx={{ width: "170px" }} />
            <IconButton sx={{ position: "absolute", left: "500px" }}>
              <Delete />
            </IconButton>
          </Box>
          <Box
            sx={{
              margin: "10px 50px 20px 20px",
              color: "#818181",
            }}
          >
            <InfoItem label="Full Name" value="Thang, Nguyen Tran Anh" />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "5px",
              }}
            >
              <InfoItem label="Student Code" value="26211329003" />
              <InfoItem label="Class" value="K26 CMU-TPM4" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "5px",
              }}
            >
              <InfoItem label="Phone" value="0869132529" />
              <InfoItem label="Email" value="anhthang2529@gmail.com" />
            </Box>
            <InfoItem label="Department" value="Khoa Công Nghệ Phần Mềm CMU" />
            <InfoItem
              label="Address"
              value="60/1 Lê Thị Tính, An Khê, Thanh Khê, Đà Nẵng"
            />
          </Box>
          <Box
            className="addMember"
            sx={{
              display: "flex",
              alignItems: "center",
              marginLeft: "20px",
            }}
          >
            <Button
              sx={{
                borderRadius: "10px",
                border: "2px solid #818181",
                width: "150px",
                height: "40px",
                color: "#818181",
                fontWeight: "bold",
                fontSize: "16px",
                textTransform: "none",
              }}
            >
              + Add Member
            </Button>
          </Box>
        </Box>
        {/* Mentor */}
        <Box>
          <Box
            sx={{
              margin: "20px 0 0 10px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#818181",
              }}
            >
              Mentor
            </Typography>
          </Box>
          <Box
            className="nameMentor"
            sx={{ display: "flex", flexDirection: "row", marginLeft: "20px" }}
          >
            <TextField type="text" size="small" sx={{ width: "350px" }} />
          </Box>
          <Box
            sx={{
              margin: "10px 50px 20px 20px",
              color: "#818181",
            }}
          >
            <InfoItem label="Full Name" value="Tran Thi Thuy Trinh" />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "5px",
              }}
            >
              <InfoItem
                label="Scientific Name:"
                value="Dr. Tran Thi Thuy Trinh"
              />
              <InfoItem label="Degree" value="Doctor" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "5px",
              }}
            >
              <InfoItem label="Phone" value="0913350642" />
              <InfoItem label="Email" value="tthuytrinh@dtu.edu.vn" />
            </Box>
            <InfoItem label="Department" value="Khoa Công Nghệ Phần Mềm CMU" />
            <InfoItem label="Address" value="Biệt thự 5 đứa con Đà Nẵng" />
          </Box>
        </Box>
        {/*  The Goal Of The Subject */}
        <Box>
          <Box
            sx={{
              margin: "20px 0 0 10px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#818181",
              }}
            >
              The Goal Of The Subject
            </Typography>
          </Box>
          <Box
            sx={{
              height: "auto",
              margin: "10px 50px 20px 10px",
            }}
          >
            <TextField
              multiline
              variant="outlined"
              placeholder="Enter text here..."
              sx={{ width: "850px" }}
            />
          </Box>
        </Box>
        {/* Expected research products of the topic and applicability */}
        <Box>
          <Box
            sx={{
              margin: "20px 0 0 10px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#818181",
              }}
            >
              Expected research products of the topic and applicability
            </Typography>
          </Box>
          <Box
            sx={{
              height: "auto",
              margin: "10px 50px 20px 10px",
            }}
          >
            <TextField
              multiline
              variant="outlined"
              placeholder="Enter text here..."
              sx={{ width: "850px" }}
            />
          </Box>
        </Box>
        {/* Time */}
        <Box>
          <Box
            sx={{
              margin: "20px 0 0 10px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#818181",
              }}
            >
              Time to conduct scientific research
            </Typography>
          </Box>
          <Box
            sx={{
              margin: "10px 50px 20px 20px",
              color: "#818181",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "5px",
                // justifyContent: "center",
              }}
            >
              <Box
                className="startTime"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <InfoItem label="Start Time" />
                <TextField type="date" size="small"  />
              </Box>
              <Box
                className="endTime"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft:'100px'
                }}
              >
                <InfoItem label="End Time" />
                <TextField type="date" size="small" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          className="btnCreate"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "10px 0 20px 0",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#D82C2C",
              borderRadius: "10px",
              width: "150px",
              height: "40px",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "20px",
              textTransform: "none",
            }}
          >
            Create
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CreateProject;
