import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Student from './Component/Template/Student/Student.jsx'
import Check from './Component/Check/Check.jsx'
import Profile from './Pages/Student/Profile/Profile.jsx'
import Project from './Pages/Student/Project/Project.jsx'
import ProposeIdeaStudent from './Pages/Student/ProposeIdea/ProposeIdeaStudent.jsx'
import ProposeIdeaDetailStudent from './Pages/Student/ProposeIdeaDetail/ProposeIdeaDetailStudent.jsx'
import Univer from './Component/Template/Univer/Univer.jsx'
import InformationProject from "./Pages/Student/InformationProject/InformationProject.js";
import CreateProject from "./Pages/Student/CreateProject/CreateProject.jsx";
import MentorOfFaculty from "./Pages/Faculty/Mentor/Mentor.jsx";
import StudentOfFaculty from "./Pages/Faculty/Student/Student.jsx";
import ProjectOfFaculty from "./Pages/Faculty/Project/Project.jsx";
import ProfileOfFaculty from "./Pages/Faculty/Profile/Profile.jsx";
import DetailTopic from "./Pages/Faculty/DetailTopic/DetailTopic.jsx";
import Admin from "./Component/Template/Admin/Admin.jsx";
import AddAccount from "./Pages/Admin/AddAccount/AddAccount.jsx";
import HomePage from "./Pages/Admin/HomePage/HomePage.jsx";
import EditAccount from './Pages/Admin/EditAccount/EditAccount.jsx'
import Page404 from "./Pages/NotFound/NotFound.jsx";
import Faculty from "./Component/Template/Faculty/Faculty.jsx";
import Dashboard from './Pages/Univer/Dashboard/Dashboard.jsx'
import DashboardFaculty from './Pages/Univer/Dashboard/DashboardFaculty/DashboardFaculty.jsx'
import DashboardProject from './Pages/Univer/Dashboard/DashboardProject/DashboardProject.jsx'
import DashboardStudent from './Pages/Univer/Dashboard/DashboardStudents/DashboardStudent.jsx'
import Dashboard_Detail from './Pages/Univer/Dashboarddetails/Dashboard_Detail.jsx'
import ListProjects from './Pages/Univer/Dashboarddetails/ListProjects/index.js'
import InforProject from './Pages/Univer/Dashboarddetails/InfoProject/InforProject.jsx'
import StickyHeadTable from './Pages/Univer/Dashboarddetails/ListFaculty/StickyHeadTable.jsx'
import Mentor from './Component/Template/Mentor/Mentor.jsx'
// import MentorHomepage from './Pages/Mentor/MentorHomePage/MentorHomePage.jsx'
import MentorHomepage from './Pages/Mentor/MentorHomepage/MentorHomepage.jsx'
import MentorProposeIdea from './Pages/Mentor/MentorProposeIdea/MentorProposeIdea.jsx'
import MentorProject from './Pages/Mentor/MentorProject/MentorProject.jsx'
import MentorWaitting from './Pages/Mentor/MentorWaitting/MentorWaitting.jsx'
import MentorInformation from './Pages/Mentor/MentorInformation/MentorInformation.jsx'
import UniverCetificate from './Pages/Univer/UniverCetificate/UniverCetificate.jsx'
// import Approve from './Pages/Faculty/Approve/Approve.jsx'
import AcceptProject from './Pages/Faculty/AcceptProject/AcceptProject.jsx'
import MentorProjectInformation from './Pages/Mentor/MentorProjectInformation/MentorProjectInformation.jsx'
import UnconfirmedTopicForMentor from './Pages/Mentor/UnconfirmedTopicForMentor/UnconfirmedTopicForMentor.jsx'
import MentorDetailIdea from './Pages/Mentor/MentorDetailIdea/MentorDetailIdea.jsx'
import ListProposeIdea from './Pages/Mentor/ListProposeIdea/ListProposeIdea.jsx'
import MyProposeIdea from './Pages/Mentor/MyProposeIdea/MyProposeIdea.jsx'
import MentorWaittingInformation from './Pages/Mentor/MentorWaittingInformation/MentorWaittingInformation.jsx'
import MentorEditIdea from './Pages/Mentor/MentorEditIdea/MentorEditIdea.jsx'
import ReceiveProposeIdea from './Pages/Student/ReceiveProposeIdea/ReceiveProposeIdea.jsx'
import TopicsUnconfirm from './Pages/Faculty/TopicsUnconfirm/TopicsUnconfirm.jsx'
import FacultyUnconfirmTopicDetail from './Pages/Faculty/FacultyUnconfirmTopicDetail/FacultyUnconfirmTopicDetail.jsx'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const color =
  createTheme({
    palette: {
      white: '#FFFFFF',
      red: '#D82C2C',
      palePink: '#F6E8E8',
      green: '#41B06E',
      navyBlue: '#1e385d',
      slateBlue: '#718199',
      coralRed: '#ff6666',
      silver: '#999999',
      grey: '#707070',
      ashGrey: '#818181'
    },
  })

