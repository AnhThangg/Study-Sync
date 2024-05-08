import { React, useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import {
    Box,
    Icon,
    Typography,
    Input,
    IconButton,
    Button,
    TextField,
    TextareaAutosize,
    Snackbar,
    Alert,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "@mui/material";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import { ListAlt, NoteAdd, CancelPresentation, Update, Reply } from "@mui/icons-material"
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { getProposeIdea, updateProposalIdea } from '../../../api/proposeIdeaApi'
import { getMentor } from '../../../api/mentor.Api'

const MentorEditIdea = () => {
    const ideaCode = useParams().id;
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [isCheckAlert, setIsCheckAlert] = useState(false);
    const [alertType, setAlertType] = useState('error');
    const [openDialog, setOpenDialog] = useState(false);


    const [infoIdea, setInfoIdea] = useState();
    useEffect(() => {
        getProposeIdea(ideaCode)
            .then((data) => {
                setInfoIdea(data)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])

    const onOpenDialog = () => {
        setMessage('Please fill in the Other Notes field');
        (!infoIdea?.otherNotes) && setMessage(`Please fill in the field "Other Notes"`);
        (!infoIdea?.ideaExpectedResearch) && setMessage(`please fill in the field "Idea expected research products of the topic and applicability"`);
        (!infoIdea?.ideaGoalSubject) && setMessage(`please fill in the field "Idea Goal Of The Subject"`);
        (!infoIdea?.ideaDescription) && setMessage(`please fill in the field "Idea Description"`);
        (!infoIdea?.ideaName) && setMessage(`please fill in the field "Idea Name"`);
        if (!infoIdea?.ideaName || !infoIdea?.ideaDescription || !infoIdea?.ideaGoalSubject || !infoIdea?.ideaExpectedResearch || !infoIdea?.otherNotes) {
            setAlertType('error');
            setIsCheckAlert(true);
            setTimeout(() => {
                setIsCheckAlert(false);
            }, 4000)
        } else {
            setOpenDialog(true);
        }
    }

    const onUpdateProposeIdea = async () => {
        const res = await updateProposalIdea(ideaCode, {
            ideaName: infoIdea?.ideaName,
            ideaDescription: infoIdea?.ideaDescription,
            ideaGoalSubject: infoIdea?.ideaGoalSubject,
            ideaExpectedResearch: infoIdea?.ideaExpectedResearch,
            otherNotes: infoIdea?.otherNotes,
        })
        console.log(res);
        if (res.status === 200) {
            setOpenDialog(false);
            setAlertType('success');
            setMessage(res.data);
        } else {
            setOpenDialog(false)
            setAlertType('error');
            setMessage(res.data);
        }
        setIsCheckAlert(true);
        setTimeout(() => {
            setIsCheckAlert(false);
        }, 4000)
    }

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
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '50px'
        }}>
            <Box sx={{
                flex: '1'
            }}>
                <Typography sx={{
                    marginLeft: '50px',
                    marginTop: '56px',
                    fontSize: '30px',
                    fontWeight: 'bold',
                    color: '#D82C2C'
                }}>
                    Edit Propose Idea
                </Typography>
            </Box>
            <Box className="proposeIdeaContain" sx={{
                flex: '5',
                display: 'flex',
                flexDirection: 'row'
            }}>
                <Box className="postIdea" sx={{
                    flex: '1.5',
                    display: 'flex',
                    flexDirection: 'column',
                    margin: "0 50px 0 70px",
                    gap: '30px'
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px'
                    }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                color: "#D82C2C",
                                marginTop: "50px"
                            }}
                        >
                            Idea Name
                        </Typography>
                        <TextField
                            size="small"
                            value={infoIdea?.ideaName}
                            onChange={(e) => {
                                const newValue = e.target.value;
                                setInfoIdea(prevState => ({
                                    ...prevState,
                                    ideaName: newValue
                                }));
                            }}
                            sx={{
                                width: "95%",
                                '& input': {
                                    fontSize: '20px',
                                    fontWeight: 'bold',
                                    color: '#1e385d',
                                    border: '1px solid #999',
                                    borderRadius: '5px'
                                },
                            }}
                        />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px'
                    }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                color: "#D82C2C",
                            }}
                        >
                            Idea Description
                        </Typography>
                        <TextareaAutosize
                            value={infoIdea?.ideaDescription}
                            onChange={(e) => {
                                const newValue = e.target.value;
                                setInfoIdea(prevState => ({
                                    ...prevState,
                                    ideaDescription: newValue
                                }));
                            }}
                            style={{
                                width: "95%",
                                height: "250px",
                                border: "1px solid #999",
                                borderRadius: "5px",
                                padding: "10px",
                                fontSize: "20px",
                            }}
                        />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px'
                    }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                color: "#D82C2C"
                            }}
                        >
                            Idea Goal Of The Subject
                        </Typography>
                        <TextareaAutosize
                            value={infoIdea?.ideaGoalSubject}
                            onChange={(e) => {
                                const newValue = e.target.value;
                                setInfoIdea(prevState => ({
                                    ...prevState,
                                    ideaGoalSubject: newValue
                                }));
                            }}
                            style={{
                                width: "95%",
                                height: "250px",
                                border: "1px solid #999",
                                borderRadius: "5px",
                                padding: "10px",
                                fontSize: "20px",
                            }}
                        />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px'
                    }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                color: "#D82C2C"
                            }}
                        >
                            Idea expected research products of the topic and applicability
                        </Typography>
                        <TextareaAutosize
                            value={infoIdea?.ideaExpectedResearch}
                            onChange={(e) => {
                                const newValue = e.target.value;
                                setInfoIdea(prevState => ({
                                    ...prevState,
                                    ideaExpectedResearch: newValue
                                }));
                            }}
                            style={{
                                width: "95%",
                                height: "250px",
                                border: "1px solid #999",
                                borderRadius: "5px",
                                padding: "10px",
                                fontSize: "20px",
                            }}
                        />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px'
                    }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                color: "#D82C2C"
                            }}
                        >
                            Other notes
                        </Typography>
                        <TextareaAutosize
                            value={infoIdea?.otherNotes}
                            onChange={(e) => {
                                const newValue = e.target.value;
                                setInfoIdea(prevState => ({
                                    ...prevState,
                                    otherNotes: newValue
                                }));
                            }}
                            style={{
                                width: "95%",
                                height: "50px",
                                border: "1px solid #999",
                                borderRadius: "5px",
                                padding: "10px",
                                fontSize: "20px",
                            }}
                        />
                    </Box>
                </Box>
                <Box className="proposedProjects" sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1'
                }}>
                    <Box className="nameProjects" sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '80%',
                        height: '633px',
                        background: '#F6E6E6',
                        borderRadius: '20px',
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            margin: '20px 0 0 30px',
                            gap: '20px'
                        }}>
                            <ListAlt fontSize="large" sx={{ color: '#707070' }} />
                            <Typography sx={{
                                fontSize: '20px',
                                fontWeight: 'bold',
                                color: '#707070'
                            }}>
                                Proposed Projects
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            margin: '30px 0 0 50px',
                            gap: '40px'
                        }}>

                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: '20px'
                            }}>
                                <Typography sx={{
                                    fontSize: '20px',
                                    fontWeight: 'bold',
                                    color: '#707070'
                                }}>
                                    1
                                </Typography>
                                <Typography sx={{
                                    fontSize: '20px',
                                    color: '#707070'
                                }}>
                                    Baby vaccine tracker
                                </Typography>
                            </Box>

                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: '20px'
                            }}>
                                <Typography sx={{
                                    fontSize: '20px',
                                    fontWeight: 'bold',
                                    color: '#707070'
                                }}>
                                    2
                                </Typography>
                                <Typography sx={{
                                    fontSize: '20px',
                                    color: '#707070'
                                }}>
                                    ETickets - QR code for coaches tickets
                                </Typography>
                            </Box>

                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: '20px'
                            }}>
                                <Typography sx={{
                                    fontSize: '20px',
                                    fontWeight: 'bold',
                                    color: '#707070'
                                }}>
                                    3
                                </Typography>
                                <Typography sx={{
                                    fontSize: '20px',
                                    color: '#707070'
                                }}>
                                    SyncStudy
                                </Typography>
                            </Box>

                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: '20px'
                            }}>
                                <Typography sx={{
                                    fontSize: '20px',
                                    fontWeight: 'bold',
                                    color: '#707070'
                                }}>
                                    4
                                </Typography>
                                <Typography sx={{
                                    fontSize: '20px',
                                    color: '#707070'
                                }}>
                                    Open Al
                                </Typography>
                            </Box>

                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: '20px'
                            }}>
                                <Typography sx={{
                                    fontSize: '20px',
                                    fontWeight: 'bold',
                                    color: '#707070'
                                }}>
                                    5
                                </Typography>
                                <Typography sx={{
                                    fontSize: '20px',
                                    color: '#707070'
                                }}>
                                    Quick Exam
                                </Typography>
                            </Box>

                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: '20px'
                            }}>
                                <Typography sx={{
                                    fontSize: '20px',
                                    fontWeight: 'bold',
                                    color: '#707070'
                                }}>
                                    6
                                </Typography>
                                <Typography sx={{
                                    fontSize: '20px',
                                    color: '#707070'
                                }}>
                                    Easy CV - Create a smart CV
                                </Typography>
                            </Box>

                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: '20px'
                            }}>
                                <Typography sx={{
                                    fontSize: '20px',
                                    fontWeight: 'bold',
                                    color: '#707070'
                                }}>
                                    7
                                </Typography>
                                <Typography sx={{
                                    fontSize: '20px',
                                    color: '#707070'
                                }}>
                                    Traveloka - Smart travel
                                </Typography>
                            </Box>

                        </Box>
                    </Box>
                    <Box className="proposeButton" sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        margin: '50px 0 0 0',
                        alignItems: "center",
                        justifyContent: "center",
                        gap: '4%',
                        width: '80%',
                        padding: '0 10px 0 10px'
                    }}>
                        <Button 
                        onClick={() => {navigate(`/Mentor/myProposeIdea`)}}
                        sx={{
                            width: '48%',
                            height: '45px',
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
                            },
                        }}>
                            <Reply fontSize='large' />
                            Back
                        </Button>
                        <Button
                            onClick={onOpenDialog}
                            sx={{
                                width: '48%',
                                height: '45px',
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
                            <Update fontSize='large' />
                            Update
                        </Button>
                    </Box>
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
                <DialogTitle id="alert-dialog-title" sx={{ color: '#D82C2C', fontWeight: 'bold', fontSize: '25px' }}>
                    {`Read the information carefully before creating "Propose Idea!"`}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Box className="dialogContain" sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px'
                        }}>
                            {/* Idea Name */}
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <Typography sx={{ fontWeight: 'bold', color: '#1e385d', textDecoration: 'underline', fontSize: '20px' }}>Idea Name: </Typography>
                                <Typography sx={{ marginLeft: '10px', fontWeight: 'bold', color: '#D82C2C', fontSize: '17px' }}>{infoIdea?.ideaName}</Typography>
                            </Box>

                            {/* Idea Description */}
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <Typography sx={{ fontWeight: 'bold', color: '#1e385d', textDecoration: 'underline', fontSize: '20px' }}>Idea Description: </Typography>
                                <Typography sx={{ marginLeft: '10px', color: '#718199', fontSize: '17px' }}>{formatContent(infoIdea?.ideaDescription)}</Typography>
                            </Box>

                            {/* Idea Goal Of The Subject */}
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <Typography sx={{ fontWeight: 'bold', color: '#1e385d', textDecoration: 'underline', fontSize: '20px' }}>Idea Goal Of The Subject: </Typography>
                                <Typography sx={{ marginLeft: '10px', color: '#718199', fontSize: '17px' }}>{formatContent(infoIdea?.ideaGoalSubject)}</Typography>
                            </Box>

                            {/* Idea expected research products of the topic and applicability */}
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <Typography sx={{ fontWeight: 'bold', color: '#1e385d', textDecoration: 'underline', fontSize: '20px' }}>Idea expected research products of the topic and applicability: </Typography>
                                <Typography sx={{ marginLeft: '10px', color: '#718199', fontSize: '17px' }}>{formatContent(infoIdea?.ideaExpectedResearch)}</Typography>
                            </Box>

                            {/* Other notes */}
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <Typography sx={{ fontWeight: 'bold', color: '#1e385d', textDecoration: 'underline', fontSize: '20px' }}>Other notes: </Typography>
                                <Typography sx={{ marginLeft: '10px', color: '#718199', fontSize: '17px' }}>{formatContent(infoIdea?.otherNotes)}</Typography>
                            </Box>


                        </Box>
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ gap: '10px' }}>
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
                        <CancelPresentation />Cancel
                    </Button>
                    <Button
                        sx={{
                            textTransform: 'none',
                            fontSize: '17px',
                            gap: '5px',
                            border: '1px solid #41B06E',
                            width: '150px',
                            background: '#41B06E',
                            color: '#fff',
                            '&:hover': {
                                background: '#fff',
                                color: '#41B06E',
                                borderColor: '#41B06E',
                            },
                        }}
                        autoFocus onClick={onUpdateProposeIdea}>
                        <Update /> Update Idea
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar open={isCheckAlert} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert variant="filled" severity={alertType}>{message}</Alert>
            </Snackbar>
        </Box>
    )
}

export default MentorEditIdea