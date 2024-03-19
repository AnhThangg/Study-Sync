import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Student from './Component/Template/Student/Student.jsx'
import Check from './Component/Check/Check.jsx'
import Profile from './Pages/Student/Profile/Profile.jsx'
import Project from './Pages/Student/Project/Project.jsx'
import Univer from './Component/Template/Univer/Univer.jsx'
import { Dashboard } from '@mui/icons-material'

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
    element: <Univer />,
    children: [
      {
        path: '/Univer/Dashboard',
        element: <Dashboard />
      },
      {
        path: '/Univer/DashboadDetail',
        element: <div>DashboadDetail</div>
      },
      {
        path: '/Univer/Certificate',
        element: <div>Certificate</div>
      }
      //
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
