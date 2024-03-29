import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Student from './Component/Template/Student/Student.jsx'
import Check from './Component/Check/Check.jsx'
import Profile from './Pages/Student/Profile/Profile.jsx'
import Project from './Pages/Student/Project/Project.jsx'

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
        element: <Project/>
      },
      {
        path: '/student/profile',
        element: <Profile />
      }
//
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
