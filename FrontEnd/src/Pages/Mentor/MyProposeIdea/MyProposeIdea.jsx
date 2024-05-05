import * as React from 'react';
import { Button, Box, Typography } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { Edit, Delete } from "@mui/icons-material";
import { useState } from 'react';

const MyProposeIdea = () => {

    const columns = [
        { field: 'id', headerName: 'No.', width: 100, },
        { field: 'ideaName', headerName: 'IdeaName', width: 250 },
        { field: 'mentorCode', headerName: 'Mentor Code', width: 280 },
        { field: 'createdAt', headerName: 'Created At', width: 250 },
        { field: 'updatedAt', headerName: 'Updated At', width: 220 },
        {
            field: 'action',
            headerName: 'Action',
            description: 'This column has edit and delete functions and cannot be sorted',
            sortable: false,
            width: 200,
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => {
                return (
                    <div>
                        <Button
                            onClick={() => handleEdit(params.row.accountId)}
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
                            onClick={() => onDeleteAccount(params.row.accountId)}
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
    const [MyProposeIdea, setMyProposeIdea] = useState([
        { id: 1, ideaName: 'Exam Master22', mentorCode: '123456', createdAt: '22/03/2024', updatedAt: '30/04/2024' },
        { id: 2, ideaName: 'Exam Master23', mentorCode: '123456', createdAt: '22/03/2024', updatedAt: '30/04/2024' },
        { id: 3, ideaName: 'Exam Master24', mentorCode: '123456', createdAt: '22/03/2024', updatedAt: '30/04/2024' },
        { id: 4, ideaName: 'Exam Master25', mentorCode: '123456', createdAt: '22/03/2024', updatedAt: '30/04/2024' },
        { id: 5, ideaName: 'Exam Master26', mentorCode: '123456', createdAt: '22/03/2024', updatedAt: '30/04/2024' },
    ]);

    return (
        <Box className="container" sx={{ margin: "50px 0 0 50px" }}>
            <Typography
                variant="h4"
                sx={{
                    color: "#D82C2C",
                    fontWeight: "bold",
                }}>
                My ProposeIdea
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
                    rows={MyProposeIdea}
                    // onCellClick={(e) =>(useNavigate(''))}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 10 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
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

export default MyProposeIdea;