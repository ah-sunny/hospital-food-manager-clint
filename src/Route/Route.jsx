import {
    createBrowserRouter,
  } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout"
import Root from "../layout/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomePage from "../pages/HomePage";
import PatientDetails from "../pages/dashboard/PatientDetails";
// import DashboardLayoutBasic from "../layout/DashboardLayout";

  export const router = createBrowserRouter([
   
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path:"/",
          element: <HomePage></HomePage>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <DashboardLayout></DashboardLayout> ,
      children: [
        {
          path: "/dashboard/patient",
          element: <PatientDetails></PatientDetails>

        }
      ]
      
    },
   
  ]);