import { React, useState, useEffect } from 'react'
import {
  Button,
  Box,
  Typography,
  TextField,
  MenuItem,
  Input,
  IconButton,
  Snackbar,
  Alert
} from "@mui/material";
import { getDistricts, getProvinces, getWards } from '../../../api/unitVietNamApi';

const AddAccountUniver = () => {

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [province, setProvince] = useState();
  const [district, setDistrict] = useState();
  const [ward, setWard] = useState();
  const [userName, setUserName] = useState('');
  const [information, setInformation] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState('');
  const [isCheckAlert, setIsCheckAlert] = useState(false);

  useEffect(() => {
    getProvinces()
      .then(data => {
        setProvinces(data)
      })
      .catch(e => {
        console.log(e);
      })
  }, []);

  useEffect(() => {
    getDistricts(province?.code)
      .then(data => {
        setDistricts(data)
      })
      .catch(e => {
        console.log(e)
      })
  }, [province]);

  useEffect(() => {
    getWards(district?.code)
      .then(data => {
        setWards(data)
      })
      .catch(e => {
        console.log(e)
      })
  }, [district]);

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   file.preview = URL.createObjectURL(file)
  //   setSelectedFile(file);
  // };

  const checkTextField = () => {


    setIsCheckAlert(true);
    setTimeout(() => {
      setIsCheckAlert(false);
    }, 4000)
  }

  return (
    <Box className="container" sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '25px',
    }}>
      <Box className="containerTop" sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '5%',
      }}>
        <Box className="containerTopLeft" sx={{
          width: '60%',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <Box className="row" sx={{
            display: 'flex',
            flexDirection: 'row'
          }}>
            <Box className="rowLeft" sx={{
              width: '30%',
              display: 'flex',
              justifyContent: 'end'
            }}>
              <Typography sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '25px',
                fontWeight: 'bold',
                height: '40px',
                color: '#999',
              }}>
                Username:
              </Typography>
            </Box>
            <Box className="rowRight" sx={{
              width: '65%'
            }}>
              <TextField
                label='Enter Username'
                size='small'
                sx={{
                  width: '100%',
                }}
              />
            </Box>
          </Box>
          <Box className="row" sx={{
            display: 'flex',
            flexDirection: 'row'
          }}>
            <Box className="rowLeft" sx={{
              width: '30%',
              display: 'flex',
              justifyContent: 'end'
            }}>
              <Typography sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '25px',
                fontWeight: 'bold',
                height: '40px',
                color: '#999',
              }}>
                Password:
              </Typography>
            </Box>
            <Box className="rowRight" sx={{
              width: '65%'
            }}>
              <TextField
                label='Enter Password'
                type='password'
                size='small'
                sx={{
                  width: '100%',
                }}
              />
            </Box>
          </Box>
          <Box className="row" sx={{
            display: 'flex',
            flexDirection: 'row'
          }}>
            <Box className="rowLeft" sx={{
              width: '30%',
              display: 'flex',
              justifyContent: 'end'
            }}>
              <Typography sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '25px',
                fontWeight: 'bold',
                height: '40px',
                color: '#999',
              }}>
                University Name:
              </Typography>
            </Box>
            <Box className="rowRight" sx={{
              width: '65%'
            }}>
              <TextField
                label='Enter University Name'
                size='small'
                sx={{
                  width: '100%',
                }}
              />
            </Box>
          </Box>
          <Box className="row" sx={{
            display: 'flex',
            flexDirection: 'row'
          }}>
            <Box className="rowLeft" sx={{
              width: '30%',
              display: 'flex',
              justifyContent: 'end'
            }}>
              <Typography sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '25px',
                fontWeight: 'bold',
                height: '40px',
                color: '#999',
              }}>
                Univer Code:
              </Typography>
            </Box>
            <Box className="rowRight" sx={{
              width: '65%'
            }}>
              <TextField
                label='Enter Univer Code'
                size='small'
                sx={{
                  width: '100%',
                }}
              />
            </Box>
          </Box>
          <Box className="row" sx={{
            display: 'flex',
            flexDirection: 'row'
          }}>
            <Box className="rowLeft" sx={{
              width: '30%',
              display: 'flex',
              justifyContent: 'end'
            }}>
              <Typography sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '25px',
                fontWeight: 'bold',
                height: '40px',
                color: '#999',
              }}>
                Univer Email:
              </Typography>
            </Box>
            <Box className="rowRight" sx={{
              width: '65%'
            }}>
              <TextField
                label='Enter Univer Email'
                type='email'
                size='small'
                sx={{
                  width: '100%',
                }}
              />
            </Box>
          </Box>
          <Box className="row" sx={{
            display: 'flex',
            flexDirection: 'row'
          }}>
            <Box className="rowLeft" sx={{
              width: '30%',
              display: 'flex',
              justifyContent: 'end'
            }}>
              <Typography sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '25px',
                fontWeight: 'bold',
                height: '40px',
                color: '#999',
              }}>
                Univer Phone:
              </Typography>
            </Box>
            <Box className="rowRight" sx={{
              width: '65%'
            }}>
              <TextField
                label='Enter Univer Phone'
                size='small'
                sx={{
                  width: '100%',
                }}
              />
            </Box>
          </Box>

          <Box className="row" sx={{
            display: 'flex',
            flexDirection: 'row'
          }}>
            <Box className="rowLeft" sx={{
              width: '30%',
              display: 'flex',
              justifyContent: 'end'
            }}>
              <Typography sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '25px',
                fontWeight: 'bold',
                height: '40px',
                color: '#999',
              }}>
                Province:
              </Typography>
            </Box>
            <Box className="rowRight" sx={{
              width: '65%'
            }}>
              <TextField
                label='Select Province'
                size='small'
                select
                sx={{
                  width: '100%',
                }}
              >
                {provinces.map((option) => (
                  <MenuItem
                    key={option.code}
                    value={option.code}
                    onClick={() => {
                      setProvince({
                        code: option.code,
                        name: option.name_with_type
                      })
                    }}
                  >
                    {option.name_with_type}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Box>

          <Box className="row" sx={{
            display: 'flex',
            flexDirection: 'row'
          }}>
            <Box className="rowLeft" sx={{
              width: '30%',
              display: 'flex',
              justifyContent: 'end'
            }}>
              <Typography sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '25px',
                fontWeight: 'bold',
                height: '40px',
                color: '#999',
              }}>
                District:
              </Typography>
            </Box>
            <Box className="rowRight" sx={{
              width: '65%'
            }}>
              <TextField
                label='Select District'
                size='small'
                select
                sx={{
                  width: '100%',
                }}
              >
                {districts.map((option) => (
                  <MenuItem
                    key={option.code}
                    value={option.code}
                    onClick={() => {
                      setDistrict({
                        code: option.code,
                        name: option.name_with_type
                      })
                    }}
                  >
                    {option.name_with_type}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Box>

          <Box className="row" sx={{
            display: 'flex',
            flexDirection: 'row'
          }}>
            <Box className="rowLeft" sx={{
              width: '30%',
              display: 'flex',
              justifyContent: 'end'
            }}>
              <Typography sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '25px',
                fontWeight: 'bold',
                height: '40px',
                color: '#999',
              }}>
                Ward:
              </Typography>
            </Box>
            <Box className="rowRight" sx={{
              width: '65%'
            }}>
              <TextField
                label='Select Ward'
                size='small'
                select
                sx={{
                  width: '100%',
                }}
              >
                {wards.map((option) => (
                  <MenuItem
                    key={option.code}
                    value={option.code}
                    onClick={() => {
                      setWard({
                        code: option.code,
                        name: option.name_with_type
                      })
                    }}
                  >
                    {option.name_with_type}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Box>

          <Box className="row" sx={{
            display: 'flex',
            flexDirection: 'row'
          }}>
            <Box className="rowLeft" sx={{
              width: '30%',
              display: 'flex',
              justifyContent: 'end'
            }}>
              <Typography sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '25px',
                fontWeight: 'bold',
                height: '40px',
                color: '#999',
              }}>
                Address:
              </Typography>
            </Box>
            <Box className="rowRight" sx={{
              width: '65%'
            }}>
              <TextField
                label='Enter Address'
                size='small'
                sx={{
                  width: '100%',
                }}
              />
            </Box>
          </Box>


        </Box>
        <Box className="containerTopRight" sx={{
          // background: 'red',
          // width: "150px",
          // height: "150px",
          // border: "5px solid #D82C2C",
          // alignItems: "center",
        }}>
          {/* <label htmlFor="upload-file">
            <IconButton
              component="span"
              aria-label="upload-picture"
              sx={{
                width: "100%",
                // height: "100px",
              }}
            >
              <img src={selectedFile ? selectedFile?.preview : `http://localhost:2109/info/avatar/${information.accountId}_univer`} width={'100%'} alt="" />
            </IconButton>
          </label>
          <Input
            id="upload-file"
            type="file"
            sx={{ display: "none" }}
            onChange={handleFileChange}
          /> */}
        </Box>
      </Box>
      <Box className="containerBottom" sx={{
        width: '90%',
        // background: 'red'
        display: 'flex',
        justifyContent: 'end'
      }}>
        <Button className='addAccountUniver'
          onClick={checkTextField}
          sx={{
            border: '2px solid #D82C2C',
            width: '200',
            height: '50px',
            color: '#D82C2C',
            borderRadius: '20px',
            padding: '10px',
            '&:hover': {
              backgroundColor: '#D82C2C',
              color: '#FFF',
            },
          }}>
          Add Student
        </Button>
      </Box>
      <Snackbar open={isCheckAlert} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert variant="filled" severity="error" >{message}</Alert>
      </Snackbar>
    </Box>
  )
}

export default AddAccountUniver