import {
    createBrowserRouter,
  } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout"
import Root from "../layout/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomePage from "../pages/HomePage";
import PatientDetails from "../pages/dashboard/admin/PatientDetails";
import DietChart from "../pages/dashboard/admin/DietChart";
import InnerPantry from "../pages/dashboard/admin/InnerPantry";
import TrackMeal from "../pages/dashboard/admin/TrackMeal";
import FoodPreparetion from "../pages/dashboard/PantryMan/FoodPreparetion";
import DeliveryPerson from "../pages/dashboard/PantryMan/DeliveryPerson";
import Status from "../pages/dashboard/PantryMan/Status";
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

        },
        {
          path: "/dashboard/dietChart",
          element: <DietChart></DietChart>

        },
        {
          path: "/dashboard/pantry",
          element: <InnerPantry></InnerPantry>

        },
        {
          path: "/dashboard/trackMeal",
          element: <TrackMeal></TrackMeal>

        },
        // inner pantry route
        {
          path: "/dashboard/mealPreparetion",
          element: <FoodPreparetion></FoodPreparetion>
        },
        {
          path: "/dashboard/DeliveryPerson",
          element: <DeliveryPerson></DeliveryPerson>
        },
        {
          path: "/dashboard/DeliveryStatus",
          element: <Status></Status>
        }
      ]
      
    },
   
  ]);