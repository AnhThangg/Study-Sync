import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
  TextareaAutosize,
  Snackbar,
  Alert,
  MenuItem,
} from "@mui/material";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateTimeRangePicker } from '@mui/x-date-pickers-pro/DateTimeRangePicker';
import "./CreateProject.scss";
import { Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { getInfo, getNameMentor } from '../../../api/infoApi';
import { getStudent } from "../../../api/studentApi";

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

  const [topicName, setTopicName] = useState("");
  const [goalOfSubject, setGoalOfSubject] = useState("");
  const [researchProducts, setResearchProducts] = useState("");
  const [studentCode, setStudentCode] = useState("");
  const [showInfo, setShowInfo] = useState(false);
  const [member, setMember] = useState();
  const [members, setMembers] = useState([undefined]);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [message, setMessage] = useState('');
  const [isCheckAlert, setIsCheckAlert] = useState(false);
  const [alertType, setAlertType] = useState('error');
  const [leader, setLeader] = useState();
  const [listMentor, setListMentor] = useState([]);
  const [mentor, setMentor] = useState('')
  const currentDate = new Date().toISOString().split('T')[0]; // Lấy ngày hiện tại



  useEffect(() => {
    getInfo()
      .then(data => {
        setLeader(data)
      })
      .catch((e) => {
        console.log(e);
      })
  }, [])

  useEffect(() => {
    getNameMentor(leader?.facultyCode)
      .then(data => {
        setListMentor(data)
      })
      .catch((e) => {
        console.log(e);
      })
  }, [leader])


  const onSearchMember = async (id, index) => {
    if (id !== '') {
      const res = await getStudent(id);

      if (res.status === 'success') {
        if ((members.find(item => item?.studentCode === res.student.studentCode))) {
          setMessage('This student is already on the member list');
          setAlertType('error');
          setIsCheckAlert(true);
          setTimeout(() => {
            setIsCheckAlert(false);
          }, 4000)
        }
        else if (res.student.studentCode === leader.studentCode) {
          setMessage('You are the Leader, do not enter your Student Code');
          setAlertType('error');
          setIsCheckAlert(true);
          setTimeout(() => {
            setIsCheckAlert(false);
          }, 4000)
        }
        else {
          const newMembers = [...members];
          newMembers[index] = res.student;
          setMembers(newMembers);
        }
      } else {
        const newMembers = [...members];
        newMembers[index] = undefined;
        setMembers(newMembers);
      }
    }

    // if (memberSearch) {
    //   setMember(memberSearch)
    // }
  }

  console.log(members)

  const onCreateTopic = () => {
    (!researchProducts) && setMessage('Applicability cannot be left blank');
    (!goalOfSubject) && setMessage('Goal Of The Subject cannot be left blank');
    (!topicName) && setMessage('TopicName cannot be left blank');
    setAlertType('error');
    setIsCheckAlert(true);
    setTimeout(() => {
      setIsCheckAlert(false);
    }, 4000)
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
          label="Topic Name"
          value={topicName}
          onChange={(e) => { setTopicName(e.target.value) }}
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
            <InfoItem label="Full Name" value={leader?.studentFullname} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "5px",
              }}
            >
              <InfoItem label="Student Code" value={leader?.studentCode} />
              <InfoItem label="Class" value={leader?.studentClass} />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "5px",
              }}
            >
              <InfoItem label="Phone" value={leader?.studentPhone} />
              <InfoItem label="Email" value={leader?.studentEmail} />
            </Box>
            <InfoItem label="Department" value={leader?.facultyName} />
            <InfoItem label="Address" value={leader?.studentAddress} />
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




          {members.map((item, index) => (
            <Box className="member">
              <Box
                className="id_student"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: "20px",
                  gap: '10px'
                }}
              >
                <TextField
                  type="number"
                  size="small"

                  onChange={(e) => onSearchMember(e.target.value, index)}
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
                <IconButton>
                  <Delete />
                </IconButton>
              </Box>
              {(item) && <Box
                className="infoMember"
                sx={{
                  margin: "10px 50px 20px 20px",
                  color: "#818181",
                }}
              >
                {console.log(item)}
                <InfoItem label="Full Name" value={item.studentFullname} />
                <InfoItem label="Student Code" value={item.studentCode} />
                <InfoItem label="Class" value={item.studentClass} />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "5px",
                  }}
                >
                </Box>
                <InfoItem
                  label="Department"
                  value={item.facultyName}
                />
              </Box>}
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
              onClick={() => { setMembers([...members, undefined]) }}
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
            sx={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "20px",
              width: '20%'
            }}
          >
            <TextField
              size='small'
              select
              sx={{
                width: '100%',
              }}
            >
              {listMentor.map((option) => (
                <MenuItem
                  key={option.mentorCode}
                  value={option.mentorCode}
                  onClick={() => {
                    setMentor({
                      code: option.mentorCode,
                      name: option.mentorScientificName
                    })
                  }}
                >
                  {option.mentorScientificName}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          {console.log(mentor)}

          <Box
            sx={{
              margin: "10px 50px 20px 20px",
              color: "#818181",
            }}
          >
            {member && (
              <>
                <InfoItem label="Full Name" value={'mentor.mentorName'} />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "5px",
                  }}
                >
                  <InfoItem
                    label="Scientific Name"
                    value={'mentor.scientificName'}
                  />
                  <InfoItem label="Degree" value={'mentor.degree'} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "5px",
                  }}
                >
                  <InfoItem label="Phone" value={'mentor.mentorPhone'} />
                  <InfoItem label="Email" value={'mentor.mentorEmail'} />
                </Box>
                <InfoItem label="Department" value={'mentor.mentorDepartment'} />
                <InfoItem label="Address" value={'mentor.mentorAddress'} />
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
              onChange={(e) => { setGoalOfSubject(e.target.value) }}
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
              onChange={(e) => { setResearchProducts(e.target.value) }}
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
              width: '50%'
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimeRangePicker
                calendars={5}
              />
            </LocalizationProvider>
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
            onClick={onCreateTopic}
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

      <Snackbar open={isCheckAlert} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert variant="filled" severity={alertType}>{message}</Alert>
      </Snackbar>
    </Box>
  );
}

export default CreateProject;
