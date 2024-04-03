import React, { useRef, useState } from "react";
import {
  Box,
  Icon,
  TextField,
  Typography,
  Button,
  IconButton,
  TextareaAutosize,
} from "@mui/material";
import {
  Person2,
  Person,
  Groups,
  AccessTime,
  DataSaverOff,
  Attachment,
  Description,
  Upload,
} from "@mui/icons-material";

function InformationProject() {
  const InfoItem = ({ label, value }) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        marginBottom: "5px",
        // width: "50%",
      }}
    >
      <Typography className="txtcel1" sx={{ fontWeight: "bold" }}>
        {label}
      </Typography>
      <Typography className="txtcel2" sx={{ marginLeft: "10px" }}>
        {value}
      </Typography>
    </Box>
  );

  const fileInputRef = useRef(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("Selected file:", file);
    setUploadedFile(file);
  };

  const project = {
    faculty: "Khoa Công Nghệ Phần Mềm",
    projectName: "StudySync Manage scientific research projects for students in Duy Tan University",
    procjectCode: "PJ01SA",
  };
  const mentor = {
    mentorName: "Dr. Tran Thi Thuy Trinh",
    mentorEmail: "ttthuytrinh@dtu.edu.vn",
    mentorPhone: "09133350642",
  };

  const leader = {
    leaderName: "Nguyen Tran Anh Thang",
    leaderEmail: "anhthang2529@gmail.com",
    leaderPhone: "0869132529",
  };

  const members = {
    membersOne: "Nguyen Hoang Quoc Anh",
    membersTwo: "Duong Nguyen Cong Luan",
    membersThree: "Nguyen Quoc Nhat",
  };
  const startTime = "24/02/2024";
  const trangThai = "In progess";

  return (
    <Box sx={{ margin: "50px 50px 0 50px", color: "#818181" }}>
      <Box
        className="header"
        sx={{ display: "flex", flexDirection: "row", marginBottom: "20px" }}
      >
        <Box className="header_left" sx={{ width: "100%" }}>
          <Typography
            variant="h5"
            sx={{
              color: "#D82C2C",
              fontWeight: "bold",
              //   width:'100%'
            }}
          >
            {project.faculty}
          </Typography>
          <Box>
            <InfoItem label="Project code" value={project.procjectCode} />
          </Box>
        </Box>
        <Box
          className="header_right"
          sx={{ display: "flex", flexDirection: "row" }}
        >
          <Typography sx={{ fontSize: "24px" }}>
           {project.projectName}
          </Typography>
        </Box>
      </Box>

      <Box
        className="container"
        sx={{
          //   width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box className="contLeft" sx={{ width: "70%" }}>
          <Box className="describe" sx={{ marginBottom: "20px" }}>
            <InfoItem label="Describe project" />

            <TextareaAutosize
              style={{
                width: "700px",
                height: "200px",
                border: "2px solid #999",
                borderRadius: "10px",
                padding: "10px",
                fontSize: "20px",
              }}
            />
          </Box>
          <Box className="technology" sx={{ marginBottom: "20px" }}>
            <InfoItem label="Technology" />

            <TextareaAutosize
              style={{
                width: "700px",
                height: "200px",
                border: "2px solid #999",
                borderRadius: "10px",
                padding: "10px",
                fontSize: "20px",
              }}
            />
          </Box>

          <Box className="document" sx={{ marginBottom: "20px" }}>
            <InfoItem label="Document Uploaded" />
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />

            <Box
              className="proposal"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon>
                <Description />
              </Icon>
              <Typography sx={{ width: "40%" }}>Proposal</Typography>

              <Box className="upload">
                <IconButton onClick={handleUploadClick}>
                  <Upload />
                </IconButton>
              </Box>
            </Box>
            {uploadedFile && (
              <Typography
                sx={{
                  // width: "100%",
                  paddingLeft: "25px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {uploadedFile.name}
              </Typography>
            )}
            <Box
              className="projectPlan"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon>
                <Description />
              </Icon>
              <Typography sx={{ width: "40%" }}>Project Plan</Typography>
              <IconButton>
                <Upload />
              </IconButton>
            </Box>
            <Box
              className="productBacklog"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon>
                <Description />
              </Icon>
              <Typography sx={{ width: "40%" }}>Product Backlog</Typography>
              <IconButton>
                <Upload />
              </IconButton>
            </Box>
            <Box
              className="userStories"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon>
                <Description />
              </Icon>
              <Typography sx={{ width: "40%" }}>User Stories</Typography>
              <IconButton>
                <Upload />
              </IconButton>
            </Box>
            <Box
              className="architecture"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon>
                <Description />
              </Icon>
              <Typography sx={{ width: "40%" }}>Architecture Design</Typography>
              <IconButton>
                <Upload />
              </IconButton>
            </Box>
            <Box
              className="database"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon>
                <Description />
              </Icon>
              <Typography sx={{ width: "40%" }}>Database Design</Typography>
              <IconButton>
                <Upload />
              </IconButton>
            </Box>
            <Box
              className="userInter"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon>
                <Description />
              </Icon>
              <Typography sx={{ width: "40%" }}>
                User Interface Design
              </Typography>
              <IconButton>
                <Upload />
              </IconButton>
            </Box>
            <Box
              className="testCase"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon>
                <Description />
              </Icon>
              <Typography sx={{ width: "40%" }}>Test Case</Typography>
              <IconButton>
                <Upload />
              </IconButton>
            </Box>
            <Box
              className="testPlan"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon>
                <Description />
              </Icon>
              <Typography sx={{ width: "40%" }}>Test Plan</Typography>
              <IconButton>
                <Upload />
              </IconButton>
            </Box>
            <Box
              className="sprintBacklog"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon>
                <Description />
              </Icon>
              <Typography sx={{ width: "40%" }}>Sprint Backlog</Typography>
              <IconButton>
                <Upload />
              </IconButton>
            </Box>
          </Box>
        </Box>

        <Box
          className="contRight"
          sx={{
            backgroundColor: "#F6E8E8",
            width: "360px",
            height: "570px",
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              margin: "20px 10px ",
            }}
          >
            <Box
              className="mentor"
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <Icon sx={{ fontSize: 60 }}>
                <Person2 fontSize="large" />
              </Icon>
              <Box sx={{ marginTop: "20px" }}>
                <InfoItem label="Mentor" />
                <Typography>{mentor.mentorName}</Typography>
                <Typography>{mentor.mentorEmail}</Typography>
                <Typography>{mentor.mentorPhone}</Typography>
              </Box>
            </Box>
            <Box
              className="leader"
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <Icon sx={{ fontSize: 60 }}>
                <Person fontSize="large" />
              </Icon>
              <Box sx={{ marginTop: "20px" }}>
                <InfoItem label="Leader" />
                <Typography>{leader.leaderName}</Typography>
                <Typography>{leader.leaderEmail}</Typography>
                <Typography>{leader.leaderPhone}</Typography>
              </Box>
            </Box>
            <Box
              className="group"
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <Icon sx={{ fontSize: 60 }}>
                <Groups fontSize="large" />
              </Icon>
              <Box sx={{ marginTop: "20px" }}>
                <InfoItem label="Group members" />
                <Typography>{members.membersOne}</Typography>
                <Typography>{members.membersTwo}</Typography>
                <Typography>{members.membersThree}</Typography>
              </Box>
            </Box>
            <Box
              className="startTime"
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <Icon sx={{ fontSize: 60 }}>
                <AccessTime fontSize="large" />
              </Icon>
              <Box sx={{ marginTop: "20px" }}>
                <InfoItem label="Start" />
                <Typography>{startTime}</Typography>
              </Box>
            </Box>
            <Box
              className="startTime"
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <Icon sx={{ fontSize: 60 }}>
                <DataSaverOff fontSize="large" />
              </Icon>
              <Box sx={{ marginTop: "20px" }}>
                <InfoItem label="Status" />
                <Typography>{trangThai}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="link">
        <InfoItem label="Link Project" />
        <Box>
          <Icon>
            <Attachment />
          </Icon>
          <TextField
            size="small"
            sx={{ width: "600px", paddingLeft: "10px" }}
          />
        </Box>
      </Box>
      <Box
        className="btnCreate"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
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
              background: "#fff",
              color: "#D82C2C",
              border: "1px solid #999",
            },
          }}
        >
          Update
        </Button>
      </Box>
    </Box>
  );
}

export default InformationProject;
