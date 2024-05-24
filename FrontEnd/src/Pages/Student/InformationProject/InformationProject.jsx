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
  Snackbar,
  Alert,
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
import { checkDocument, getTopicApprovedDetailForStudent, updateTopic } from '../../../api/studentApi';
import { v4 as uuid } from "uuid";


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

  const [fileInputRefs, setFileInputRefs] = useState([useRef(null)]);
  const [uploadedFile, setUploadedFile] = useState(null);
  const handleUploadClick = () => {
    fileInputRefs[0].current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("Selected file:", file);
    setUploadedFile(file);
  };

  const [message, setMessage] = useState("");
  const [isCheckAlert, setIsCheckAlert] = useState(false);
  const [alertType, setAlertType] = useState("error");
  const [infoTopic, setInfoTopic] = useState({});
  const [topicDescription, setTopicDescription] = useState();
  const [topicGoalSubject, setTopicGoalSubject] = useState();
  const [topicExpectedResearch, setTopicExpectedResearch] = useState();
  const [topicTech, setTopicTech] = useState();
  const [folders, setFolders] = useState([{ id: uuid(), name: 'New Folder', files: [] }]);
  const [newFolderName, setNewFolderName] = useState('');

  const onChangeName = (value, index) => {
    const newFolder = [...folders];
    newFolder[index].name = value;
    setFolders(newFolder);
  }

  const onCheckDuplicated = (folders) => {
    for (let i = 0; i < folders.length; i++) {
      for (let j = i + 1; j < folders.length; j++) {
        if (folders[i].name === folders[j].name) {
          return false;
        }
      }
    }
    return true;
  }


  const addFolder = () => {
    const isNewFolderExist = folders.some(folder => folder.name === 'New Folder');
    if (!isNewFolderExist) {
      if (onCheckDuplicated(folders)) {
        const newFolder = { id: uuid(), name: `New Folder`, files: [] };
        const newFileInputRef = { current: null };
        setFileInputRefs([...fileInputRefs, newFileInputRef])
        setFolders([...folders, newFolder]);
      }
      else {
        setMessage(`Folder name already has exist.`);
        setAlertType("error");
        setIsCheckAlert(true);
        setTimeout(() => {
          setIsCheckAlert(false);
        }, 4000);
      }
    } else {
      setMessage(`A folder with name "New Folder" already exists.`);
      setAlertType("error");
      setIsCheckAlert(true);
      setTimeout(() => {
        setIsCheckAlert(false);
      }, 4000);
    }
  };
  const deleteFolder = (id) => {
    const newFolder = folders.filter(folder => folder.id !== id);

    setFolders(newFolder); // Loại bỏ folder có id tương ứng khỏi danh sách
  };

  const upFile = (index) => {
    console.log(fileInputRefs[index])
    fileInputRefs[index].current.click();
  }

  const onChangeFile = (e, index) => {
    const newFolders = [...folders];
    newFolders[index].files.push({ id: uuid(), file: e.target.files[0], name: e.target.value, new: true });
    setFolders(newFolders);
  }

  const onDeleteFile = (folderIndex, fileId) => {
    const newFolders = [...folders];
    const newFiles = newFolders[folderIndex].files.filter(item => item.id !== fileId);
    newFolders[folderIndex].files = newFiles;
    setFolders(newFolders);
  }

  useEffect(() => {
    getTopicApprovedDetailForStudent(topicCode)
      .then(data => {
        setInfoTopic(data);
        setTopicDescription(data?.topic?.topicDescription);
        setTopicGoalSubject(data?.topic?.topicGoalSubject);
        setTopicExpectedResearch(data?.topic?.topicExpectedResearch);
        setTopicTech(data?.topic?.topicTech);
        if (data?.listDocument.length > 0) {
          setFolders(data?.listDocument);
          const listRef = [];
          data?.listDocument.forEach(item => {
            listRef.push({ current: null });
          });
          setFileInputRefs(listRef);
        }
      })
      .catch((e) => {
        console.log(e);
      })
  }, [topicCode])

  console.log(folders)

  const openDialog = async () => {
    const formData = new FormData();
    for (let i = 0; i < folders.length; i++) {
      for (let j = 0; j < folders[i].files.length; j++) {
        if (folders[i].files[j].new) {
          formData.append(folders[i].name, folders[i].files[j].file);
        }
      }
    }
    const res = await checkDocument(formData);
    console.log(res);
    
  }

  const onUpdateTopic = async () => {
    const formData = new FormData();
    formData.append('topicDescription', topicDescription)
    formData.append('topicGoalSubject', topicDescription)
    formData.append('topicExpectedResearch', topicDescription)
    formData.append('topicTech', topicDescription)
    for (let i = 0; i < folders.length; i++) {
      for (let j = 0; j < folders[i].files.length; j++) {
        if (folders[i].files[j].new) {
          formData.append(folders[i].name, folders[i].files[j].file);
        }
      }
    }
    const res = await updateTopic(topicCode, formData);
    if (res.status === 200) {
      const newFolders = [...folders];
      for (let i = 0; i < folders.length; i++) {
        for (let j = 0; j < folders[i].files.length; j++) {
          if (folders[i].files[j].new) {
            newFolders[i].files[j].new = false;
          }
        }
      }
      setFolders(newFolders);
    }
  }
  console.log(infoTopic?.listDocument);

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
              value={topicDescription}
              onChange={(e) => { setTopicDescription(e.target.value) }}
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
              value={topicTech}
              onChange={(e) => { setTopicTech(e.target.value) }}
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
              value={topicGoalSubject}
              onChange={(e) => { setTopicGoalSubject(e.target.value) }}
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
              value={topicExpectedResearch}
              onChange={(e) => { setTopicExpectedResearch(e.target.value) }}
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
              {folders?.map((folder, index) => (
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
                      onBlur={(e) => { onChangeName(e.target.value, index) }}
                      defaultValue={folder.name}
                    // onChange={event => {
                    //   const newName = event.target.value;
                    //   setFolders(prevFolders => prevFolders.map(item => (item.id === folder.id ? { ...item, name: newName } : item)));
                    // }}
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
                      ref={fileInputRefs[index]}
                      type="file"
                      style={{ display: 'none' }}
                      onChange={(e) => { onChangeFile(e, index); e.target.value = '' }}
                    />
                    {
                      folder.files?.map((item, fileIndex) => (
                        <Box key={item.id} className="file">
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
                              <Typography
                                onClick={() => {
                                  fetch(`http://localhost:2109/topic/downloadfile/${item.source}`)
                                    .then(response => response.blob())
                                    .then(blob => {
                                      console.log(blob)
                                      const url = window.URL.createObjectURL(blob);
                                      // Tạo một thẻ a để tải xuống file
                                      const a = document.createElement('a');
                                      a.href = url;
                                      console.log(blob.type);
                                      if (!item.name.includes('.')) {
                                        switch (blob.type.split('/')[1]) {
                                          case 'vnd.openxmlformats-officedocument.wordprocessingml.document':
                                            a.download = `${item.name}.docx`;
                                            break;
                                          case 'vnd.openxmlformats-officedocument.spreadsheetml.sheet':
                                            a.download = `${item.name}.xlsx`;
                                            break;
                                          case 'pdf':
                                            a.download = `${item.name}.pdf`;
                                            break;
                                          case 'zip':
                                            a.download = `${item.name}.zip`;
                                            break;
                                          default:
                                            console.log('Unsupported file type');
                                        }
                                      } else {
                                        // Nếu đã có phần mở rộng, không cần thêm "docx"
                                        a.download = item.name;
                                      }
                                      // a.download = `${item.name}.${blob.type.split('/')[1]}`; // Tên của file khi tải xuống
                                      // a.download = 'file.pdf'; // Tên của file khi tải xuống
                                      // Thêm thẻ a vào body và kích hoạt sự kiện click để tải xuống
                                      document.body.appendChild(a);
                                      a.click();
                                      // Xóa URL khi đã tải xuống xong và sau khi sự kiện onload của thẻ a được kích hoạt
                                      a.onload = function () {
                                        window.URL.revokeObjectURL(url);
                                        document.body.removeChild(a); // Xóa thẻ a
                                      };
                                    })
                                    .catch(error => console.log(error));
                                  // console.log(item.name);


                                }}
                                ClassName="documentsPJ" sx={{
                                  marginTop: '10px',
                                  fontSize: '18px',
                                  marginLeft: '10px',
                                  color: '#1e385d',
                                  marginBottom: '8px'
                                }}>

                                {item.name?.split('\\').pop()}
                              </Typography>
                              <Button onClick={() => onDeleteFile(index, item.id)}>
                                <Delete />
                              </Button>
                            </Box>
                          </Box>
                        </Box>
                      ))
                    }
                    <Button onClick={() => upFile(index)} sx={{
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
          onClick={openDialog}
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
      <Snackbar
        open={isCheckAlert}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert variant="filled" severity={alertType}>
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default InformationProject;
