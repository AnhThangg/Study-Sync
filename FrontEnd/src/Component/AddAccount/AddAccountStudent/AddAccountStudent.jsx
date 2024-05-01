import * as React from 'react';
import { Outlet, NavLink, useLocation } from "react-router-dom";
import {
    Button,
    Box,
    Typography,
    TextField,
    MenuItem,
    Alert,
    Snackbar
} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { Edit, Delete } from "@mui/icons-material";
import { useEffect } from 'react';
import { useState } from 'react';
import { getDistricts, getProvinces, getWards } from '../../../api/unitVietNamApi';
import { createAccount } from '../../../api/adminApi';

const AddAccountStudent = () => {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [province, setProvince] = useState();
    const [district, setDistrict] = useState();
    const [ward, setWard] = useState();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [faculty, setFaculty] = useState('');
    const [studentClass, setStudentClass] = useState('');
    const [studentCode, setStudentCode] = useState('');
    const [phone, setPhone] = useState('');
    const [studentSex, setStudentSex] = useState('1');
    const [birthday, setBirthday] = useState('');
    const [fullname, setFullname] = useState('');
    const [address, setAddress] = useState('');
    const [check, setCheck] = useState(true);
    const [message, setMessage] = useState('');
    const [isCheckAlert, setIsCheckAlert] = useState(false);
    const role = 'student';
    const sex = [
        {
            value: '1',
            label: 'Male'
        },
        {
            value: '0',
            label: 'Female'
        },
    ];
    useEffect(() => {
        getProvinces()
            .then(data => {
                setProvinces(data)
            })
            .catch(e => {
                console.log(e);
            })
    }, []);

    useEffect(() => {
        getDistricts(province?.code)
            .then(data => {
                setDistricts(data)
            })
            .catch(e => {
                console.log(e)
            })
    }, [province]);

    useEffect(() => {
        getWards(district?.code)
            .then(data => {
                setWards(data)
            })
            .catch(e => {
                console.log(e)
            })
    }, [district]);

    const checkTextField = async () => {
        setMessage('Please fill out all information in the fields marked with !');
        if (!username || !password || !email || !faculty ||
            !studentClass || !studentCode || !phone ||
            !studentSex || !birthday || !fullname ||
            !province || !district || !ward || !address) {
            console.log('cc');
            setCheck(false);
            setIsCheckAlert(true);
            setTimeout(() => {
                setIsCheckAlert(false);
            }, 4000)
        } else {
            setMessage('Please fill out all information in the fields marked with !');
            const res = await createAccount('student', {
                userName: username,
                password: password,
                role: 'student',
                studentClass: studentClass,
                studentCode: studentCode,
                studentFullname: fullname,
                studentSex: (studentSex === '1') ? true : false,
                studentBirthday: birthday,
                studentEmail: email,
                studentAddress: address + ', ' + ward.name + ', ' + district.name + ', ' + province.name,
                studentPhone: phone,
                facultyCode: faculty
            })
        }
        setIsCheckAlert(true);
        setTimeout(() => {
            setIsCheckAlert(false);
        }, 4000)
        // console.log(username)
        // console.log(password)
        // console.log(email)
        // console.log(faculty)
        // console.log(studentClass)
        // console.log(studentCode)
        // console.log(phone)
        // console.log(studentSex)
        // console.log(birthday)
        // console.log(fullname)
        // console.log(province)
        // console.log(district)
        // console.log(ward)
        // console.log(address)
        // console.log(address + ', ' + ward.name + ', ' + district.name + ', ' + province.name)
    }
    return (
        <>
            <Box className="container" sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '25px',
            }}>
                <Box className="containerLeft" sx={{
                    display: 'flex',
                    width: '11%',
                    flexDirection: 'column',
                    alignItems: 'end',
                    gap: '30px'
                }}>
                    <Typography sx={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: '#999',
                        height: '40px',
                    }}>
                        Username:
                    </Typography>
                    <Typography sx={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: '#999',
                        height: '40px',
                    }}>
                        Password:
                    </Typography>
                    <Typography sx={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: '#999',
                        height: '40px',
                    }}>
                        Email:
                    </Typography>
                    <Typography sx={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: '#999',
                        height: '40px',
                    }}>
                        Faculty:
                    </Typography>
                    <Typography sx={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: '#999',
                        height: '40px',
                    }}>
                        Student Code:
                    </Typography>
                    <Typography sx={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: '#999',
                        height: '40px',
                    }}>
                        Sex:
                    </Typography>
                    <Typography sx={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: '#999',
                        height: '40px',
                    }}>
                        Full Name:
                    </Typography>
                    <Typography sx={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: '#999',
                        height: '40px',
                    }}>
                        District:
                    </Typography>
                    <Typography sx={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: '#999',
                        height: '40px',
                    }}>
                        Address:
                    </Typography>
                </Box>
                <Box className="containerRight" sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '50%',
                    gap: '30px'
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '10px'
                    }}>
                        <TextField
                            label='Enter Username'
                            size='small'
                            sx={{
                                width: '100%',
                            }}
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                        />
                        {(!check && !username) && <Typography sx={{
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '30px',
                            fontWeight: 'bold',
                            color: '#D82C2C',
                            height: '40px',
                        }}>!</Typography>}

                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '10px'
                    }}>
                        <TextField
                            label='Enter Password'
                            size='small'
                            type='password'
                            sx={{ width: '100%' }}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        {(!check && !password) && <Typography sx={{
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '30px',
                            fontWeight: 'bold',
                            color: '#D82C2C',
                            height: '40px',
                        }}>!</Typography>}
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '10px'
                    }}>
                        <TextField
                            label='Enter Email'
                            size='small'
                            type='email'
                            sx={{ width: '100%' }}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        {(!check && !email) && <Typography sx={{
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '30px',
                            fontWeight: 'bold',
                            color: '#D82C2C',
                            height: '40px',
                        }}>!</Typography>}
                    </Box>
                    <Box className="row" sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '10px',
                            width: '40%'
                        }}>
                            <TextField
                                label='Select Faculty'
                                size='small'
                                sx={{ width: '100%' }}
                                onChange={(e) => {
                                    setFaculty(e.target.value);
                                }}
                            />
                            {(!check && !faculty) && <Typography sx={{
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '30px',
                                fontWeight: 'bold',
                                color: '#D82C2C',
                                height: '40px',
                            }}>!</Typography>}
                        </Box>
                        <Box className="rowRight" sx={{
                            width: '55%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            gap: '20px'
                        }}>
                            <Typography sx={{
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '20px',
                                fontWeight: 'bold',
                                color: '#999',
                                height: '40px',
                            }}>
                                Class:
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '10px',
                                width: '100%'
                            }}>
                                <TextField
                                    label='Enter Class'
                                    size='small'
                                    sx={{ width: '100%' }}
                                    onChange={(e) => {
                                        setStudentClass(e.target.value);
                                    }}
                                />
                                {(!check && !studentClass) && <Typography sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: '30px',
                                    fontWeight: 'bold',
                                    color: '#D82C2C',
                                    height: '40px',
                                }}>!</Typography>}
                            </Box>
                        </Box>
                    </Box>
                    <Box className="row" sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '10px',
                            width: '40%'
                        }}>
                            <TextField
                                label='Enter Student Code'
                                size='small'
                                sx={{ width: '100%' }}
                                onChange={(e) => {
                                    setStudentCode(e.target.value);
                                }}
                            />
                            {(!check && !studentCode) && <Typography sx={{
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '30px',
                                fontWeight: 'bold',
                                color: '#D82C2C',
                                height: '40px',
                            }}>!</Typography>}
                        </Box>
                        <Box className="rowRight" sx={{
                            width: '55%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            gap: '20px'
                        }}>
                            <Typography sx={{
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '20px',
                                fontWeight: 'bold',
                                color: '#999',
                                height: '40px',
                            }}>
                                Phone:
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '10px',
                                width: '100%'
                            }}>
                                <TextField
                                    label='Enter Phone Number'
                                    size='small'
                                    type='number'
                                    sx={{ width: '100%' }}
                                    onChange={(e) => {
                                        setPhone(e.target.value);
                                    }}
                                />
                                {(!check && !phone) && <Typography sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: '30px',
                                    fontWeight: 'bold',
                                    color: '#D82C2C',
                                    height: '40px',
                                }}>!</Typography>}
                            </Box>
                        </Box>
                    </Box>
                    <Box className="row" sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '10px',
                            width: '40%'
                        }}>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label='Select Sex'
                                size='small'
                                defaultValue="1"
                                sx={{ width: '100%' }}
                                onChange={(e) => {
                                    setStudentSex(e.target.value);
                                }}
                            >
                                {sex.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            {(!check && !studentSex) && <Typography sx={{
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '30px',
                                fontWeight: 'bold',
                                color: '#D82C2C',
                                height: '40px',
                            }}>!</Typography>}
                        </Box>
                        <Box className="rowRight" sx={{
                            width: '55%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            gap: '10px'
                        }}>
                            <Typography sx={{
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '20px',
                                fontWeight: 'bold',
                                color: '#999',
                                height: '40px',
                            }}>
                                Birthday:
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '10px',
                                width: '100%'
                            }}>
                                <TextField
                                    type='date'
                                    size='small'
                                    label='Select Date'
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    sx={{
                                        width: '100%'
                                    }}
                                    onChange={(e) => {
                                        setBirthday(e.target.value);
                                    }}
                                />
                                {(!check && !birthday) && <Typography sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: '30px',
                                    fontWeight: 'bold',
                                    color: '#D82C2C',
                                    height: '40px',
                                }}>!</Typography>}
                            </Box>
                        </Box>
                    </Box>

                    <Box className="row" sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '10px',
                            width: '40%'
                        }}>
                            <TextField
                                label='Enter Full Name'
                                size='small'
                                sx={{ width: '100%' }}
                                onChange={(e) => {
                                    setFullname(e.target.value);
                                }}
                            />
                            {(!check && !fullname) && <Typography sx={{
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '30px',
                                fontWeight: 'bold',
                                color: '#D82C2C',
                                height: '40px',
                            }}>!</Typography>}
                        </Box>
                        <Box className="rowRight" sx={{
                            width: '55%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            gap: '20px'
                        }}>
                            <Typography sx={{
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '20px',
                                fontWeight: 'bold',
                                color: '#999',
                                height: '40px',
                            }}>
                                Province:
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '10px',
                                width: '100%'
                            }}>
                                <TextField
                                    id="outlined-select-currency"
                                    label='Select Province'
                                    size='small'
                                    select
                                    sx={{ width: '100%' }}
                                >
                                    {provinces.map((option) => (
                                        <MenuItem
                                            key={option.code}
                                            value={option.code}
                                            onClick={() => {
                                                setProvince({
                                                    code: option.code,
                                                    name: option.name_with_type
                                                })
                                            }}
                                        >
                                            {option.name_with_type}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                {(!check && !province) && <Typography sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: '30px',
                                    fontWeight: 'bold',
                                    color: '#D82C2C',
                                    height: '40px',
                                }}>!</Typography>}
                            </Box>
                        </Box>
                    </Box>

                    <Box className="row" sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '10px',
                            width: '40%'
                        }}>
                            <TextField
                                id="outlined-select-currency"
                                label='Select District'
                                size='small'

                                // onMouseDown={() => {
                                //     if (!province) {
                                //         setOpenSnackbar(true);
                                //         open = 'false'
                                //     }
                                // }}
                                select
                                sx={{ width: '100%' }}
                            >
                                {districts.map((option) => (
                                    <MenuItem
                                        key={option.code}
                                        value={option.code}
                                        onClick={() => {
                                            setDistrict({
                                                code: option.code,
                                                name: option.name_with_type
                                            })
                                        }}
                                    >
                                        {option.name_with_type}
                                    </MenuItem>
                                ))}
                            </TextField>
                            {(!check && !district) && <Typography sx={{
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '30px',
                                fontWeight: 'bold',
                                color: '#D82C2C',
                                height: '40px',
                            }}>!</Typography>}
                        </Box>
                        <Box className="rowRight" sx={{
                            width: '55%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            gap: '20px'
                        }}>
                            <Typography sx={{
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '20px',
                                fontWeight: 'bold',
                                color: '#999',
                                height: '40px',
                            }}>
                                Ward:
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '10px',
                                width: '100%'
                            }}>
                                <TextField
                                    id="outlined-select-currency"
                                    label='Select Ward'
                                    size='small'
                                    // onMouseDown={() => {
                                    //     if (!province) {
                                    //         setOpenSnackbar(true);
                                    //         open = 'false'
                                    //     }
                                    // }}
                                    select
                                    sx={{ width: '100%' }}
                                >
                                    {wards.map((option) => (
                                        <MenuItem
                                            key={option.code}
                                            value={option.code}
                                            onClick={() => {
                                                setWard({
                                                    code: option.code,
                                                    name: option.name_with_type
                                                })
                                            }}
                                        >
                                            {option.name_with_type}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                {(!check && !ward) && <Typography sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: '30px',
                                    fontWeight: 'bold',
                                    color: '#D82C2C',
                                    height: '40px',
                                }}>!</Typography>}
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '10px',
                        width: '100%'
                    }}>
                        <TextField
                            label='Enter Address'
                            size='small'
                            sx={{ width: '100%' }}
                            onChange={(e) => {
                                setAddress(e.target.value);
                            }}
                        />
                        {(!check && !address) && <Typography sx={{
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '30px',
                            fontWeight: 'bold',
                            color: '#D82C2C',
                            height: '40px',
                        }}>!</Typography>}
                    </Box>
                </Box>
                <Box className="containerFinal">
                </Box>
            </Box>
            <Box className="btnAdd" sx={{
                marginTop: '30px',
                width: '90%',
                display: 'flex',
                justifyContent: 'end'

            }}>
                <Button
                    onClick={checkTextField}
                    sx={{
                        border: '2px solid #D82C2C',
                        width: '200',
                        height: '50px',
                        color: '#D82C2C',
                        borderRadius: '20px',
                        padding: '10px',
                        '&:hover': {
                            backgroundColor: '#D82C2C',
                            color: '#FFF',
                        },
                    }}>
                    Add Student
                </Button>
                <Snackbar open={isCheckAlert} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                    <Alert variant="outlined" severity="error" >{message}</Alert>
                </Snackbar>
            </Box>
        </>
        //
    )
}

export default AddAccountStudent