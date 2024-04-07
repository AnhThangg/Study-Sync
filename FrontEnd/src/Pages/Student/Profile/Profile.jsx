import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
} from "@mui/material";
import { FileUpload, RecentActors } from "@mui/icons-material";

function Profile() {
  const [showAddress, setShowAddress] = useState(true);

  const toggleAddress = () => {
    setShowAddress(!showAddress);
  };

  const inforUser = {
    userName: "Duong Nguyen Cong Luan",
    studentCode: "26211236334",
    sex: "Male",
    dateOfBirth: "10/08/2002",
    email: "duongnguyencongluan@gmail.com",
  };

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
              {inforUser.userName}
            </Typography>
            <Typography>{inforUser.studentCode}</Typography>
            <Typography>{inforUser.sex}</Typography>
            <Typography>{inforUser.dateOfBirth}</Typography>
            <Typography>{inforUser.email}</Typography>
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
              <FileUpload fontSize="large" />
            </label>
            <input id="upload-file" type="file" style={{ display: "none" }} />
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

      {showAddress && (
        <Box
          className="address"
          sx={{
            display: "flex",
            padding: "30px 50px 20px 60px",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box
              className="address_Left"
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
              <Typography sx={{ fontWeight: "bold" }}>
                Email(Orther):
              </Typography>
            </Box>
            <Box
              className="address_Right"
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
      )}

      {/* Edit Address */}
      {!showAddress && (
        <Box className="editAddress">
          <Box
            sx={{
              display: "flex",
              padding: "30px 50px 20px 60px",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box
                className="address_Left"
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
                <Typography sx={{ fontWeight: "bo3ld" }}>Phone:</Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  Email(Orther):
                </Typography>
              </Box>
              <Box
                className="address_Right"
                sx={{
                  paddingLeft: "20px",
                  "& .MuiFormControl-root": {
                    marginBottom: "5px", // Khoảng cách giữa các input
                    width: "60%", // Độ rộng của input
                  },
                  "& .MuiInputBase-input, .MuiSelect-root": {
                    padding: "2px 0 0 5px", // Padding của input và select
                  },
                }}
              >
                <FormControl variant="outlined">
                  {/* <InputLabel htmlFor="outlined-adornment-address">
                    Address/Group/Village
                  </InputLabel> */}
                  <OutlinedInput
                    id="outlined-adornment-address"
                    // label="Address/Group/Village"
                    labelWidth={160}
                  />
                </FormControl>
                <FormControl variant="outlined">
                  {/* <InputLabel htmlFor="outlined-adornment-wards">
                    Wards
                  </InputLabel> */}
                  <Select native id="outlined-adornment-wards" >
                    <option aria-label="None" value="" />
                    <option value="ward1">Ward 1</option>
                    <option value="ward2">Ward 2</option>
                    <option value="ward3">Ward 3</option>
                  </Select>
                </FormControl>
                <FormControl variant="outlined">
                  <Select native id="outlined-adornment-wards">
                    <option aria-label="None" value="" />
                    <option value="ward1">Ward 1</option>
                    <option value="ward2">Ward 2</option>
                    <option value="ward3">Ward 3</option>
                  </Select>
                </FormControl>
                <FormControl variant="outlined">
                  <Select native id="outlined-adornment-wards">
                    <option aria-label="None" value="" />
                    <option value="ward1">Ward 1</option>
                    <option value="ward2">Ward 2</option>
                    <option value="ward3">Ward 3</option>
                  </Select>
                </FormControl>
                <FormControl variant="outlined">
                  <Select native id="outlined-adornment-wards">
                    <option aria-label="None" value="" />
                    <option value="ward1">Ward 1</option>
                    <option value="ward2">Ward 2</option>
                    <option value="ward3">Ward 3</option>
                  </Select>
                </FormControl>
                <FormControl variant="outlined">
                  <OutlinedInput
                    id="outlined-adornment-address"
                    // label="Address/Group/Village"
                    labelWidth={160}
                  />
                </FormControl>
                <FormControl variant="outlined">
                  <OutlinedInput
                    id="outlined-adornment-address"
                    // label="Address/Group/Village"
                    labelWidth={160}
                  />
                </FormControl>
              </Box>
            </Box>
          </Box>
        </Box>
      )}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={toggleAddress}
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
          {showAddress ? "Edit" : "Update"}
        </Button>
      </Box>
    </Box>
  );
}

export default Profile;
