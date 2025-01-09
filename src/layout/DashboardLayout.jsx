import { NavLink, Outlet } from "react-router-dom";
import { FaChartPie } from "react-icons/fa";
import { FaBedPulse } from "react-icons/fa6";
import { ImSpinner9 } from "react-icons/im";
import { MdNoMeals } from "react-icons/md";
import { Button, Divider } from "@mui/material";
import { CgLogOut } from "react-icons/cg";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const { logOut } = useAuth();
  return (
    <div className="flex">
      {/* dash menu bar */}
      <div className="w-64 h-auto lg:min-h-screen pl-2  pt-5 bg-sky-900 text-gray-300">
        <div className="mx-auto text-left mt-7">
          <h1 className=" lg:text-3xl font-bold bg-"> Hospitals Meals</h1>
          <p className="text-sm w-full flex  items-stretch">
            Food Manager System
          </p>
        </div>


        <div>

        </div>
        

        {/*  */}
        <ul className="space-y-4 text-lg font-semibold mt-16">
        <Divider className=" bg-white " />
          <li>
            <NavLink
              to="/dashboard/patient"
              className=" flex flex-col lg:flex-row lg:items-center gap-2 pl-2"
            >
              <FaBedPulse className="size-5"></FaBedPulse>  <span>Patient Details</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/AllParcel"
              className=" flex flex-col lg:flex-row lg:items-center gap-2 pl-2"
            >
              <FaChartPie className="size-5" ></FaChartPie>  <span>Diet Chart</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/AllParcel"
              className=" flex flex-col lg:flex-row lg:items-center gap-2 pl-2"
            >
              <ImSpinner9 className="size-5"></ImSpinner9>  <span>Inner Pantry</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/AllParcel"
              className=" flex flex-col lg:flex-row lg:items-center gap-2 pl-2"
            >
              <MdNoMeals className="size-5"></MdNoMeals>  <span>Track Meal</span>
            </NavLink>
          </li>




          <Divider className=" bg-white " />
          <li className="mx-auto text-center pt-6">
            
            <Button
            variant="outlined"
            color="while"
            onClick={()=>logOut()}
              to="/dashboard/AllParcel"
              className="flex flex-col lg:flex-row lg:items-center gap-2 "
            >
              <CgLogOut className="size-6"></CgLogOut>  <span> LogOut</span>
            </Button>
          </li>

        </ul>


      </div>
      {/* dash details */}
      <div className="flex-1 lg:p-5">
        <Outlet></Outlet>

      </div>
    </div>
  );
};

export default DashboardLayout;
