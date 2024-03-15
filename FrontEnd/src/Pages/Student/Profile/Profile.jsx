import { Box, Icon, Typography } from "@mui/material";
import React from "react";
import RecentActorsIcon from "@mui/icons-material/RecentActors";

function Profile() {
  return (
    <Box sx={{ margin: "50px 0 0 50px" }}>
      <Box
        sx={{
          borderBottom: "1.5px solid #707070",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#D82C2C",
            fontWeight: "bold",
          }}
        >
          Profile
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          color: "#D82C2C",
          padding: "20px 0 0 20px",
        }}
      >
        <RecentActorsIcon fontSize="large" />
        <Typography
          sx={{
            marginLeft: "5px",
            fontWeight: "bold",
            fontSize: "30px",
          }}
        >
          PERSONAL INFORMATION
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          padding: "30px 50px 20px 60px",
        }}
      >
        <Box
          className="Information_User"
          sx={{
            width: "60%",
            display: "flex",
          }}
        >
          <Box
            className="Infor_Left"
            sx={{
              fontWeight: "bold",
              listStyle: "none",
              width: "30%",
              backgroundColor: "red",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <li>User name:</li>
            <li>Student code:</li>
            <li>Sex:</li>
            <li>Date of birth:</li>
            <li>Email(DTU):</li>
          </Box>
          <Box
            className="Infor_Right"
            sx={{
              width: "30%",
              backgroundColor: "#333",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>
              Duong Nguyen Cong Luan
            </Typography>
            <Typography>Coong Luanaj</Typography>
          </Box>
        </Box>
        <Box
          className="Avatar_User"
          sx={{
            width: "40%",
            backgroundColor: "blue",
          }}
        >
          Công
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;
