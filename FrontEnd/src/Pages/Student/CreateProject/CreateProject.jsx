import React, { useState, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";

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

  const [projectName, setProjectName] = useState("");
  const [goalOfSubject, setGoalOfSubject] = useState("");
  const [researchProducts, setResearchProducts] = useState("");
  const [studentCode, setStudentCode] = useState("");
  const [showInfo, setShowInfo] = useState(false);
  const [members, setMembers] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [isOpenA, setIsOpenA] = useState(false);
  const [statusA, setStatusA] = useState("success");
  const [messageA, setMessageA] = useState("");

  const [nextId, setNextId] = useState(1);

  const handleStudentCodeChange = (event) => {
    const code = event.target.value;
    setStudentCode(code);
    if (
      event.target.value === "26211329003" ||
      event.target.value === "26211236334"
    ) {
      setShowInfo(true);
    } else {
      setShowInfo(false);
    }
  };

  const handleAddMember = () => {
    if (members.length === 1) {
      setStatusA("warning");
      setMessageA("Please add at least one member!");
      setIsOpenA(true);
      return;
    }

    const newMember = {
      id: nextId,
      studentCode: studentCode,
    };
    setNextId(nextId + 1);
    setMembers([...members, newMember]);
    setStudentCode("");
    console.log("Add Member: ", newMember);
  };

  const handleDeleteMember = (id) => {
    const updatedMembers = members.filter((member) => member.id !== id);
    if (updatedMembers.length === members.length) {
      setStatusA("warning");
      setMessageA("Failed to delete member!");
      setIsOpenA(true);
      return;
    }
    setMembers(updatedMembers);
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
    const today = new Date();
    const sevenDaysFromNow = new Date(today.setDate(today.getDate() + 6));

    if (new Date(inputStartTime) >= sevenDaysFromNow) {
      setStartTime(inputStartTime);

      const threeMonthsFromStart = new Date(
        new Date(inputStartTime).setMonth(
          new Date(inputStartTime).getMonth() + 3
        )
      );
      if (!endTime || new Date(endTime) > threeMonthsFromStart) {
        setEndTime(threeMonthsFromStart.toISOString().split("T")[0]);
      }
    } else {
      setStatusA("warning");
      setMessageA("Start Time must be at least 7 days from today.");
      setIsOpenA(true);
    }
  };

  const handleEndTimeChange = (event) => {
    const inputEndTime = event.target.value;
    const threeMonthsFromStart = new Date(
      new Date(startTime).setMonth(new Date(startTime).getMonth() + 3)
    );

    if (
      new Date(inputEndTime) > new Date(startTime) &&
      new Date(inputEndTime) >= threeMonthsFromStart
    ) {
      setEndTime(inputEndTime);
    } else {
      setStatusA("warning");
      setMessageA("End Time must be after Start Time and within 3 months.");
      setIsOpenA(true);
    }
  };

  const leader = {
    leaderName: "Thang, Nguyen Tran Anh",
    leaderCode: "26211329003",
    leaderPhone: "0869132529",
    leaderClass: "K26 CMU-TPM4",
    leaderEmail: "anhthang2529@gmail.com",
    leaderDepartment: "Khoa Công Nghệ Phần Mềm CMU",
    leaderAddress: "60/1 Lê Thị Tính, An Khê, Thanh Khê, Đà Nẵng",
  };

  const addMembers = {
    memberName: "Luan, Duong Nguyen Cong",
    memberCode: "26211236334",
    memberPhone: "0796503172",
    memberClass: "K26 CMU-TPM4",
    memberEmail: "duongnguyencongluan@gmail.com",
    memberDepartment: "Khoa Công Nghệ Phần Mềm CMU",
    memberAddress: "Tân Hạnh, Hòa Phước, Hòa Vang, Đà Nẵng",
  };

  const mentor = {
    mentorName: "Tran Thi Thuy Trinh",
    scientificName: "Dr. Tran Thi Thuy Trinh",
    mentorPhone: "0913350642",
    degree: "Doctor",
    mentorEmail: "tthuytrinh@dtu.edu.vn",
    mentorDepartment: "Khoa Công Nghệ Phần Mềm CMU",
    mentorAddress: "Biệt thự 5 đứa con Đà Nẵng",
  };

  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value);
  };

  const handleGoalOfSubjectChange = (event) => {
    setGoalOfSubject(event.target.value);
  };

  const handleResearchProductsChange = (event) => {
    setResearchProducts(event.target.value);
  };

  const usenavigate = useNavigate();

  const handleCreateProject = () => {
    let check = [];

    if (!projectName) {
      check.push("Project Name is required.");
    }
    if (members.length < 1) {
      check.push("Please add at least one member.");
    }
    if (!selectedMentor) {
      check.push("Please select a mentor.");
    }
    if (!goalOfSubject.trim()) {
      check.push("The Goal Of The Subject is required.");
    }
    if (!researchProducts.trim()) {
      check.push("Expected research products are required.");
    }
    if (!startTime || !endTime) {
      check.push("Please provide start and end time.");
    }

    if (check.length > 0) {
      console.log("Errors found:", check);
      setIsOpenA(true);
      setStatusA("error");
      setMessageA(check.join("\n"));
    } else {
      console.log("No errors found. Proceeding...");
      setIsOpenA(true);
      setStatusA("success");
      setMessageA(" Project created successfully!");
      // setTimeout(() => {
      //   navigate("/đường dẫn");
      // }, 1000);
      usenavigate("/student/Project");
    }
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
          value={projectName}
          onChange={handleProjectNameChange}
          sx={{
            marginTop: "50px",
            width: "95%",
          }}
        ></TextField>

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
              Leader
            </Typography>
          </Box>

          <Box
            sx={{
              margin: "10px 50px 20px 20px",
              color: "#818181",
            }}
          >
            <InfoItem label="Full Name" value={leader.leaderName} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "5px",
              }}
            >
              <InfoItem label="Student Code" value={leader.leaderCode} />
              <InfoItem label="Class" value={leader.leaderClass} />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "5px",
              }}
            >
              <InfoItem label="Phone" value={leader.leaderPhone} />
              <InfoItem label="Email" value={leader.leaderEmail} />
            </Box>
            <InfoItem label="Department" value={leader.leaderDepartment} />
            <InfoItem label="Address" value={leader.leaderAddress} />
          </Box>
        </Box>

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
                  value={member.studentCode}
                  onChange={(e) => {
                    handleStudentCodeChange(e);
                    setMembers(
                      members.map((m) =>
                        m.id === member.id
                          ? { ...m, studentCode: e.target.value }
                          : m
                      )
                    );
                  }}
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
                  <InfoItem label="Full Name" value={addMembers.memberName} />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      marginBottom: "5px",
                    }}
                  >
                    <InfoItem
                      label="Student Code"
                      value={addMembers.memberCode}
                    />
                    <InfoItem label="Class" value={addMembers.memberClass} />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      marginBottom: "5px",
                    }}
                  >
                    <InfoItem label="Phone" value={addMembers.memberPhone} />
                    <InfoItem label="Email" value={addMembers.memberEmail} />
                  </Box>
                  <InfoItem
                    label="Department"
                    value={addMembers.memberDepartment}
                  />
                  <InfoItem label="Address" value={addMembers.memberAddress} />
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
                <InfoItem label="Full Name" value={mentor.mentorName} />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "5px",
                  }}
                >
                  <InfoItem
                    label="Scientific Name"
                    value={mentor.scientificName}
                  />
                  <InfoItem label="Degree" value={mentor.degree} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "5px",
                  }}
                >
                  <InfoItem label="Phone" value={mentor.mentorPhone} />
                  <InfoItem label="Email" value={mentor.mentorEmail} />
                </Box>
                <InfoItem label="Department" value={mentor.mentorDepartment} />
                <InfoItem label="Address" value={mentor.mentorAddress} />
              </>
            )}
          </Box>
        </Box>

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
              value={goalOfSubject}
              onChange={handleGoalOfSubjectChange}
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
              value={researchProducts}
              onChange={handleResearchProductsChange}
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
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "\\d{4}-\\d{2}-\\d{2}",
                  }}
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
            onClick={handleCreateProject}
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
        autoHideDuration={6000}
        onClose={(event, reason) => {
          if (reason === "clickaway") {
            setIsOpenA(false);
          }
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
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
