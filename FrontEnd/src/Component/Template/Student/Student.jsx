import React, { useEffect, useState } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";
import logoDTU from "../../../assets/Logo-DuyTan.png";
import avatar from "../../../assets/Avatar.png";
import "./Student.scss";
import { AccountBox, AccountTree } from "@mui/icons-material";

const Student = () => {
  const { pathname: url } = useLocation();
  useEffect(() => {
    const navLinks = document.getElementsByClassName("listBar");
    for (let i = 0; i < navLinks.length; i += 1) {
      if (navLinks[i].classList.contains("active")) {
        navLinks[i].childNodes[0].classList.add("isActive");
      } else {
        navLinks[i].childNodes[0].classList.remove("isActive");
      }
    }
  }, [url]);

  const homeClick = () => {
    window.location.href = "/student/Project";
  };

  const userInfo = {
    userName: "Nguyễn Trần Anh Thắng",
    userEmail: "anhthang2529@gmail.com",
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row'
    }}>
      <Box className='sideBar' sx={{
        height: '100vh',
        flex: '1',
        background: '#F6E6E6',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '25px'
      }}>
        <img
          src={logoDTU}
          alt="Logo"
          width="80%"
          style={{
            marginTop: "50px",
            cursor: "pointer",
          }}
          onClick={homeClick}
        />
        <Box
          sx={{ height: "1.5px", width: "65%", background: "#707070" }}
        ></Box>
        <Box
          className="sideBarContain"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
            width: "80%",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "100%",
            }}
          >
            <NavLink to="/student/Project" className="listBar">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                  height: "50px",
                  paddingLeft: "10px",
                }}
              >
                <AccountTree fontSize="large" sx={{ color: "#D82C2C" }} />
                <Typography
                  sx={{
                    color: "#D82C2C",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Project
                </Typography>
              </Box>
            </NavLink>

            <NavLink to="/student/Profile" className="listBar">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                  height: "50px",
                  paddingLeft: "10px",
                }}
              >
                <AccountBox fontSize="large" sx={{ color: "#D82C2C" }} />
                <Typography
                  sx={{
                    color: "#D82C2C",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Profile
                </Typography>
              </Box>
            </NavLink>
          </Box>

          <Box
            className="accountBox"
            sx={{
              borderTop: "1px Solid #707070",
              marginBottom: "40px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "10px",
              gap: "3px",
            }}
          >
            <Box className="avatar">
              <img className="avatar" src={avatar} alt="avatar" width="50px" />
            </Box>
            <Box
              className="infor"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box className="userName">
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {userInfo.userName}
                </Typography>
              </Box>
              <Box className="userEmail">
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {userInfo.userEmail}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{
        flex: '5'
      }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Student;
