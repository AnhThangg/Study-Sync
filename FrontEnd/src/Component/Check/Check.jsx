import React, { useEffect, useState } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Box, Typography, TextField, Button } from '@mui/material';
import logoDTU from '../../assets/Logo-DuyTan.png';
import imgLogin from '../../assets/imageLogin.png';
import {login} from '../../api/authApi';

const Check = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const onLogin = async () => {
    const res = login({
      userName,
      password
    });
    console.log(res);
  } 
  return (
    <Box className="contain" sx={{
      height: '100vh',
      width: '100%',
      background: '#F6E6E6',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Box className="loginForm" sx={{
        height: '560px',
        width: '80%',
        background: '#fff',
        boxShadow: '0 7px 25px rgb(0 0 0 / 29%)',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'row',
      }}>
        <Box className="leftForm" sx={{
          width: '50%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <Box className="loginFormLogo" sx={{
            width: '100%',
            height: 'auto',
            padding: '10px',
            borderBottom: '1.7px solid #ccc'
          }}>
            <img
              src={logoDTU}
              alt="Duy Tan University"
              height="77px" />
          </Box>
          <Box className="loginFormBox" sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px'
          }}>
            <Box className="loginFormInfo" sx={{
              width: '70%',
              display: 'flex',
              flexDirection: 'column',
              gap: '25px'
            }}>
              <Box className='loginFormInfoTitle' sx={{
                paddingTop: '40px',
              }}>
                <Typography sx={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#D82C2C'
                }}>Let’s Get Started!</Typography>
                <Typography sx={{
                  fontSize: '13px',
                  fontWeight: 'bold',
                  color: '#999'
                }}>Please fill the below details to login your account.</Typography>
              </Box>
              <Box className="loginFormInfoContain" sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}>
                <Box className="loginFormInfoUsername" sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '7px'
                }}>
                  <Typography sx={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#999'
                  }}>Username</Typography>
                  <TextField
                    label='Enter username'
                    type='text'
                    size='small'
                    onChange={(e)=>setUserName(e.target.value)}
                    sx={{
                      width: '380px'
                    }}
                  />
                </Box>
                <Box className="loginFormInfoPassword" sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '5px'
                }}>
                  <Typography sx={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#999'
                  }}>Pasword</Typography>
                  <TextField
                    label='Enter password'
                    type='password'
                    size='small'
                    onChange={(e)=>setPassword(e.target.value)}
                    sx={{
                      width: '380px'
                    }}
                  />
                </Box>
              </Box>


            </Box>
            <Button 
            onClick={onLogin}
            sx={{
              width: '200px',
              height: '40px',
              background: '#D82C2C',
              color: '#fff',
              marginTop: '28px',
              '&:hover': {
                background: '#fff',
                color: '#D82C2C',
                border: '1px solid #999'
              }
            }}>Login</Button>
          </Box>
        </Box>
        <Box className="rightForm" sx={{
          width: '50%',
          height: '100%',
          background: '#fcf6f6',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'end',
          borderRadius: '0 10px 10px 0'
        }}>
          <img width='90%' src={imgLogin} alt='Study-Sync' />
        </Box>
      </Box>
    </Box>
  )
}

export default Check