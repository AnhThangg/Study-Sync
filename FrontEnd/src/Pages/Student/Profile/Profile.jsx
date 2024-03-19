import {
  Box,
  Icon,
  Typography,
  Input,
  IconButton,
  Button,
} from "@mui/material";
import React from "react";
import { FileUpload, RecentActors } from "@mui/icons-material";
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
          className="Information_User"
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
            <Typography sx={{ fontWeight: "bold" }}>User name:</Typography>
            <Typography sx={{ fontWeight: "bold" }}>Student code:</Typography>
            <Typography sx={{ fontWeight: "bold" }}>Sex:</Typography>
            <Typography sx={{ fontWeight: "bold" }}>Date of birth:</Typography>
            <Typography sx={{ fontWeight: "bold" }}>Email(DTU):</Typography>
          </Box>
          <Box
            className="Infor_Right"
            sx={{
              paddingLeft: "20px",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>
              Duong Nguyen Cong Luan
            </Typography>
            <Typography>26211236334</Typography>
            <Typography>Male</Typography>
            <Typography>10/08/2002</Typography>
            <Typography>duongncongluan@gmail.com</Typography>
          </Box>
        </Box>
        <Box
          className="Avatar_User"
          sx={{
            display: "flex",
            justifyContent: "center",
            marginLeft: "auto",
            paddingRight: "15%",
          }}
        >
          <Box
            sx={{
              border: "5px solid #D82C2C",
              alignItems: "center",
              width: "155px",
              height: "147px",
              backgroundColor: "#D9D9D9",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <label htmlFor="upload-file">
              <IconButton
                component="span"
                aria-label="upload-picture"
                sx={{
                  width: "100px",
                  height: "100px",
                }}
              >
                <FileUpload fontSize="large" />
              </IconButton>
            </label>
            <Input id="upload-file" type="file" sx={{ display: "none" }} />
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
            <Typography sx={{ fontWeight: "bold" }}>City:</Typography>
            <Typography sx={{ fontWeight: "bold" }}>Nation:</Typography>
            <Typography sx={{ fontWeight: "bold" }}>Phone:</Typography>
            <Typography sx={{ fontWeight: "bold" }}>Email(Orther):</Typography>
          </Box>
          <Box
            className="Infor_Right"
            sx={{
              paddingLeft: "20px",
            }}
          >
            <Typography>
              Tổ 4, thôn Tân Hạnh, xã Hòa Phước, huyện Hòa vang, Tp Đà Nẵng
            </Typography>
            <Typography>Hòa Phước</Typography>
            <Typography>Hòa Vang</Typography>
            <Typography>Đà Nẵng</Typography>
            <Typography>Việt Nam</Typography>
            <Typography>0796053172</Typography>
            <Typography>duongnguyencongluan@gmail.com</Typography>
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
          }}
        >
          Update
        </Button>
      </Box>
    </Box>
  );
}

export default Profile;
