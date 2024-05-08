import { React, useEffect, useState } from 'react'
import { Outlet, useParams, useLocation, useNavigate, NavLink } from "react-router-dom";
import {
    Button,
    Box,
    Typography,
    Snackbar,
    Alert,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "@mui/material";
import './MentorProjectInformation.scss'
import { Article, Person2, Link, Person, Groups, AccessAlarm, DonutLarge } from "@mui/icons-material";
import { getConfirmedTopicDetailForMentor, getMentor } from '../../../api/mentor.Api'

const MentorProjectInformation = () => {
    const navigate = useNavigate();
    const topicCode = useParams().id;
    const [topicInfo, setTopicInfo] = useState({});
    const [message, setMessage] = useState('');
    const [isCheckAlert, setIsCheckAlert] = useState(false);
    const [alertType, setAlertType] = useState('error');
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        getConfirmedTopicDetailForMentor(topicCode)
            .then(data => {
                setTopicInfo(data);
            })
            .catch((e) => {
                console.log(e);
            })
    }, [topicCode]);

    //console.log(topicInfo);

    const InfoItem = ({ label, value }) => (
        <Box className="leaderContainerRow" sx={{
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: '60px',
            gap: '10px'
        }}>
            <Typography sx={{
                fontSize: '20px',
                color: '#707070',
                fontWeight: 'bold'
            }}>
                {label}:
            </Typography>
            <Typography sx={{
                fontSize: '20px',
                color: '#707070',
            }}>
                {value}
            </Typography>
        </Box>
    );

    const InfoItemMember = ({ label, value }) => (
        <Box className="leaderContainerRow" sx={{
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: '60px',
            gap: '10px'
        }}>
            <Typography sx={{
                fontSize: '16px',
                color: '#707070',
                fontWeight: 'bold'
            }}>
                {label}:
            </Typography>
            <Typography sx={{
                fontSize: '16px',
                color: '#707070',
            }}>
                {value}
            </Typography>
        </Box>
    );

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
        <div>
            <Box ClassName="Container" sx={{
                width: '100%',
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Box ClassName="Title" sx={{
                    width: '90%',
                    height: '140px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'end',
                    justifyContent: 'space-between'
                }}>
                    <Box sx={{
                        width: '50%',
                        height: '90%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        justifyContent: 'end'
                    }}>
                        <Typography sx={{
                            fontSize: '30px',
                            fontWeight: 'bold',
                            color: '#D82C2C'
                        }}>{topicInfo.facultyName}</Typography>
                        <Box sx={{
                            width: '100%',
                            height: '50px',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'start',
                            alignItems: 'start',
                        }}>
                            <Typography sx={{
                                fontSize: '24px',
                                fontWeight: 'bold',
                                color: '#707070'
                            }}>Project Code : </Typography>
                            <Typography sx={{
                                marginTop: '6.4px',
                                marginLeft: '10px',
                                fontSize: '18px',
                                color: '#707070'
                            }}>{topicInfo.topicCode}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        width: '45%',
                        height: '95px',
                        display: 'flex',
                        alignItems: 'start',
                        justifyContent: 'start'
                    }}>
                        <Typography sx={{
                            fontSize: '20px',
                            color: '#707070'
                        }}><strong style={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            color: '#707070'
                        }}>Name:</strong> {topicInfo.topicName}</Typography>
                    </Box>
                </Box>
                <Box sx={{
                    marginTop: '25px',
                    width: '90%',
                    height: 'auto',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'start'
                }}>
                    <Box ClassName="InforPR" sx={{
                        width: '65%',
                        height: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        justifyContent: 'start'
                    }}>
                        <Box ClassName="Describle" sx={{
                            width: '95%',
                            height: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                            justifyContent: 'start'
                        }}>
                            <Typography sx={{
                                fontSize: '20px',
                                fontWeight: '600',
                                color: '#D82C2C'
                            }}>Describle</Typography>
                            <Typography id="description" sx={{
                                fontSize: '18px',
                                fontWeight: '100',
                                color: '#707070',
                                marginTop: '5px'
                            }}>{formatContent(topicInfo.topicDescription)}</Typography>
                        </Box>
                        <Box ClassName="Technology" sx={{
                            width: '95%',
                            height: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                            justifyContent: 'start',
                            marginTop: '50px'
                        }}>
                            <Typography sx={{
                                fontSize: '20px',
                                fontWeight: '600',
                                color: '#D82C2C'
                            }}>Technology:</Typography>
                            <Typography ClassName="Technology" id="technology" sx={{
                                fontSize: '18px',
                                fontWeight: '100',
                                color: '#707070',
                                marginTop: '5px'
                            }}>
                                {formatContent(topicInfo.topicTech)}
                            </Typography>
                        </Box>
                        <Box ClassName="topicGoalSubject" sx={{
                            width: '95%',
                            height: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                            justifyContent: 'start',
                            marginTop: '50px'
                        }}>
                            <Typography sx={{
                                fontSize: '20px',
                                fontWeight: '600',
                                color: '#D82C2C'
                            }}>The Goal Of The Subject:</Typography>
                            <Typography ClassName="topicGoalSubject" id="goalSubject" sx={{
                                fontSize: '18px',
                                fontWeight: '100',
                                color: '#707070',
                                marginTop: '5px'
                            }}>
                                {formatContent(topicInfo.topicGoalSubject)}
                            </Typography>
                        </Box>
                        <Box ClassName="topicExpectedResearch" sx={{
                            width: '95%',
                            height: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                            justifyContent: 'start',
                            marginTop: '50px'
                        }}>
                            <Typography sx={{
                                fontSize: '20px',
                                fontWeight: '600',
                                color: '#D82C2C'
                            }}>Expected research products of the topic and applicability:</Typography>
                            <Typography ClassName="ExpectedResearch" id="expectedResearch" sx={{
                                fontSize: '18px',
                                fontWeight: '100',
                                color: '#707070',
                                marginTop: '5px'
                            }}>
                                {formatContent(topicInfo.topicExpectedResearch)}
                            </Typography>
                        </Box>
                        <Box ClassName="Documents" sx={{
                            width: '95%',
                            height: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                            justifyContent: 'start',
                            marginTop: '50px'
                        }}>
                            <Typography sx={{
                                fontSize: '20px',
                                fontWeight: '600',
                                color: '#707070'
                            }}>Documents Upload</Typography>
                            <Box sx={{
                                marginTop: '5px',
                                width: '100%',
                                height: 'auto',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <NavLink>
                                    <Box sx={{
                                        width: '100%',
                                        height: '40px',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <Box sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            width: 'auto',
                                            height: '100%',
                                            alignItems: 'center'
                                        }}>
                                            <Article fontSize="large" sx={{
                                                color: '#707070'
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
                                                    color: '#707070',
                                                    marginBottom: '8px'
                                                }}>Proposal_Document_Ver1.0.pdf</Typography>
                                            </Box>
                                        </Box>
                                        <Typography sx={{
                                            color: '#707070',
                                            textDecoration: 'none'
                                        }}>21:03:38 PM  26/02/2024</Typography>
                                    </Box>
                                </NavLink>
                            </Box>
                            <Box sx={{
                                marginTop: '5px',
                                width: '100%',
                                height: 'auto',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <NavLink>
                                    <Box sx={{
                                        width: '100%',
                                        height: '40px',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <Box sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            width: 'auto',
                                            height: '100%',
                                            alignItems: 'center'
                                        }}>
                                            <Article fontSize="large" sx={{
                                                color: '#707070'
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
                                                    color: '#707070',
                                                    marginBottom: '8px'
                                                }}>Project_Plan_Document_Ver1.0.pdf</Typography>
                                            </Box>
                                        </Box>
                                        <Typography sx={{
                                            color: '#707070',
                                            textDecoration: 'none'
                                        }}>21:03:38 PM  26/02/2024</Typography>
                                    </Box>
                                </NavLink>
                            </Box>
                            <Box sx={{
                                marginTop: '5px',
                                width: '100%',
                                height: 'auto',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <NavLink>
                                    <Box sx={{
                                        width: '100%',
                                        height: '40px',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <Box sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            width: 'auto',
                                            height: '100%',
                                            alignItems: 'center'
                                        }}>
                                            <Article fontSize="large" sx={{
                                                color: '#707070'
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
                                                    color: '#707070',
                                                    marginBottom: '8px'
                                                }}>Product_Backlog_Document_Ver1.0.pdf</Typography>
                                            </Box>
                                        </Box>
                                        <Typography sx={{
                                            color: '#707070',
                                            textDecoration: 'none'
                                        }}>21:03:38 PM  26/02/2024</Typography>
                                    </Box>
                                </NavLink>
                            </Box>
                            <Box sx={{
                                marginTop: '5px',
                                width: '100%',
                                height: 'auto',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <NavLink>
                                    <Box sx={{
                                        width: '100%',
                                        height: '40px',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <Box sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            width: 'auto',
                                            height: '100%',
                                            alignItems: 'center'
                                        }}>
                                            <Article fontSize="large" sx={{
                                                color: '#707070'
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
                                                    color: '#707070',
                                                    marginBottom: '8px'
                                                }}>UserStory_Document_Ver1.0.pdf</Typography>
                                            </Box>
                                        </Box>
                                        <Typography sx={{
                                            color: '#707070',
                                            textDecoration: 'none'
                                        }}>21:03:38 PM  26/02/2024</Typography>
                                    </Box>
                                </NavLink>
                            </Box>
                            <Box sx={{
                                marginTop: '5px',
                                width: '100%',
                                height: 'auto',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <NavLink>
                                    <Box sx={{
                                        width: '100%',
                                        height: '40px',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <Box sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            width: 'auto',
                                            height: '100%',
                                            alignItems: 'center'
                                        }}>
                                            <Article fontSize="large" sx={{
                                                color: '#707070'
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
                                                    color: '#707070',
                                                    marginBottom: '8px'
                                                }}>Proposal_Document_Ver1.0.pdf</Typography>
                                            </Box>
                                        </Box>
                                        <Typography sx={{
                                            color: '#707070',
                                            textDecoration: 'none'
                                        }}>21:03:38 PM  26/02/2024</Typography>
                                    </Box>
                                </NavLink>
                            </Box>
                        </Box>
                        <Box ClassName="LinkProject" sx={{
                            width: '95%',
                            height: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                            justifyContent: 'start',
                            marginTop: '50px'
                        }}>
                            <Typography sx={{
                                fontSize: '20px',
                                fontWeight: '600',
                                color: '#707070'
                            }}>Link Project</Typography>

                            <NavLink to="https://github.com/AnhThangg/Study-Sync" target="_blank">
                                <Box sx={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'start',
                                    alignItems: 'center'
                                }}>
                                    <Link fontSize='large' sx={{ color: '#707070' }}></Link>
                                    <Typography sx={{
                                        color: '#707070',
                                        fontSize: '18px',
                                        marginLeft: '10px'
                                    }}>https://github.com/AnhThangg/Study-Sync</Typography>
                                </Box>
                            </NavLink>
                        </Box>
                        <Box sx={{ width: '95%', height: '80px' }}></Box>

                    </Box>
                    <Box ClassName="InforMB" sx={{
                        width: '35%',
                        height: '700px',
                        background: '#F6E8E8',
                        borderRadius: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '10px 0 10px 0'
                    }}>
                        <Box className="infoScroll" sx={{
                            width: '99%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '30px 0 30px 0',
                            gap: '10px',
                            overflow: 'auto',
                        }}>
                            <Box className="leader" sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '90%',
                            }}>
                                <Box className="leaderTitle" sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                                    <Person fontSize='large' sx={{ color: '#D82C2C' }}></Person>
                                    <Typography sx={{
                                        color: '#D82C2C',
                                        fontSize: '26px',
                                        marginLeft: '10px',
                                        fontWeight: 'bold'
                                    }}>Leader</Typography>
                                </Box>
                                <Box className="leaderContainer" sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <InfoItem label="Id" value={topicInfo.leaderID} />
                                    <InfoItem label="Name" value={topicInfo.leaderName} />
                                    <InfoItem label="Mail" value={topicInfo.leaderEmail} />
                                    <InfoItem label="Phone" value={topicInfo.leaderPhone} />
                                </Box>
                            </Box>
                            <Box className="member" sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '90%',
                            }}>
                                <Box className="memberTitle" sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                                    <Groups fontSize='large' sx={{ color: '#D82C2C' }} />
                                    <Typography sx={{
                                        color: '#D82C2C',
                                        fontSize: '26px',
                                        marginLeft: '10px',
                                        fontWeight: 'bold'
                                    }}>Member</Typography>
                                </Box>
                                {topicInfo?.members?.map((item, index) => (
                                    <Box className="memberContainer" sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <Box className="memberIndexTitle">
                                            <Typography sx={{
                                                paddingLeft: '60px',
                                                fontSize: '18px',
                                                color: '#707070',
                                                fontWeight: 'bold'
                                            }}>
                                                Member {index + 1}
                                            </Typography>
                                        </Box>
                                        <Box className="memberIndexContainer" sx={{ paddingLeft: '10px' }}>
                                            <InfoItemMember label="Id" value={item.studentCode} />
                                            <InfoItemMember label="Name" value={item.studentFullname} />
                                            <InfoItemMember label="Mail" value={item.studentEmail} />
                                            <InfoItemMember label="Phone" value={item.studentPhone} />
                                        </Box>
                                    </Box>
                                ))}
                            </Box>

                            <Box className="time" sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '90%',
                            }}>
                                <Box className="timeTitle" sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                                    <AccessAlarm fontSize='large' sx={{ color: '#D82C2C' }}></AccessAlarm>
                                    <Typography sx={{
                                        color: '#D82C2C',
                                        fontSize: '26px',
                                        marginLeft: '10px',
                                        fontWeight: 'bold'
                                    }}>Execution Time</Typography>
                                </Box>
                                <Box className="leaderContainer" sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <InfoItem label="Start Time" value={topicInfo.topicDateStart} />
                                    <InfoItem label="End Time" value={topicInfo.topicDateEnd} />

                                </Box>
                            </Box>

                            <Box className="status" sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '90%',
                            }}>
                                <Box className="statusTitle" sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                                    <DonutLarge fontSize='large' sx={{ color: '#D82C2C' }}></DonutLarge>
                                    <Typography sx={{
                                        color: '#D82C2C',
                                        fontSize: '26px',
                                        marginLeft: '10px',
                                        fontWeight: 'bold'
                                    }}>Status</Typography>
                                </Box>
                                <Box className="statusContainer" sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <Typography sx={{
                                        fontSize: '20px',
                                        color: '#707070',
                                        paddingLeft: '60px',
                                    }}>
                                        Waiting for Mentor Approval
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default MentorProjectInformation