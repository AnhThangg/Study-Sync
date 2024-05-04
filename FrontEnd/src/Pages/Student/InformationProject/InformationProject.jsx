import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom"
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
  Folder,
  FileUpload,
  CreateNewFolder,
  Person,
  AccessTime,
  DataSaverOff,
  Attachment,
  Description,
  Upload,
  Delete,
  Article, Person2, Link, Groups, AccessAlarm, WorkspacePremium
} from "@mui/icons-material";
import { getTopicApprovedDetailForStudent } from '../../../api/studentApi';

function InformationProject() {
  const topicCode = useParams().id;
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

  const [infoTopic, setInfoTopic] = useState({});
  const [topicDescription, setTopicDescription] = useState();
  const [topicGoalSubject, setTopicGoalSubject] = useState();
  const [topicExpectedResearch, setTopicExpectedResearch] = useState();
  const [topicTech, setTopicTech] = useState();
  const [folders, setFolders] = useState([]);
  const [newFolderName, setNewFolderName] = useState('');

  useEffect(() => {
    // Thêm một thư mục mặc định khi component được khởi tạo
    const defaultFolder = { id: 1, name: 'Folder 1' };
    setFolders([defaultFolder]);
  }, []);
  const addFolder = () => {
    // Tạo một thư mục mới với một id duy nhất và tên mặc định
    const newFolder = { id: folders.length + 1, name: `Folder ${folders.length + 1}` };
    setFolders([...folders, newFolder]); // Thêm thư mục mới vào danh sách
  };
  const deleteFolder = (id) => {
    setFolders(folders.filter(folder => folder.id !== id)); // Loại bỏ folder có id tương ứng khỏi danh sách
  };


  useEffect(() => {
    getTopicApprovedDetailForStudent(topicCode)
      .then(data => {
        setInfoTopic(data)
      })
      .catch((e) => {
        console.log(e);
      })
  }, [topicCode])
  console.log(topicGoalSubject);

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
            {infoTopic.facultyName}
          </Typography>
          <Box>
            <InfoItem label="Project code" value={infoTopic.topic?.topicCode} />
          </Box>
        </Box>
        <Box
          className="header_right"
          sx={{ display: "flex", flexDirection: "row" }}
        >
          <Typography sx={{ fontSize: "24px" }}>
            {infoTopic.topic?.topicName}
          </Typography>
        </Box>
      </Box>

      <Box
        className="container"
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box className="contLeft" sx={{ width: "70%" }}>
          <Box className="describe" sx={{ marginBottom: "20px" }}>
            <InfoItem label="Describe project" />

            <TextareaAutosize
              value={infoTopic.topic?.topicDescription}
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
              value={infoTopic.topic?.topicTech}
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

          <Box className="topicGoalSubject" sx={{ marginBottom: "20px" }}>
            <InfoItem label="The Goal Of The Subject" />

            <TextareaAutosize
              value={infoTopic.topic?.topicGoalSubject}
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

          <Box className="topicExpectedResearch" sx={{ marginBottom: "20px" }}>
            <InfoItem label="Expected research products of the topic and applicability" />

            <TextareaAutosize
              value={infoTopic.topic?.topicExpectedResearch}
              // onChange={(e)=>{e.target.value}}
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



            <Box className="createFolder" sx={{
              margin: '10px 0 30px 10px'
            }}>
              {folders.map(folder => (
                <Box className="folder" key={folder.id} sx={{
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <Box className="rowFolder" sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}>
                    <Folder fontSize="large" sx={{
                      color: '#D82C2C'
                    }} />
                    <TextField
                      sx={{
                        width: "500px",
                        paddingLeft: "10px"
                      }}
                      size="small"
                      value={folder.name}
                      onChange={event => {
                        const newName = event.target.value;
                        setFolders(prevFolders => prevFolders.map(item => (item.id === folder.id ? { ...item, name: newName } : item)));
                      }}
                    />
                    <Button onClick={() => deleteFolder(folder.id)}>
                      <Delete
                        sx={{
                          color: '#D82C2C'
                        }}
                        fontSize="large" />
                    </Button>
                  </Box>
                  <Box className="chooseFile" sx={{
                    marginLeft: '50px'
                  }}>
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: 'none' }}
                      onChange={handleFileChange}
                    />
                    <Box className="file">
                      <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: 'auto',
                        height: '100%',
                        alignItems: 'center'
                      }}>
                        <Article fontSize="large" sx={{
                          color: '#1e385d'
                        }}></Article>
                        <Box sx={{
                          width: 'auto',
                          height: '100%',
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          <Typography ClassName="documentsPJ" sx={{
                            marginTop: '10px',
                            fontSize: '18px',
                            marginLeft: '10px',
                            color: '#1e385d',
                            marginBottom: '8px'
                          }}>
                            {fileInputRef.current?.value?.split('\\').pop()}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Button onClick={() => { fileInputRef.current.click() }} sx={{
                      background: "#1e385d",
                      color: "#fff",
                      border: "1px solid #1e385d",
                      "&:hover": {
                        border: '1px solid #1e385d',
                        color: '#1e385d',
                      },
                    }}>
                      <FileUpload />
                      Upload File
                    </Button>
                  </Box>
                </Box>
              ))}
              <Button
                onClick={addFolder}
                sx={{
                  margin: '10px 0',
                  gap: '5px',
                  background: "#D82C2C",
                  color: "#fff",
                  border: "1px solid #D82C2C",
                  "&:hover": {
                    border: '1px solid #D82C2C',
                    color: '#D82C2C',
                  },
                }}>
                <CreateNewFolder />
                Add Folder
              </Button>
            </Box>










          </Box>
        </Box>

        <Box
          className="contRight"
          sx={{
            backgroundColor: "#F6E8E8",
            width: "fit-content",
            height: "fit-content",
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              margin: "10px 35px 35px 10px",
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
                <Typography>{infoTopic.mentor?.mentorScientificName}</Typography>
                <Typography>{infoTopic.mentor?.mentorEmail}</Typography>
                <Typography>{infoTopic.mentor?.mentorPhone}</Typography>
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
                <Typography>{infoTopic.leader?.studentFullname}</Typography>
                <Typography>{infoTopic.leader?.studentEmail}</Typography>
                <Typography>{infoTopic.leader?.studentPhone}</Typography>
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
                {
                  infoTopic.groupMembers?.map(member => (
                    <Typography>{member.studentFullname}</Typography>
                  ))
                }
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
                <Typography>{infoTopic.topicDate}</Typography>
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
                <InfoItem label="Status (yyyy-mm-dd)" />
                <Typography>{infoTopic.topic?.topicStatus}</Typography>
              </Box>
            </Box>
          </Box>
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