const router = createBrowserRouter([
  { path: '*', element: <Page404 /> },
  {
    path: "/",
    element: <Check />,
  },
  {
    element: <Admin />,
    children: [
      {
        path: "/admin/homepage",
        element: <HomePage />,
      },
      {
        path: "/admin/addaccount",
        element: <AddAccount />,
      },
      {
        path: "/admin/editaccount",
        element: <EditAccount />,
      },
    ],
  },
  {
    element: <Student />,
    children: [
      {
        path: '/student/project',
        element: <Project />
      },
      {
        path: '/student/proposeidea',
        element: <ProposeIdeaStudent />
      },
      {
        path: '/student/proposeidea/:id',
        element: <ProposeIdeaDetailStudent />
      },
      {
        path: '/student/profile',
        element: <Profile />
      },
      {
        path: "/student/project/informationProject/:id",
        element: <InformationProject />,
      },
      {
        path: "/student/project/createProject",
        element: <CreateProject />,
      },
      {
        path: '/student/proposeidea/receiveproposeidea/:id',
        element: <ReceiveProposeIdea />
      },
    ]
  },
  //
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
        ]
      },
      {
        path: '/Univer/DashboadDetail',
        element: <Dashboard_Detail />,
        children: [
          {
            path: '/Univer/DashboadDetail/ListFaculty',
            element: <StickyHeadTable />
          },
          // {
          //   path: '/Univer/DashboadDetail/ListProject',
          //   element: <ListProjects />
          // },
          // {
          //   path: '/Univer/DashboadDetail/Inforproject',
          //   element: <InforProject />
          // },
          //
        ]
      },
      {
        path: '/Univer/Inforproject',
        element: <InforProject />
      },
      {
        path: '/Univer/ListProject',
        element: <ListProjects />
      },
      {
        path: '/Univer/Certificate',
        element: <UniverCetificate />
      }
    ]

  },
  {
    element: <Mentor />,
    children: [
      {
        path: '/Mentor/MentorHomepage',
        element: <MentorHomepage />,
        children: [
          {
            path: '/Mentor/MentorHomepage/MentorProject',
            element: <MentorProject />
          },
          {
            path: '/Mentor/MentorHomepage/MentorWaitting',
            element: <MentorWaitting />
          }
        ]
      },
      {
        path: '/Mentor/MentorProposeIdea',
        element: <MentorProposeIdea />
      },
      {
        path: '/Mentor/MentorInformation',
        element: <MentorInformation />
      },
      {
        path: '/Mentor/MentorProjectInformation/:id',
        element: <MentorProjectInformation />,
      },
      {
        path: '/Mentor/unconfirmedtopicformentor/:id',
        element: <UnconfirmedTopicForMentor />
      },
      {
        path: '/Mentor/listProposeIdea',
        element: <ListProposeIdea />
      },
      {
        path: '/Mentor/myProposeIdea',
        element: <MyProposeIdea />
      },
      {
        path: '/Mentor/MentorWaittingInformation',
        element: <MentorWaittingInformation />,
      },
      {
        path: '/Mentor/proposeidea/:id',
        element: <MentorDetailIdea />
      },
      {
        path: 'mentor/myproposeIdea/editidea/:id',
        element: <MentorEditIdea />
      }
    ]
  },
  {
    element: <Faculty />,
    children: [
      {
        path: "/faculty/mentor",
        element: <MentorOfFaculty />,
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
      {
        path: "/faculty/acceptproject",
        element: <AcceptProject />,
      },
      {
        path: "/faculty/topicUnconfirm",
        element: <TopicsUnconfirm />,
      },
      {
        path: "/faculty/topicUnconfirm/topicUnconfirmDetail/:id",
        element: <FacultyUnconfirmTopicDetail />,
      },
      {
        path: "/faculty/detailTopic",
        element: <DetailTopic />,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={color}>
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>
);
