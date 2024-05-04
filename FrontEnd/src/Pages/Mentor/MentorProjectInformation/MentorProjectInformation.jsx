import React from 'react'
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";
import './MentorProjectInformation.scss'
import { Article, Person2, Link, Person, Groups, AccessAlarm, WorkspacePremium } from "@mui/icons-material";


const MentorProjectInformation = () => {
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
                                color: '#707070'
                            }}>Describle</Typography>
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
                            }}>Technology</Typography>
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
                        height: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'start'
                    }}>
                        <Box sx={{
                            width: '90%',
                            height: '600px',
                            background: '#F6E8E8',
                            border: 'solid 0.5px #707070',
                            borderRadius: '30px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-evenly',
                            alignItems: 'center'
                        }}>
                            <Typography>Đoạn này chưa sửa</Typography>
                            <Typography>Push tạm lên trước</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default MentorProjectInformation