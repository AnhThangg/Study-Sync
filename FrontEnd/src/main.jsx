import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Student from './Component/Template/Student/Student.jsx'
import Check from './Component/Check/Check.jsx'
import Profile from './Pages/Student/Profile/Profile.jsx'
import Project from './Pages/Student/Project/Project.jsx'
import Mentor from './Component/Template/Mentor/Mentor.jsx'
// import MentorHomepage from './Pages/Mentor/MentorHomePage/MentorHomePage.jsx'
import MentorHomepage from './Pages/Mentor/MentorHomepage/MentorHomepage.jsx'
import MentorProposeIdea from './Pages/Mentor/MentorProposeIdea/MentorProposeIdea.jsx'
import MentorProject from './Pages/Mentor/MentorProject/MentorProject.jsx'
import MentorWaitting from './Pages/Mentor/MentorWaitting/MentorWaitting.jsx'
import MentorInformation from './Pages/Mentor/MentorInformation/MentorInformation.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Check />
  },
  {
    element: <Student />,
    children: [
      {
        path: '/student/project',
        element: <Project />
      },
      {
        path: '/student/profile',
        element: <Profile />
      }
      //
    ]

  },
  {
    element: <Mentor />,
    children: [
      {
        path: '/Mentor/MentorHomepage',
        element: <MentorHomepage/>,
        children: [
          {
          path: '/Mentor/MentorHomepage/MentorProject',
          element: <MentorProject/>
          },
          {
          path: '/Mentor/MentorHomepage/MentorWaitting',
          element: <MentorWaitting/>
          }
        ]
      },
      {
        path: '/Mentor/MentorProposeIdea',
        element: <MentorProposeIdea/>
      },
      {
        path: '/Mentor/MentorInformation',
        element: <MentorInformation/>
      }
      //
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
