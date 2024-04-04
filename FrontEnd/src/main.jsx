import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Student from "./Component/Template/Student/Student.jsx";
import Faculty from "./Component/Template/Faculty/Faculty.jsx";
import Check from "./Component/Check/Check.jsx";
import Profile from "./Pages/Student/Profile/Profile.jsx";
import Project from "./Pages/Student/Project/Project.jsx";
import InformationProject from "./Pages/Student/InformationProject/InformationProject.js";
import CreateProject from "./Pages/Student/CreateProject/CreateProject.jsx";
import Mentor from "./Pages/Faculty/Mentor/Mentor.jsx";
import StudentOfFaculty from "./Pages/Faculty/Student/Student.jsx";
import ProjectOfFaculty from "./Pages/Faculty/Project/Project.jsx";
import ProfileOfFaculty from "./Pages/Faculty/Profile/Profile.jsx";
import Admin from "./Component/Template/Admin/Admin.jsx";
import AddAccount from "./Pages/Admin/AddAccount/AddAccount.jsx";
import HomePage from "./Pages/Admin/HomePage/HomePage.jsx";
import Page404 from "./Pages/NotFound/NotFound.jsx";


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
    ],
  },
  {
    element: <Student />,
    children: [
      {
        path: "/student/project",
        element: <Project />,
      },
      {
        path: "/student/profile",
        element: <Profile />,
      },
      {
        path: "/student/informationProject",
        element: <InformationProject />,
      },
      {
        path: "/student/createProject",
        element: <CreateProject />,
      },
    ],
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
