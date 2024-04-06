import * as React from 'react';
import { Outlet, NavLink, useLocation } from "react-router-dom";
import {
    Button,
    Box,
    Typography,
    TextField
} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { Edit, Delete } from "@mui/icons-material";
import { useEffect } from 'react';
import { useState } from 'react';

const AddAccountStudent = () => {
    fetch
    return (
        <Box className="container" sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '25px',
        }}>
            <Box className="containerLeft" sx={{
                display: 'flex',
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
                    Address:
                </Typography>
                <Typography sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#999',
                    height: '40px',
                }}>
                    Nation:
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
                    Phone:
                </Typography>
            </Box>
            <Box className="containerRight" sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '30px'
            }}>
                <TextField size='small' sx={{ width: '100%' }} />
                <TextField size='small' sx={{ width: '100%' }} />
                <TextField size='small' sx={{ width: '100%' }} />
                <TextField size='small' sx={{ width: '100%' }} />
                <TextField size='small' sx={{ width: '100%' }} />
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '20px'
                }}>
                    <TextField size='small' sx={{ width: '40%' }} />
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '20px',
                        justifyContent: 'space-between'
                    }}>
                        <Typography sx={{
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '20px',
                            fontWeight: 'bold',
                            color: '#999',
                            height: '40px',
                        }}>
                            City:
                        </Typography>
                        <TextField size='small' sx={{ width: '100%' }} />
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '20px'
                }}>
                    <TextField size='small' sx={{ width: '100%' }} />
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
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
                            Wards:
                        </Typography>
                        <TextField size='small' sx={{ width: '100%' }} />
                    </Box>
                </Box>
                <TextField label='Input Phone Number' size='small' sx={{ width: '100%' }} />
            </Box>
            <Box className="containerFinal">

            </Box>
        </Box>
    )
}

export default AddAccountStudent