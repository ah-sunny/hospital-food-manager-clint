import {
    createBrowserRouter,
  } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout"
import Root from "../layout/Root";
import Login from "../pages/Login";

  export const router = createBrowserRouter([
    {
      path: "/dashboard",
      element: <DashboardLayout></DashboardLayout> 
    },
    {
      path: "/",
      element: <Root></Root>
    },
    {
      path: '/login',
      element: <Login></Login>
    }
  ]);