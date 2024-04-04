import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Student from './Component/Template/Student/Student.jsx'
import Check from './Component/Check/Check.jsx'
import Profile from './Pages/Student/Profile/Profile.jsx'
import Project from './Pages/Student/Project/Project.jsx'
import Univer from './Component/Template/Univer/Univer.jsx'
import InformationProject from "./Pages/Student/InformationProject/InformationProject.js";
import CreateProject from "./Pages/Student/CreateProject/CreateProject.jsx";
import Mentor from "./Pages/Faculty/Mentor/Mentor.jsx";
import StudentOfFaculty from "./Pages/Faculty/Student/Student.jsx";
import ProjectOfFaculty from "./Pages/Faculty/Project/Project.jsx";
import ProfileOfFaculty from "./Pages/Faculty/Profile/Profile.jsx";
import Faculty from "./Component/Template/Faculty/Faculty.jsx";
import Dashboard from './Pages/Univer/Dashboard/Dashboard.jsx'
import DashboardFaculty from './Pages/Univer/Dashboard/DashboardFaculty/DashboardFaculty.jsx'
import DashboardProject from './Pages/Univer/Dashboard/DashboardProject/DashboardProject.jsx'
import DashboardStudent from './Pages/Univer/Dashboard/DashboardStudents/DashboardStudent.jsx'
import Dashboard_Detail from './Pages/Univer/Dashboarddetails/Dashboard_Detail.jsx'
import ListProjects from './Pages/Univer/Dashboarddetails/ListProjects/index.js'
import InforProject from './Pages/Univer/Dashboarddetails/InfoProject/InforProject.jsx'
import StickyHeadTable from './Pages/Univer/Dashboarddetails/ListFaculty/StickyHeadTable.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Check />,
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
      },
      {
        path: "/student/informationProject",
        element: <InformationProject />,
      },
      {
        path: "/student/createProject",
        element: <CreateProject />,
      },
    ]
  },
  {
    element: <Univer />,
    children: [
      {
        path: '/Univer/Dashboard',
        element: <Dashboard />,
        children: [
          {
            path: '/Univer/Dashboard/Faculty',
            element: <DashboardFaculty />
          },
          {
            path: '/Univer/Dashboard/Project',
            element: <DashboardProject />
          },
          {
            path: '/Univer/Dashboard/Students',
            element: <DashboardStudent />
          }
          //
        ]
      },
      {
        path: '/Univer/DashboadDetail',
        element: <Dashboard_Detail />,
        children: [
          {
            path: '/Univer/DashboadDetail/Project',
            element: <ListProjects />
          },
          {
            path: '/Univer/DashboadDetail/Inforproject',
            element: <DashboardProject />
          },
          //
        ]
      },
      {
        path: '/Univer/Certificate',
        element: <div>Certificate</div>
      }
      //
    ]
  },
  {
    element: <Faculty />,
    children: [
      {
        path: "/faculty/mentor",
        element: <Mentor />,
      },
      {
        path: "/faculty/student",
        element: <StudentOfFaculty />,
      },
      {
        path: "/faculty/project",
        element: <ProjectOfFaculty />,
      },
      {
        path: "/faculty/profile",
        element: <ProfileOfFaculty />,
      },
      //
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
