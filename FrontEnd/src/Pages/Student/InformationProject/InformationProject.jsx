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
    console.log("Selected file:", file); // Kiểm tra xem file đã được chọn hay không
    setUploadedFile(file);
  };
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
            Khoa Công Nghệ Phần Mềm
          </Typography>
          <Box>
            <InfoItem label="Project code" value="PJ01SA" />
          </Box>
        </Box>
        <Box
          className="header_right"
          sx={{ display: "flex", flexDirection: "row" }}
        >
          <Typography sx={{ fontSize: "24px" }}>
            StudySync Manage scientific research projects for students in Duy
            Tan University
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
              <IconButton >
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
                <Typography>Dr. Tran Thi Thuy Trinh</Typography>
                <Typography>ttthuytrinh@dtu.edu.vn</Typography>
                <Typography>09133350642</Typography>
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
                <Typography>Nguyen Tran Anh Thang</Typography>
                <Typography>anhthang2529@gmail.com</Typography>
                <Typography>0869132529</Typography>
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
                <Typography>Nguyen Hoang Quoc Anh</Typography>
                <Typography>Duong Nguyen Cong Luan</Typography>
                <Typography>Nguyen Quoc Nhat</Typography>
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
                <Typography>24/02/2024</Typography>
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
                <Typography>In progess</Typography>
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
              backgroundColor: "#818181",
              color: "#000",
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
