import React, { useState, useEffect } from "react";
import {
    Box,
    Button,
    IconButton,
    TextField,
    Typography,
    TextareaAutosize,
    Autocomplete,
    Snackbar,
    Alert,
} from "@mui/material";
import { School, AccountTree, Person } from "@mui/icons-material";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import Chart_Faculty from "./Chart_Falculty/Chart_Falculty";

const DashboardFaculty = () => {

  
  return (
    <div>
      <Box sx={{
        marginTop:'20px',
        width:'100%',
        height:'500px',
        display:'flex',
        justifyContent:'center',
    }}>
        <Box className="Chart" sx={{
            marginTop:'30px',
            width:'72%',
            height:'90%',
            background:'#FFFFFF',
            border:'2px solid #999999',
            borderRadius:'10px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}>
          <Chart_Faculty></Chart_Faculty>
        </Box>
      </Box>
    </div>
  )
}

export default DashboardFaculty
