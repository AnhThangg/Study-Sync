import { React, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import {
  Box,
  Icon,
  Typography,
  Input,
  IconButton,
  Button,
  TextField
} from "@mui/material";
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import AssignmentTurnedIn from '@mui/icons-material/AssignmentTurnedIn';
import Reply from '@mui/icons-material/Reply';
import { getProposeIdea } from '../../../api/proposeIdeaApi'
import { getMentor } from '../../../api/mentor.Api'

const ProposeIdeaDetailStudent = () => {

  const navigate = useNavigate()
  const ideaCode = useParams().id;
  const [infoIdea, setInfoIdea] = useState();
  const [infoMentor, setInfoMentor] = useState();

  useEffect(() => {
    getProposeIdea(ideaCode)
      .then((data) => {
        setInfoIdea(data)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  useEffect(() => {
    getMentor(infoIdea?.mentorCode)
      .then((data) => {
        setInfoMentor(data)
      })
      .catch(e => {
        console.log(e)
      })
  }, [infoIdea])

  console.log(infoMentor)
  const formatContent = (text) => {
    if (typeof text !== 'string') {
      return [];
    }
    const lines = text.split('\n').map((line, index) => {
      return (
        <div key={index} style={{ textIndent: `20px`, marginBottom: `10px` }}>
          {line}
        </div>
      );
    });
    return lines;
  }


  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      margin: '0 0 20px 0'
    }}>
      <Box sx={{
        flex: '1'
      }}>
        <Typography sx={{
          marginLeft: '50px',
          marginTop: '56px',
          fontSize: '30px',
          fontWeight: 'bold',
          color: '#D82C2C'
        }}>
          Propose Idea
        </Typography>
      </Box>
      <Box className="proposeIdeaContain" sx={{
        flex: '5',
        display: 'flex',
        flexDirection: 'row'
      }}>
        <Box className="postIdea" sx={{
          flex: '1.5',
          display: 'flex',
          flexDirection: 'column',
          margin: "0 50px 0 50px",
          gap: '20px'
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#D82C2C",
                marginTop: "50px"
              }}
            >
              Idea Name
            </Typography>
            <Typography
              variant="h6"
              sx={{
                // fontWeight: "bold",
                color: "#707070",
                marginLeft: '10px',
                textIndent: '20px',
              }}
            >
              {infoIdea?.ideaName}
            </Typography>
          </Box>

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#D82C2C",
              }}
            >
              Idea Description
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "#707070",
                marginLeft: '10px',

              }}
            >
              {formatContent(infoIdea?.ideaDescription)}
            </Typography>
          </Box>

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#D82C2C",
              }}
            >
              Idea Goal Of The Subject
            </Typography>


            <Typography
              variant="h6"
              sx={{
                color: "#707070",
                marginLeft: '10px',

              }}
            >
              {formatContent(infoIdea?.ideaGoalSubject)}
            </Typography>
          </Box>

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#D82C2C",
              }}
            >
              Idea expected research products of the topic and applicability
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "#707070",
                marginLeft: '10px',

              }}
            >
              {formatContent(infoIdea?.ideaExpectedResearch)}
            </Typography>
          </Box>

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#D82C2C",
              }}
            >
              Other notes
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "#707070",
                marginLeft: '10px',

              }}
            >
              {formatContent(infoIdea?.otherNotes)}
            </Typography>
          </Box>
        </Box>

        <Box className="proposedProjects" sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: '1',
          marginTop: '100px'
        }}>
          <Box className="nameProjects" sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
            height: 'autoHeight',
            background: '#F6E6E6',
            borderRadius: '20px',
            paddingBottom: '20px'
          }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              margin: '20px 0 0 30px',
              gap: '15px'
            }}>
              <ContactEmergencyIcon fontSize="large" sx={{ color: '#D82C2C' }} />
              <Typography sx={{
                fontSize: '26px',
                fontWeight: 'bold',
                color: '#D82C2C'
              }}>
                Author of the topic
              </Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              margin: '30px 0 0 50px',
              gap: '5px'
            }}>
              <Box className="line" sx={{
                display: 'flex',
                flexDirection: 'column',
              }}>
                <Typography sx={{
                  color: '#D82C2C',
                  fontSize: '23px',
                  marginLeft: '10px',
                  fontWeight: 'bold'
                }}>Mentor Name: </Typography>
                <Typography sx={{
                  color: '#707070',
                  fontSize: '20px',
                  marginLeft: '30px',
                }}>{infoMentor?.mentorFullname} </Typography>
              </Box>

              <Box className="line" sx={{
                display: 'flex',
                flexDirection: 'column',
              }}>
                <Typography sx={{
                  color: '#D82C2C',
                  fontSize: '23px',
                  marginLeft: '10px',
                  fontWeight: 'bold'
                }}>Mentor Scientific Name: </Typography>
                <Typography sx={{
                  color: '#707070',
                  fontSize: '20px',
                  marginLeft: '30px',
                }}>{infoMentor?.mentorScientificName} </Typography>
              </Box>

              <Box className="line" sx={{
                display: 'flex',
                flexDirection: 'column',
              }}>
                <Typography sx={{
                  color: '#D82C2C',
                  fontSize: '23px',
                  marginLeft: '10px',
                  fontWeight: 'bold'
                }}>Degree: </Typography>
                <Typography sx={{
                  color: '#707070',
                  fontSize: '20px',
                  marginLeft: '30px',
                }}>{infoMentor?.mentorDegree} </Typography>
              </Box>

              <Box className="line" sx={{
                display: 'flex',
                flexDirection: 'column',
              }}>
                <Typography sx={{
                  color: '#D82C2C',
                  fontSize: '23px',
                  marginLeft: '10px',
                  fontWeight: 'bold'
                }}>Gender: </Typography>
                <Typography sx={{
                  color: '#707070',
                  fontSize: '20px',
                  marginLeft: '30px',
                }}>{infoMentor?.mentorSex === 0 ? 'Female' : 'Male'}</Typography>
              </Box>

              <Box className="line" sx={{
                display: 'flex',
                flexDirection: 'column',
              }}>
                <Typography sx={{
                  color: '#D82C2C',
                  fontSize: '23px',
                  marginLeft: '10px',
                  fontWeight: 'bold'
                }}>Email: </Typography>
                <Typography sx={{
                  color: '#707070',
                  fontSize: '20px',
                  marginLeft: '30px',
                }}>{infoMentor?.mentorEmail}</Typography>
              </Box>

              <Box className="line" sx={{
                display: 'flex',
                flexDirection: 'column',
              }}>
                <Typography sx={{
                  color: '#D82C2C',
                  fontSize: '23px',
                  marginLeft: '10px',
                  fontWeight: 'bold'
                }}>Phone Number: </Typography>
                <Typography sx={{
                  color: '#707070',
                  fontSize: '20px',
                  marginLeft: '30px',
                }}>{infoMentor?.mentorPhone}</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="proposeButton" sx={{
            display: 'flex',
            flexDirection: 'row',
            margin: '50px 0 0 0',
            alignItems: "center",
            justifyContent: "center",
            gap: '2%',
            width: '80%',
            padding: '10px',
          }}>
            <Button sx={{
              width: '38%',
              height: '45px',
              textTransform: 'none',
              background: '#1e385d',
              border: '1px solid #1e385d',
              borderRadius: '10px',
              fontSize: '20px',
              color: '#fff',
              padding: '0 20px',
              gap: '10px',
              '&:hover': {
                background: '#fff',
                color: '#1e385d',
              }
            }}>
              <Reply fontSize='large' />
              Back
            </Button>

            <Button
              onClick={()=>{navigate('/')}}
              sx={{
                width: '60%',
                height: '45px',
                textTransform: 'none',
                background: '#41B06E',
                border: '1px solid #41B06E',
                borderRadius: '10px',
                fontSize: '20px',
                color: '#fff',
                padding: '0 20px',
                gap: '10px',
                '&:hover': {
                  background: '#fff',
                  color: '#41B06E',
                }
              }}>
              <AssignmentTurnedIn fontSize='large' />
              Receive Ideas
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ProposeIdeaDetailStudent