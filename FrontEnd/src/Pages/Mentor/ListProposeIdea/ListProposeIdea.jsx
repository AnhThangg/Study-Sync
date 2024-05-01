import * as React from 'react';
import { Button, Box, Typography } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { Edit, Delete } from "@mui/icons-material";
import { useState } from 'react';

const columns = [
    {
        field: 'id',
        headerName: 'No.',
        width: 350,
    },
    { field: 'ideaName', headerName: 'IdeaName', width: 500 },
    { field: 'mentorFullname', headerName: 'Mentor Fullname', width: 500 },
   
    
];

const ListProposeIdea = () => {
    const [ListProposeIdea, setListProposeIdea] = useState([
        { id: 1, ideaName: 'Exam Master22', mentorFullname: 'Trần Thị Thuý Trinh'},
        { id: 2, ideaName: 'Exam Master23', mentorFullname: 'Trần Thị Thuý Trinh'},
        { id: 3, ideaName: 'Exam Master24', mentorFullname: 'Trần Thị Thuý Trinh'},
        { id: 4, ideaName: 'Exam Master25', mentorFullname: 'Trần Thị Thuý Trinh' },
        { id: 5, ideaName: 'Exam Master26', mentorFullname: 'Trần Thị Thuý Trinh' },
    ]);

    return (
        <Box className="container" sx={{ margin: "50px 0 0 50px" }}>
            <Typography
                variant="h4"
                sx={{
                    color: "#D82C2C",
                    fontWeight: "bold",
                }}>
                List ProposeIdea
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
                    rows={ListProposeIdea}
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

export default ListProposeIdea;