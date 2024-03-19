import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
  TextareaAutosize,
  Autocomplete,
  Snackbar,
  Alert,
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
  const options = [
    { label: "Dr. Tran Thi Thuy Trinh", value: 1 },
    { label: "Dr. Nguyen Dinh Huy", value: 2 },
    { label: "Dr. Nguyen Duc Man", value: 3 },
  ];

  const [studentCode, setStudentCode] = useState("");
  const [showInfo, setShowInfo] = useState(false);
  const [members, setMembers] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [isOpenA, setIsOpenA] = useState(false);
  const [statusA, setStatusA] = useState("success");
  const [messageA, setMessageA] = useState("");

  const handleStudentCodeChange = (event) => {
    setStudentCode(event.target.value);
    if (event.target.value === "26211329003") {
      setShowInfo(true);
    } else {
      setShowInfo(false);
    }
  };

  const handleDeleteMember = (memberId) => {
    const updatedMembers = members.filter((member) => member.id !== memberId);
    setMembers(updatedMembers);
  };

  const handleAddMember = () => {
    const newMember = {
      id: members.length + 1,
      studentCode: studentCode,
    };
    setMembers([...members, { id: members.length + 1 }]);
  };

  const handleSelectMentor = (event, newValue) => {
    const isValidMentor = options.some(
      (option) => option.label === newValue.label
    );

    if (isValidMentor) {
      setSelectedMentor(newValue);
    } else {
      setSelectedMentor(null);
    }
  };

  const handleStartTimeChange = (event) => {
    const inputStartTime = event.target.value;
    if (inputStartTime >= getCurrentDate()) {
      setStartTime(inputStartTime);
    } else {
      setStatusA("warning");
      setMessageA("Start Time must be before Today.");
      setIsOpenA(true);
    }
  };

  const handleEndTimeChange = (event) => {
    const inputEndTime = event.target.value;
    if (inputEndTime > startTime) {
      setEndTime(inputEndTime);
    } else {
      setStatusA("warning");
      setMessageA("End Time must be after Start Time.");
      setIsOpenA(true);
    }
  };

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
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
          Create Project
        </Typography>
      </Box>

      <Box>
        <TextField
          size="medium"
          label="Project Name"
          sx={{
            marginTop: "50px",
            width: "95%",
          }}
        ></TextField>

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
          {members.map((member) => (
            <Box key={member.id} className="member">
              <Box
                className="id_student"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: "20px",
                }}
              >
                <TextField
                  type="number"
                  size="small"
                  value={studentCode}
                  onChange={handleStudentCodeChange}
                  sx={{
                    width: "170px",
                    '& .MuiInputBase-input[type="number"]::-webkit-inner-spin-button, & .MuiInputBase-input[type="number"]::-webkit-outer-spin-button':
                      {
                        "-webkit-appearance": "none",
                        margin: 0,
                      },
                    '& .MuiInputBase-input[type="number"]': {
                      "-moz-appearance": "textfield",
                    },
                  }}
                />
                <IconButton
                  onClick={() => handleDeleteMember(member.id)}
                  sx={{ position: "absolute", left: "500px" }}
                >
                  <Delete />
                </IconButton>
              </Box>
              {showInfo && (
                <Box
                  className="infoMember"
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
                  <InfoItem
                    label="Department"
                    value="Khoa Công Nghệ Phần Mềm CMU"
                  />
                  <InfoItem
                    label="Address"
                    value="60/1 Lê Thị Tính, An Khê, Thanh Khê, Đà Nẵng"
                  />
                </Box>
              )}
            </Box>
          ))}
          <Box
            className="addMember"
            sx={{
              display: "flex",
              alignItems: "center",
              marginLeft: "20px",
            }}
          >
            <Button
              onClick={handleAddMember}
              sx={{
                marginTop: "10px",
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
            {/* <Autocomplete
              disablePortal
              size="small"
              id="combo-box-demo"
              options={options}
              getOptionLabel={(option) => option.label}
              sx={{ width: 375 }}
              renderInput={(params) => <TextField {...params} />}
            /> */}
            <Autocomplete
              disablePortal
              size="small"
              id="combo-box-demo"
              options={options}
              getOptionLabel={(option) => option.label}
              value={selectedMentor}
              onChange={handleSelectMentor}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Box>
          <Box
            sx={{
              margin: "10px 50px 20px 20px",
              color: "#818181",
            }}
          >
            {selectedMentor && (
              <>
                <InfoItem label="Full Name" value="Tran Thi Thuy Trinh" />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "5px",
                  }}
                >
                  <InfoItem
                    label="Scientific Name"
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
                <InfoItem
                  label="Department"
                  value="Khoa Công Nghệ Phần Mềm CMU"
                />
                <InfoItem label="Address" value="Biệt thự 5 đứa con Đà Nẵng" />
              </>
            )}
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
            <TextareaAutosize
              style={{
                width: "850px",
                height: "250px",
                border: "2px solid #999",
                borderRadius: "10px",
                padding: "10px",
                fontSize: "20px",
              }}
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
            <TextareaAutosize
              style={{
                width: "850px",
                height: "250px",
                border: "2px solid #999",
                borderRadius: "10px",
                padding: "10px",
                fontSize: "20px",
              }}
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
                <TextField
                  type="date"
                  size="small"
                  value={startTime}
                  onChange={handleStartTimeChange}
                  inputProps={{ inputMode: 'numeric', pattern: '\\d{4}-\\d{2}-\\d{2}' }}
                />
              </Box>
              <Box
                className="endTime"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: "100px",
                }}
              >
                <InfoItem label="End Time" />
                <TextField
                  type="date"
                  size="small"
                  value={endTime}
                  onChange={handleEndTimeChange}
                />
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
              "&:hover": {
                backgroundColor: "#818181",
                color: "#000",
              },
            }}
          >
            Create
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={isOpenA}
        autoHideDuration={5000}
        onClose={(event, reason) => {
          if (reason === "clickaway") {
            setIsOpenA(false);
          }
        }}
      >
        <Alert severity={statusA} variant="filled" sx={{ width: "100%" }}>
          {messageA}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default CreateProject;
