import { React, useEffect, useState } from "react";
import { Box, Typography, Input, IconButton, Button } from "@mui/material";
import { RecentActors } from "@mui/icons-material";
import { getInfo } from "../../../api/infoApi"
import "./Profile.scss";

function Profile() {
  const information = {
    facultyName: "Khoa Cong  Nghe Phan Mem",
    facultyCode: "CMY-TPM",
    facultyEmail: "duongngcongluan@dtu.edu.vn",
    facultyAddress: "Da Nang, Viet Nam",
    facultyWard: "Lien Chieu",
    facultyDistrict: "Da Nang",
    facultyProvince: "Viet Nam",
    facultyPhone: "0796503172",
  };

  const [infoFaculty, setInfoFaculty] = useState({});

  useEffect(() => {
    getInfo()
      .then(data => {
        setInfoFaculty(data);
      })
      .catch((e) => {
        console.log(e);
      })
  }, [])

  const address = (addressString) => {
    if (addressString) {
        const parts = addressString.split(',').map(part => part.trim());
        const address = parts[0];
        const ward = parts[1];
        const district = parts[2];
        const province = parts[3];
        return { address, ward, district, province };
    }
}

  return (
    <Box
      className="container"
      sx={{
        width: "100%",
        height: "100vh",
        margin: "50px 0 0 50px",
      }}
    >
      <Box
        className="title"
        sx={{
          borderBottom: "1.5px solid #707070",
        }}
      >
        <Typography
          className="titleText"
          sx={{
            color: "#D82C2C",
            fontSize: "30px",
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
        <RecentActors fontSize="large" />
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
          className="Information_Faculty"
          sx={{
            display: "flex",
            marginLeft: "70px",
          }}
        >
          <Box
            className="Infor_Left"
            sx={{
              textAlign: "right",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Faculty name:</Typography>
            <Typography sx={{ fontWeight: "bold" }}>Faculty code:</Typography>
            <Typography sx={{ fontWeight: "bold" }}>Email (DTU):</Typography>
          </Box>
          <Box
            className="Infor_Right"
            sx={{
              paddingLeft: "20px",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>
              {infoFaculty?.facultyName}
            </Typography>
            <Typography>{infoFaculty?.facultyCode}</Typography>
            <Typography>{infoFaculty?.facultyEmail}</Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          borderBottom: "1.5px solid #707070",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#D82C2C",
            fontWeight: "bold",
            paddingLeft: "20px",
          }}
        >
          Current Address:
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
            display: "flex",
          }}
        >
          <Box
            className="Infor_Left"
            sx={{
              textAlign: "right",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>
              Address/Group/Village:
            </Typography>
            <Typography sx={{ fontWeight: "bold" }}>Wards:</Typography>
            <Typography sx={{ fontWeight: "bold" }}>District:</Typography>
            <Typography sx={{ fontWeight: "bold" }}>Province:</Typography>
            <Typography sx={{ fontWeight: "bold" }}>Phone:</Typography>
          </Box>
          <Box
            className="Infor_Right"
            sx={{
              paddingLeft: "20px",
            }}
          >
            <Typography>{infoFaculty?.facultyAddress}</Typography>
            <Typography>{address(infoFaculty?.facultyAddress)?.ward}</Typography>
            <Typography>{address(infoFaculty?.facultyAddress)?.district}</Typography>
            <Typography>{address(infoFaculty?.facultyAddress)?.province}</Typography>
            <Typography>{infoFaculty?.facultyPhone}</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          sx={{
            backgroundColor: "#D9D9D9",
            border: "5px solid #D82C2C",
            borderRadius: "20px",
            width: "150px",
            height: "50px",
            color: "#000",
            fontWeight: "bold",
            fontSize: "20px",
            "&:hover": {
              background: "#fff",
              color: "#D82C2C",
              border: "5px solid #999",
            },
          }}
        >
          Update
        </Button>
      </Box>
    </Box>
  );
}

export default Profile;
