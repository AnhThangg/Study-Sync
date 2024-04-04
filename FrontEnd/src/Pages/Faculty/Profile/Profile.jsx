import React, { useEffect, useState } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";
import { ContactEmergency, AccountBox, Person, AccountTree } from "@mui/icons-material";
import logoDTU from "../../../assets/Logo-DuyTan.png";
import avatar from "../../../assets/Avatar.png";
import "./Profile.scss"


const Profile = () => {
  return (
    <Box className="container" sx={{
      width: '100%',
      height: '100vh',
    }}>
      <Box className="title" sx={{
        borderBottom: '1.5px solid #707070',
        margin: '0 0 0 50px',
        paddingTop: '50px',
      }}>
        <Typography className="titleText" sx={{
          color: '#D82C2C',
          fontSize: '30px',
          fontWeight: 'bold'
        }}>
          Profile
        </Typography>
      </Box>
    </Box>
  )
}

export default Profile