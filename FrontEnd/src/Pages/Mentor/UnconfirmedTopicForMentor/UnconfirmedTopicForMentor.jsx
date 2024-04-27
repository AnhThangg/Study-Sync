import React from 'react'
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";
// import './MentorProjectInformation.scss'
import { Article, Person2, DonutLarge, Person, Groups, AccessAlarm, WorkspacePremium } from "@mui/icons-material";
import './UnconfirmedTopicForMentor.scss';

const UnconfirmedTopicForMentor = () => {
    
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
                        }}>Khoa Công Nghệ Phần Mềm</Typography>
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
                            }}>PJ01SA</Typography>
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
                        }}>SyncStudy : Manage scientific research projects for students in Duy Tan University </Typography>
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
                        justifyContent: 'start',
                        marginTop: '50px',
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
                                color: '#707070'
                            }}>The Goal Of The Subject</Typography>
                            <Typography id="description" sx={{
                                fontSize: '18px',
                                fontWeight: '100',
                                color: '#707070',
                                marginTop: '5px'
                            }}>This project aims to solve the problem of managing
                                scientific research projects at Duy Tan University.
                                Creating a website makes it convenient to register,
                                interact, manage and report students' scientific research projects.
                                Helps lecturers and schools closely follow projects,
                                accurately and completely summarize
                                statistics for each department and group.</Typography>
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
                                color: '#707070'
                            }}>Expected research products of the topic and applicability</Typography>
                            <Typography ClassName="Technologyz" id="technology" sx={{
                                fontSize: '18px',
                                fontWeight: '100',
                                color: '#707070',
                                marginTop: '5px'
                            }}>
                                Frontend : HTML,CSS,React,JavaScript
                            </Typography>
                            <Typography ClassName="Technologyz" id="technology1" sx={{
                                fontSize: '18px',
                                fontWeight: '100',
                                color: '#707070',
                                marginTop: '5px'
                            }}>
                                Back-end : Java.
                            </Typography>
                            <Typography ClassName="Technologyz" id="technology2" sx={{
                                fontSize: '18px',
                                fontWeight: '100',
                                color: '#707070',
                                marginTop: '5px'
                            }}>
                                Database management system : SQL Server.
                            </Typography>
                            <Typography ClassName="Technologyz" id="technology3" sx={{
                                fontSize: '18px',
                                fontWeight: '100',
                                color: '#707070',
                                marginTop: '5px'
                            }}>
                                Design UI : Figma
                            </Typography>
                            <Typography ClassName="Technologyz" id="technology4" sx={{
                                fontSize: '18px',
                                fontWeight: '100',
                                color: '#707070',
                                marginTop: '5px'
                            }}>
                                Other tools : Postman, trello,github...
                            </Typography>
                        </Box>

                        <Box className="function" sx={{
                            // background: 'red',
                            // height: '300px',
                            width: '90%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'end',
                            gap: '50px',
                            paddingTop: '50px'
                        }}>
                            <Button className="reject" sx={{
                                background: '#fff',
                                border: '1px solid #D82C2C',
                                borderRadius: '10px',
                                fontSize: '20px',
                                color: '#D82C2C',
                                width: '200px',
                                '&:hover': {
                                    background: '#D82C2C',
                                    color: '#fff',
                                }
                            }}>
                                Reject
                            </Button>
                            <Button className="approve" sx={{
                                background: '#fff',
                                border: '1px solid #41B06E',
                                borderRadius: '10px',
                                fontSize: '20px',
                                color: '#41B06E',
                                width: '200px',
                                '&:hover': {
                                    background: '#41B06E',
                                    color: '#fff',
                                }
                            }}>
                                Approve
                            </Button>
                        </Box>
                    </Box>



                    <Box ClassName="InforMB" sx={{
                        width: '35%',
                        height: '500px',
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
                                    <InfoItem label="Id" value="26211329003" />
                                    <InfoItem label="Name" value="Nguyễn Trần Anh Thắng" />
                                    <InfoItem label="Mail" value="anhthang2529@gmail.com" />
                                    <InfoItem label="Phone" value="0869132529" />
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
                                <Box className="memberContainer" sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Box className="memberIndexTitle">
                                        <Typography sx={{
                                            paddingLeft: '60px',
                                            fontSize: '18px',
                                            color: '#707070',
                                            fontWeight: 'bold'
                                        }}>
                                            Member 1
                                        </Typography>
                                    </Box>
                                    <Box className="memberIndexContainer" sx={{ paddingLeft: '10px' }}>
                                        <InfoItemMember label="Id" value="26211329003" />
                                        <InfoItemMember label="Name" value="Dương Nguyễn Công Luận" />
                                        <InfoItemMember label="Mail" value="duongnguyencongluan@gmail.com" />
                                        <InfoItemMember label="Phone" value="0869132529" />
                                    </Box>
                                </Box>

                                <Box className="memberContainer" sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Box className="memberIndexTitle">
                                        <Typography sx={{
                                            paddingLeft: '60px',
                                            fontSize: '18px',
                                            color: '#707070',
                                            fontWeight: 'bold'
                                        }}>
                                            Member 2
                                        </Typography>
                                    </Box>
                                    <Box className="memberIndexContainer" sx={{ paddingLeft: '10px' }}>
                                        <InfoItemMember label="Id" value="26211329003" />
                                        <InfoItemMember label="Name" value="Dương Nguyễn Công Luận" />
                                        <InfoItemMember label="Mail" value="duongnguyencongluan@gmail.com" />
                                        <InfoItemMember label="Phone" value="0869132529" />
                                    </Box>
                                </Box>

                                <Box className="memberContainer" sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Box className="memberIndexTitle">
                                        <Typography sx={{
                                            paddingLeft: '60px',
                                            fontSize: '18px',
                                            color: '#707070',
                                            fontWeight: 'bold'
                                        }}>
                                            Member 3
                                        </Typography>
                                    </Box>
                                    <Box className="memberIndexContainer" sx={{ paddingLeft: '10px' }}>
                                        <InfoItemMember label="Id" value="26211329003" />
                                        <InfoItemMember label="Name" value="Dương Nguyễn Công Luận" />
                                        <InfoItemMember label="Mail" value="duongnguyencongluan@gmail.com" />
                                        <InfoItemMember label="Phone" value="0869132529" />
                                    </Box>
                                </Box>
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
                                    <InfoItem label="Start Time" value="21/09/2024" />
                                    <InfoItem label="End Time" value="21/09/2025" />

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

export default UnconfirmedTopicForMentor