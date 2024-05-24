import * as React from 'react';
import { Button, Box, Typography } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { Edit, Delete } from "@mui/icons-material";
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllTopic } from '../../../api/facultyApi';

const columns = [
    {
        field: 'id',
        headerName: 'No.',
        width: 100,
    },
    { field: 'projectCode', headerName: 'Project Code', width: 300 },
    { field: 'projectName', headerName: 'Project Name', width: 400 },
    { field: 'leader', headerName: 'Leader', width: 300 },
    { 
        field: 'status', 
        headerName: 'Status', 
        width: 200,
        renderCell: (params) => {
            const status = params.row.status;
            let color = '';
            switch (status) {
                case 'Approved':
                    color = '#ffff00'; 
                    break;
                case 'Refuse':
                    color = '#ff0000';
                    break;
                case 'Accept':
                    color = '#00ff00'; 
                    break;
                case 'Complete':
                    color = '#0000ff'; 
                    break;
                default:
                    color = '';
            }
            return (
                <div style={{ backgroundColor: color, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius:'10px' }}>
                    {status}
                </div>
            );
        },
    },
];

const Project = () => {

    const [topics, setTopics] = useState([]);

    useEffect(()=>{
        getAllTopic()
        .then((data) => {
            setTopics(data);
        })
        .catch((e)=>{
            console.log(e);
        })
    })
    const rows = topics.map((item, index) => ({
        id: index + 1,
        projectCode: item.topicCode,
        projectName: item.topicName,
        leader: item.leader,
        status: item.topicStatus,
        
      }));
    

    return (
        <Box className="container" sx={{ margin: "50px 0 0 50px" }}>
            <Typography
                variant="h4"
                sx={{
                    color: "#D82C2C",
                    fontWeight: "bold",
                }}>
                Project
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

export default Project;