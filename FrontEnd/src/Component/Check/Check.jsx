import React, { useEffect, useState } from "react";
import { Outlet, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
  Stack,
} from "@mui/material";
import "animate.css";
import logoDTU from "../../assets/Logo-DuyTan.png";
import imgLogin from "../../assets/imageLogin.png";
import { login } from "../../api/authApi";
import { getRole } from "../../api/personalApi";

const Check = () => {
  
  return (
    <Box
      className="contain"
      sx={{
        height: "100vh",
        width: "100%",
        background: "#F6E6E6",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
    </Box>
  );
};

export default Check;
