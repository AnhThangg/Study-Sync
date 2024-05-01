import {
    Box,
    Icon,
    Typography,
    Input,
    IconButton,
    Button,
    TextField
} from "@mui/material";
import { React, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { ListAlt } from "@mui/icons-material"

const MentorDetailIdea = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column'
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
                    Edit Idea
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
                    margin: "0 50px 0 50px",
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
                                color: "#707070",
                                marginTop: "50px"
                            }}
                        >
                            Project Name
                        </Typography>
                        <TextField
                            size="medium"
                            label="Project Name"
                            sx={{
                                width: "95%"
                            }}
                            disabled
                        ></TextField>
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
                                color: "#707070"
                            }}
                        >
                            Project Description
                        </Typography>


                        <TextField
                            multiline
                            rows={7}
                            variant="outlined"
                            label="Project Description"
                            style={{
                                width: "95%",
                            }}
                        />;

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
                                color: "#707070"
                            }}
                        >
                            Requirements for students
                        </Typography>
                        <TextField
                            multiline
                            rows={4}
                            variant="outlined"
                            label="Requirements for students"
                            style={{
                                width: "95%",
                            }}
                        />;
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
                                color: "#707070"
                            }}
                        >
                            Other notes
                        </Typography>
                        <TextField
                            size="medium"
                            label="Other notes"
                            sx={{
                                width: "95%",
                                "& .MuiInputBase-input": {
                                    height: '50px',
                                },
                            }}
                        ></TextField>
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
                        gap: '30px'
                    }}>
                        <Button sx={{
                            backgroundColor: "#D9D9D9",
                            border: "5px solid #D82C2C",
                            borderRadius: "20px",
                            width: "150px",
                            height: "50px",
                            color: "#000",
                            fontWeight: "bold",
                            fontSize: "20px"
                        }}>
                            Edit
                        </Button>

                        <Button sx={{
                            backgroundColor: "#D9D9D9",
                            border: "5px solid #D82C2C",
                            borderRadius: "20px",
                            width: "150px",
                            height: "50px",
                            color: "#000",
                            fontWeight: "bold",
                            fontSize: "20px"
                        }}>
                            Cancel
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default MentorDetailIdea
