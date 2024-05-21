import React, { useState, useEffect, useRef } from "react";
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
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import dayjs from "dayjs";
import { Delete } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { getInfo, getNameMentor } from "../../../api/infoApi";
import { getStudent } from "../../../api/studentApi";
import { v4 as uuid } from "uuid";
import { createTopic } from "../../../api/topicsApi";
import { getProposeIdea } from '../../../api/proposeIdeaApi';
import { getMentor } from '../../../api/mentor.Api';
import Reply from '@mui/icons-material/Reply';
import AssignmentTurnedIn from '@mui/icons-material/AssignmentTurnedIn';
import { ListAlt, NoteAdd, CancelPresentation } from "@mui/icons-material"


const ReceiveProposeIdea = () => {
    const InfoItem = ({ label, value }) => (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "5px",
                width: "50%",
                fontSize: '20px'
            }}
        >
            <Typography className="txtcel1" sx={{ fontWeight: "bold", color: '#1e385d', fontSize: '20px' }}>
                {label}:
            </Typography>
            <Typography className="txtcel2" sx={{ marginLeft: "10px", fontSize: '20px' }}>
                {value}
            </Typography>
        </Box>
    );

    const ideaCode = useParams().id;
    const [infoIdea, setInfoIdea] = useState();
    const [infoMentor, setInfoMentor] = useState();

    const [topicName, setTopicName] = useState("");
    const [topicDescription, setTopicDescription] = useState("");
    const [goalOfSubject, setGoalOfSubject] = useState("");
    const [otherNotes, setOtherNotes] = useState("");
    const [researchProducts, setResearchProducts] = useState("");
    const [member, setMember] = useState();
    const [members, setMembers] = useState([undefined]);
    const [leader, setLeader] = useState();
    const [listMentor, setListMentor] = useState([]);
    const [mentor, setMentor] = useState("");
    const [startDate, setStartDate] = useState(dayjs().add(7, "day"));
    const [endDate, setEndDate] = useState(dayjs().add(3, "month").add(7, "day"));
    const [message, setMessage] = useState("");
    const [isCheckAlert, setIsCheckAlert] = useState(false);
    const [alertType, setAlertType] = useState("error");
    const [openDialog, setOpenDialog] = useState(false);
    const [key, setKey] = useState(uuid());


    useEffect(() => {
        getProposeIdea(ideaCode)
            .then((data) => {
                setInfoIdea(data);
                setTopicName(data?.ideaName);
                setTopicDescription(data?.ideaDescription);
                setGoalOfSubject(data?.ideaGoalSubject);
                setResearchProducts(data?.ideaExpectedResearch);
                setOtherNotes(data?.otherNotes);

            })
            .catch(e => {
                console.log(e)
            })
    }, [])

    useEffect(() => {
        getMentor(infoIdea?.mentorCode)
            .then((data) => {
                setInfoMentor(data)
            })
            .catch(e => {
                console.log(e);
            })
    }, [infoIdea])
    console.log(infoMentor);

    useEffect(() => {
        getInfo()
            .then((data) => {
                setLeader(data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    useEffect(() => {
        getNameMentor(leader?.facultyCode)
            .then((data) => {
                setListMentor(data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, [leader]);

    const onSearchMember = async (id, index) => {
        const res = await getStudent(id);
        if (res.status === "success") {
            if (
                members.find((item) => item?.studentCode === res.student.studentCode)
            ) {
                setMessage("This student is already on the member list");
                setAlertType("error");
                setIsCheckAlert(true);
                setTimeout(() => {
                    setIsCheckAlert(false);
                }, 4000);
            } else if (res.student.studentCode === leader.studentCode) {
                setMessage("You are the Leader, do not enter your Student Code");
                setAlertType("error");
                setIsCheckAlert(true);
                setTimeout(() => {
                    setIsCheckAlert(false);
                }, 4000);
            } else {
                const newMembers = [...members];
                newMembers[index] = res.student;
                setMembers(newMembers);
            }
        } else {
            const newMembers = [...members];
            newMembers[index] = undefined;
            setMembers(newMembers);
        }
    };

    const onDeleteMember = async (index) => {
        if (members.length > 1) {
            const newMembers = [...members];
            newMembers.splice(index, 1);
            setMembers(newMembers);
            setKey(uuid());
        }
    };

    const onAddMember = () => {
        if (members[members.length - 1]) {
            setMembers([...members, undefined]);
        }
    };

    const onOpenDialog = () => {
        if (endDate.diff(startDate, "month") < 3) {
            setMessage("The duration of the project must be more than 3 months");
        }
        !members[0] && setMessage("must have at least one member");
        if (endDate.diff(startDate, "month") < 3 || !members[0]) {
            setAlertType("error");
            setIsCheckAlert(true);
            setTimeout(() => {
                setIsCheckAlert(false);
            }, 4000);
        } else {
            setOpenDialog(true);
        }
    }

    const onSubmitTopic = async () => {
        const listMember = members.map((member) => member.studentCode);
        const res = await createTopic({
            topicName,
            topicDescription,
            topicGoalSubject: goalOfSubject,
            topicExpectedResearch: researchProducts,
            otherNotes,
            topicDateStart: fortmartDate(
                startDate?.$y,
                startDate?.$d.getMonth(),
                startDate?.$D
            ),
            topicDateEnd: fortmartDate(
                endDate?.$y,
                endDate?.$d.getMonth(),
                endDate?.$D
            ),
            facultyCode: leader.facultyCode,
            mentorCode: infoIdea.mentorCode,
            leader: leader.studentCode,
            listMember,
        });
        console.log(res);
        if (res.status === 200) {
            setOpenDialog(false);
            setAlertType("success");
            setMessage('Receive Idea Successfully');
        } else {
            setOpenDialog(false);
            setAlertType("error");
            setMessage("Thêm không thành công");
        }
        setIsCheckAlert(true);
        setTimeout(() => {
            setIsCheckAlert(false);
        }, 4000);
    };

    const fortmartDate = (year, month, date) => {
        const formattedMonth = month < 9 ? `0${month + 1}` : month + 1;
        const formattedDate = date < 10 ? `0${date}` : date;
        return `${year}-${formattedMonth}-${formattedDate}`;
    };

    console.log(infoIdea)

    const formatContent = (text) => {
        if (typeof text !== 'string') {
            return [];
        }
        const lines = text.split('\n').map((line, index) => {
            return (
                <div key={index} style={{ textIndent: `20px`, marginBottom: `10px` }}>
                    {line}
                </div>
            );
        });
        return lines;
    }

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
                    Receive Idea
                </Typography>
            </Box>
            <Box sx={{
                marginTop: '40px',
            }}>
                <Typography
                    sx={{
                        fontWeight: "bold",
                        color: "#1e385d",
                        fontSize: '30px'
                    }}
                >
                    <strong style={{
                        color: '#ff6666'
                    }}>Topic Name: </strong>&nbsp;{topicName}
                </Typography>

                <Box>
                    <Box
                        sx={{
                            margin: "20px 0 0 10px",
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                color: "#ff6666",
                                fontSize: '30px'
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
                                color: "#ff6666",
                                fontSize: '30px',
                            }}
                        >
                            Team Members
                        </Typography>
                    </Box>
                    {members.map((item, index) => (
                        <Box className="member" key={key + item?.studentCode}>
                            <Box
                                className="id_student"
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    marginLeft: "20px",
                                    gap: "10px",
                                }}
                            >
                                <TextField
                                    className="textFieldMember"
                                    type="number"
                                    size="small"
                                    disabled={index < members.length - 1 ? true : false}
                                    defaultValue={item ? item.studentCode : ""}
                                    onChange={(e) => {
                                        if (e.target.value.length > 11) {
                                            e.target.value = e.target.value.slice(0, -1);
                                        }
                                        onSearchMember(e.target.value, index);
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
                                <IconButton onClick={() => onDeleteMember(index)}>
                                    <Delete />
                                </IconButton>
                            </Box>
                            {item && (
                                <Box
                                    className="infoMember"
                                    sx={{
                                        margin: "10px 50px 20px 20px",
                                        color: "#818181",
                                    }}
                                >
                                    <InfoItem label="Full Name" value={item.studentFullname} />
                                    <InfoItem label="Student Code" value={item.studentCode} />
                                    <InfoItem label="Class" value={item.studentClass} />
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "row",
                                            marginBottom: "5px",
                                        }}
                                    ></Box>
                                    <InfoItem label="Department" value={item.facultyName} />
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
                            onClick={onAddMember}
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
                                color: "#ff6666",
                                fontSize: '30px',
                            }}
                        >
                            Mentor
                        </Typography>
                    </Box>
                    <Box className='Mentor'
                        sx={{
                            margin: "10px 50px 20px 20px",
                            color: "#818181",
                        }}
                    >
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '100px',
                        }}>
                            <Box sx={{ whiteSpace: 'nowrap' }}>
                                <InfoItem label="Full Name" value={infoMentor?.mentorFullname} />
                                <InfoItem label="Gender" value={infoMentor?.mentorSex === 1 ? 'Male' : 'Female'} />
                                <InfoItem label="Degree" value={infoMentor?.mentorDegree} />
                            </Box>
                            <Box sx={{ whiteSpace: 'nowrap' }}>
                                <InfoItem label="Scientific Name" value={infoMentor?.mentorScientificName} />
                                <InfoItem label="Phone" value={infoMentor?.mentorPhone} />
                                <InfoItem label="Email" value={infoMentor?.mentorEmail} />
                            </Box>
                        </Box>
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
                                color: "#ff6666",
                                fontSize: '30px',
                            }}
                        >
                            Description
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            height: "auto",
                            margin: "10px 50px 20px 10px",
                        }}
                    >
                        <Typography sx={{
                            fontSize: "20px",
                            width: "850px",
                            color: '#818181',
                            marginLeft: '20px',
                        }}>
                            {formatContent(topicDescription)}
                        </Typography>
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
                                color: "#ff6666",
                                fontSize: '30px',
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
                        <Typography sx={{
                            fontSize: "20px",
                            width: "850px",
                            color: '#818181',
                            marginLeft: '20px',
                        }}>
                            {formatContent(goalOfSubject)}
                        </Typography>
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
                                color: "#ff6666",
                                fontSize: '30px',
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
                        <Typography sx={{
                            fontSize: "20px",
                            width: "850px",
                            color: '#818181',
                            marginLeft: '20px',
                        }}>
                            {formatContent(researchProducts)}
                        </Typography>
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
                                color: "#ff6666",
                                fontSize: '30px',
                            }}
                        >
                            Other Notes
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            height: "auto",
                            margin: "10px 50px 20px 10px",
                        }}
                    >
                        <Typography sx={{
                            fontSize: "20px",
                            width: "850px",
                            color: '#818181',
                            marginLeft: '20px',
                        }}>{formatContent(otherNotes)}</Typography>
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
                                color: "#ff6666",
                                fontSize: '30px',
                            }}
                        >
                            Time to conduct scientific research
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            margin: "10px 50px 20px 20px",
                            color: "#818181",
                            width: "50%",
                        }}
                    >
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateRangePicker
                                calendars={3}
                                value={[startDate, endDate]}
                                onChange={(newDates) => {
                                    setStartDate(newDates[0]);
                                    setEndDate(newDates[1]);
                                }}
                                minDate={dayjs().add(7, "day")}
                                maxDate={dayjs().add(1, "year")}
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
                        gap: '30px',
                        width: '100%',
                        padding: '0 25% 0 25%',
                    }}
                >

                    <Button
                        onClick={() => { navigate('/student/proposeidea') }}
                        sx={{
                            width: '38%',
                            height: '60px',
                            textTransform: 'none',
                            background: '#1e385d',
                            border: '1px solid #1e385d',
                            borderRadius: '10px',
                            fontSize: '25px',
                            color: '#fff',
                            padding: '0 20px',
                            gap: '10px',
                            '&:hover': {
                                background: '#fff',
                                color: '#1e385d',
                            }
                        }}>
                        <Reply fontSize='large' />
                        Back
                    </Button>
                    <Button
                        onClick={onOpenDialog}
                        sx={{
                            width: '60%',
                            height: '60px',
                            textTransform: 'none',
                            background: '#41B06E',
                            border: '1px solid #41B06E',
                            borderRadius: '10px',
                            fontSize: '25px',
                            color: '#fff',
                            padding: '0 20px',
                            gap: '10px',
                            '&:hover': {
                                background: '#fff',
                                color: '#41B06E',
                            }
                        }}>
                        <AssignmentTurnedIn fontSize='large' />
                        Receive Ideas
                    </Button>
                </Box>
            </Box>
            <Dialog sx={{
                '& .MuiDialog-paper': {
                    width: '80%',
                    maxWidth: 'lg',
                },
            }}
                open={openDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
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
                            {/* Topic Name */}
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <Typography sx={{ fontWeight: 'bold', color: '#1e385d', textDecoration: 'underline', fontSize: '20px' }}>Topic Name: </Typography>
                                <Typography sx={{ marginLeft: '10px', fontWeight: 'bold', color: '#D82C2C', fontSize: '17px' }}>{topicName}</Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <Typography sx={{ fontWeight: 'bold', color: '#1e385d', textDecoration: 'underline', fontSize: '20px' }}>Faculty: </Typography>
                                <Typography sx={{ marginLeft: '10px', fontWeight: 'bold', color: '#718199', fontSize: '17px' }}>{leader?.facultyName}</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontWeight: 'bold', color: '#1e385d', textDecoration: 'underline', fontSize: '20px' }}>Leader: </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        marginLeft: "10px",
                                    }}
                                >
                                    <Typography sx={{ fontWeight: "bold", color: '#ff6666' }}>
                                        Full Name:
                                    </Typography>
                                    <Typography sx={{ marginLeft: "10px" }}>
                                        {leader?.studentFullname}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        marginLeft: "10px",
                                    }}
                                >
                                    <Typography sx={{ fontWeight: "bold", color: '#ff6666' }}>
                                        Student Code:
                                    </Typography>
                                    <Typography sx={{ marginLeft: "10px" }}>
                                        {leader?.studentCode}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        marginLeft: "10px",
                                    }}
                                >
                                    <Typography sx={{ fontWeight: "bold", color: '#ff6666' }}>Class: </Typography>
                                    <Typography sx={{ marginLeft: "10px" }}>
                                        {leader?.studentClass}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        marginLeft: "10px",
                                    }}
                                >
                                    <Typography sx={{ fontWeight: "bold", color: '#ff6666' }}>Faculty: </Typography>
                                    <Typography sx={{ marginLeft: "10px" }}>
                                        {leader?.facultyName}
                                    </Typography>
                                </Box>
                            </Box>

                            {/* team member */}
                            <Box>
                                <Typography sx={{ fontWeight: 'bold', color: '#1e385d', textDecoration: 'underline', fontSize: '20px' }}>Team Members: </Typography>
                                {members.map((item, index) => (
                                    <Box sx={{ marginLeft: "10px" }}>
                                        <Typography
                                            sx={{
                                                fontWeight: "bold",
                                                marginTop: "5px",
                                                color: "#ff6666",
                                            }}
                                        >
                                            + Member {index + 1}
                                        </Typography>
                                        <Box sx={{ marginLeft: "10px" }}>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    marginLeft: "10px",
                                                }}
                                            >
                                                <Typography sx={{ fontWeight: "bold", color: '#1e385d' }}>
                                                    Full Name:{" "}
                                                </Typography>
                                                <Typography sx={{ marginLeft: "10px" }}>
                                                    {item?.studentFullname}
                                                </Typography>
                                            </Box>

                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    marginLeft: "10px",
                                                }}
                                            >
                                                <Typography sx={{ fontWeight: "bold", color: '#1e385d' }}>
                                                    Student Code:{" "}
                                                </Typography>
                                                <Typography sx={{ marginLeft: "10px" }}>
                                                    {item?.studentCode}
                                                </Typography>
                                            </Box>

                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    marginLeft: "10px",
                                                }}
                                            >
                                                <Typography sx={{ fontWeight: "bold", color: '#1e385d' }}>
                                                    Class:{" "}
                                                </Typography>
                                                <Typography sx={{ marginLeft: "10px" }}>
                                                    {item?.studentClass}
                                                </Typography>
                                            </Box>

                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    marginLeft: "10px",
                                                }}
                                            >
                                                <Typography sx={{ fontWeight: "bold", color: '#1e385d' }}>
                                                    Faculty:{" "}
                                                </Typography>
                                                <Typography sx={{ marginLeft: "10px" }}>
                                                    {item?.facultyName}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>

                            {/* Instructor */}
                            <Box>
                                <Typography sx={{ fontWeight: 'bold', color: '#1e385d', textDecoration: 'underline', fontSize: '20px' }}>Mentor: </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        marginLeft: "10px",
                                    }}
                                >
                                    <Typography sx={{ fontWeight: "bold", color: '#ff6666' }}>
                                        Full Name:
                                    </Typography>
                                    <Typography sx={{ marginLeft: "10px" }}>
                                        {infoMentor?.mentorFullname}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        marginLeft: "10px",
                                    }}
                                >
                                    <Typography sx={{ fontWeight: "bold", color: '#ff6666' }}>
                                        Gender:
                                    </Typography>
                                    <Typography sx={{ marginLeft: "10px" }}>
                                        {infoMentor?.mentorSex === 1 ? 'Male' : 'Female'}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        marginLeft: "10px",
                                    }}
                                >
                                    <Typography sx={{ fontWeight: "bold", color: '#ff6666' }}>Degree: </Typography>
                                    <Typography sx={{ marginLeft: "10px" }}>
                                        {infoMentor?.mentorDegree}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        marginLeft: "10px",
                                    }}
                                >
                                    <Typography sx={{ fontWeight: "bold", color: '#ff6666' }}>Scientific Name: </Typography>
                                    <Typography sx={{ marginLeft: "10px" }}>
                                        {infoMentor?.mentorScientificName}
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Goal Of The Subject */}
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <Typography sx={{ fontWeight: 'bold', color: '#1e385d', textDecoration: 'underline', fontSize: '20px' }}>The Goal Of The Subject: </Typography>
                                <Typography sx={{ marginLeft: '10px', fontWeight: 'bold', color: '#718199', fontSize: '17px' }}>{formatContent(goalOfSubject)}</Typography>
                            </Box>

                            {/* Expected research products */}
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <Typography sx={{ fontWeight: 'bold', color: '#1e385d', textDecoration: 'underline', fontSize: '20px' }}>Expected research products of the topic and applicability: </Typography>
                                <Typography sx={{ marginLeft: '10px', fontWeight: 'bold', color: '#718199', fontSize: '17px' }}>{formatContent(researchProducts)}</Typography>
                            </Box>

                            {/* Topic Date Start */}
                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                                <Typography sx={{ fontWeight: 'bold', color: '#1e385d', textDecoration: 'underline', fontSize: '20px' }}>Topic Date Start: </Typography>
                                <Typography sx={{ marginLeft: '10px', fontWeight: 'bold', color: '#ff6666', fontSize: '20px' }}>
                                    {startDate?.$D +
                                        "/" +
                                        (startDate?.$d.getMonth() + 1) +
                                        "/" +
                                        startDate?.$y}
                                </Typography>
                            </Box>

                            {/* Topic Date End */}
                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                                <Typography sx={{ fontWeight: 'bold', color: '#1e385d', textDecoration: 'underline', fontSize: '20px' }}>Topic Date End: </Typography>
                                <Typography sx={{ marginLeft: '10px', fontWeight: 'bold', color: '#ff6666', fontSize: '20px' }}>
                                    {endDate?.$D +
                                        "/" +
                                        (endDate.$d.getMonth() + 1) +
                                        "/" +
                                        endDate?.$y}
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
                        border: '1px solid #1e385d',
                        background: '#1e385d',
                        color: '#fff',
                        '&:hover': {
                            background: '#fff',
                            color: '#1e385d',
                            borderColor: '#1e385d',
                        },
                    }} onClick={() => setOpenDialog(false)}>
                        <CancelPresentation />Cancel
                    </Button>
                    <Button
                        autoFocus onClick={onSubmitTopic}
                        sx={{
                            textTransform: 'none',
                            fontSize: '17px',
                            gap: '5px',
                            border: '1px solid #41B06E',
                            background: '#41B06E',
                            color: '#fff',
                            '&:hover': {
                                background: '#fff',
                                color: '#41B06E',
                                borderColor: '#41B06E',
                            },
                        }}
                    >
                        <AssignmentTurnedIn />Receive Idea
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar
                open={isCheckAlert}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
                <Alert variant="filled" severity={alertType}>
                    {message}
                </Alert>
            </Snackbar>
        </Box>

    )
}

export default ReceiveProposeIdea