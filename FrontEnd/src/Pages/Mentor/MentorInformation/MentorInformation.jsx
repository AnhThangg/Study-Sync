import React, { useEffect, useState } from 'react'
import {
    Box,
    Icon,
    Typography,
    Input,
    IconButton,
    Button,
} from "@mui/material";
import { FileUpload, RecentActors } from "@mui/icons-material";
import { getInfo } from "../../../api/infoApi";
import { useNavigate, useParams } from 'react-router-dom';
const MentorInformation = () => {
    const [infoMentor, setInfoMentor] = useState({});
    useEffect(() => {
        getInfo()
            .then(data => {
                setInfoMentor(data);
            })
            .catch((e) => {
                console.log(e);
            })
    }, [])
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    const address = (addressString) => {
        if (addressString) {
            const parts = addressString.split(',').map(part => part.trim());
            const address = parts[0];
            const ward = parts[1];
            const district = parts[2];
            const province = parts[3];
            return { address, ward, district, province };
        }
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
                    Profile
                </Typography>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    color: "#D82C2C",
                    padding: "20px 0 0 20px",
                }}
            >
                <RecentActors fontSize="large" />
                <Typography
                    sx={{
                        marginLeft: "5px",
                        fontWeight: "bold",
                        fontSize: "30px",
                    }}
                >
                    PERSONAL INFORMATION
                </Typography>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    padding: "30px 50px 20px 60px",
                }}
            >
                <Box
                    className="Information_User"
                    sx={{
                        display: "flex",
                        marginLeft: "70px",
                    }}
                >
                    <Box
                        className="Infor_Left"
                        sx={{
                            textAlign: "right",
                        }}
                    >
                        <Typography sx={{ fontWeight: "bold" }}>Mentor name:</Typography>
                        <Typography sx={{ fontWeight: "bold" }}>Mentor code:</Typography>
                        <Typography sx={{ fontWeight: "bold" }}>Sex:</Typography>
                        <Typography sx={{ fontWeight: "bold" }}>Date of birth:</Typography>
                        <Typography sx={{ fontWeight: "bold" }}>Email(DTU):</Typography>
                    </Box>
                    <Box
                        className="Infor_Right"
                        sx={{
                            paddingLeft: "20px",
                        }}
                    >
                        <Typography sx={{ fontWeight: "bold" }}>
                            {infoMentor?.mentorFullname}
                        </Typography>
                        <Typography>{infoMentor?.mentorCode}</Typography>
                        <Typography>{(infoMentor?.mentorSex) ? 'Nam' : 'Nữ'}</Typography>
                        <Typography>{formatDate(infoMentor?.mentorBirthday)}</Typography>
                        <Typography>{infoMentor?.mentorEmail}</Typography>
                    </Box>
                </Box>
                <Box
                    className="Avatar_User"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginLeft: "auto",
                        paddingRight: "15%",
                    }}
                >
                    <Box
                        sx={{
                            border: "5px solid #D82C2C",
                            alignItems: "center",
                            width: "155px",
                            height: "147px",
                            backgroundColor: "#D9D9D9",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <label htmlFor="upload-file">
                            <IconButton
                                component="span"
                                aria-label="upload-picture"
                                sx={{
                                    width: "100px",
                                    height: "100px",
                                }}
                            >
                                <FileUpload fontSize="large" />
                            </IconButton>
                        </label>
                        <Input id="upload-file" type="file" sx={{ display: "none" }} />
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    borderBottom: "1.5px solid #707070",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        color: "#D82C2C",
                        fontWeight: "bold",
                        paddingLeft: "20px",
                    }}
                >
                    Current Address:
                </Typography>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    padding: "30px 50px 20px 60px",
                }}
            >
                <Box
                    className="Information_User"
                    sx={{
                        display: "flex",
                    }}
                >
                    <Box
                        className="Infor_Left"
                        sx={{
                            textAlign: "right",
                        }}
                    >
                        <Typography sx={{ fontWeight: "bold" }}>
                            Address/Group/Village:
                        </Typography>
                        <Typography sx={{ fontWeight: "bold" }}>Wards:</Typography>
                        <Typography sx={{ fontWeight: "bold" }}>District:</Typography>
                        <Typography sx={{ fontWeight: "bold" }}>City:</Typography>
                        <Typography sx={{ fontWeight: "bold" }}>Phone:</Typography>
                    </Box>
                    <Box
                        className="Infor_Right"
                        sx={{
                            paddingLeft: "20px",
                        }}
                    >
                        <Typography>{infoMentor?.mentorAddress}</Typography>
                        <Typography>{address(infoMentor?.mentorAddress)?.ward}</Typography>
                        <Typography>{address(infoMentor?.mentorAddress)?.district}</Typography>
                        <Typography>{address(infoMentor?.mentorAddress)?.province}</Typography>
                        <Typography>{infoMentor?.mentorPhone}</Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Button
                    sx={{
                        backgroundColor: "#D9D9D9",
                        border: "5px solid #D82C2C",
                        borderRadius: "20px",
                        width: "150px",
                        height: "50px",
                        color: "#000",
                        fontWeight: "bold",
                        fontSize: "20px",
                    }}
                >
                    Update
                </Button>
            </Box>
        </Box>
    );
}

export default MentorInformation
