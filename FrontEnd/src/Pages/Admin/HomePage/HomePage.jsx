import * as React from 'react';
import { Outlet, NavLink, useLocation } from "react-router-dom";
import {
    Button,
    Box,
    Typography,
} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { Edit, Delete} from "@mui/icons-material";

const columns = [
    {
        field: 'id',
        headerName: 'No.',
        width: 120,
        // renderCell: (params) => {
        //     return (
        //         <NavLink to={`/detail/${params.row.id}`}>Chi tiết</NavLink>
        //     );
        // },
    },
    { field: 'role', headerName: 'Role', width: 200 },
    { field: 'username', headerName: 'User Name', width: 350 },
    { field: 'roleCode', headerName: 'Role Code', width: 300, },
    {
        field: 'action',
        headerName: 'Action',
        description: 'This column has edit and delete functions and cannot be sorted',
        sortable: false,
        width: 300,
        headerAlign: 'center',
        align: 'center',
        renderCell: (params) => {
            return (
                <div>
                    <Button
                        onClick={() => handleEdit(params.row.id)}
                        sx={{
                            color: '#707070',
                            '&:hover': {
                                background: 'none',
                                color: '#D82C2C'
                            }
                        }}>
                        <Edit fontSize='large' />
                    </Button>
                    <Button
                        onClick={() => handleDelete(params.row.id)}
                        sx={{
                            color: '#707070',
                            '&:hover': {
                                background: 'none',
                                color: '#D82C2C'
                            }
                        }}>
                        <Delete fontSize='large' />
                    </Button>
                </div>
            );
        },
    },
];

const rows = [
    { id: 1, role: 'univer', username: 'truongdulich', roleCode: 'DTDL' },
    { id: 2, role: 'univer', username: 'truongdaotao', roleCode: 'DTQT' },
    { id: 3, role: 'faculty', username: 'nguyentanhthang', roleCode: '26211329003' },
    { id: 4, role: 'student', username: 'duongnguyencongluan', roleCode: '26211329003' },
    { id: 5, role: 'student', username: 'nguyenhoangquocanh', roleCode: '26211329003' },
    { id: 6, role: 'student', username: 'nguyenquocnhat', roleCode: '26211329003' },
    { id: 7, role: 'student', username: 'nguyenxuanvang', roleCode: '26211329003' },
    { id: 8, role: 'student', username: 'nguyentanhdo', roleCode: '26211329003' },
    { id: 9, role: 'student', username: 'trancongtri', roleCode: '26211329003' },
    { id: 10, role: 'univer', username: 'truongdulich', roleCode: 'DTDL' },
    { id: 11, role: 'univer', username: 'truongdaotao', roleCode: 'DTQT' },
    { id: 12, role: 'faculty', username: 'nguyentanhthang', roleCode: '26211329003' },
    { id: 13, role: 'student', username: 'duongnguyencongluan', roleCode: '26211329003' },
    { id: 14, role: 'student', username: 'nguyenhoangquocanh', roleCode: '26211329003' },
    { id: 15, role: 'student', username: 'nguyenquocnhat', roleCode: '26211329003' },
    { id: 16, role: 'student', username: 'nguyenxuanvang', roleCode: '26211329003' },
    { id: 17, role: 'student', username: 'nguyentanhdo', roleCode: '26211329003' },
    { id: 18, role: 'student', username: 'trancongtri', roleCode: '26211329003' },
    { id: 19, role: 'student', username: 'nguyentanhdo', roleCode: '26211329003' },
    {
        id: 20
        , role: 'student', username: 'trancongtri', roleCode: '26211329003'
    },
];

const HomePage = () => {
    return (
        <Box className="container" sx={{ margin: "50px 0 0 50px" }}>
            <Typography
                variant="h4"
                sx={{
                    color: "#D82C2C",
                    fontWeight: "bold",
                }}>
                HomePage
            </Typography>

            <Box className="tableAccount" sx={{
                width: '95%',
                background: '#F6E8E8',
                borderRadius: '20px',
                marginTop: '50px',
                marginBottom: '50px',
            }}>
                <DataGrid
                    autoHeight
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 10 },
                        },
                    }}
                    pageSizeOptions={[5, 10, 15, 20]}
                    sx={{
                        border: 'none',
                        '& .MuiDataGrid-container--top [role=row]': {
                            background: "#D82C2C",
                            fontWeight: 'bold'
                        },
                        '& .MuiDataGrid-columnHeaderTitle': {
                            fontWeight: 'bold',
                            color: '#fff',
                            fontSize: '30px',
                        },
                        '& .MuiDataGrid-row': {
                            fontSize: '25px',
                            color: '#707070'
                        },
                        '& .css-1essi2g-MuiDataGrid-columnHeaderRow': {
                            borderTopLeftRadius: '20px',
                            borderTopRightRadius: '20px',
                        }
                    }}
                />
            </Box>
        </Box>
    )
}

export default HomePage