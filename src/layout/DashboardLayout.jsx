import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaChartPie } from "react-icons/fa";
import { FaBedPulse } from "react-icons/fa6";
import { ImSpinner9 } from "react-icons/im";
import { MdNoMeals, MdViewCozy } from "react-icons/md";
import { Button, Divider } from "@mui/material";
import { CgLogOut } from "react-icons/cg";
import useAuth from "../hooks/useAuth";
import useUserData from "../hooks/useUSerData";
import { PiCookingPotDuotone } from "react-icons/pi";
import { GrDeliver } from "react-icons/gr";

const DashboardLayout = () => {
  const { logOut } = useAuth();
  const naviagte = useNavigate()
  const userData = useUserData()

  const userLogout = () => {
    logOut()
    naviagte('/')
  }
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




        <ul className="space-y-4 text-lg font-semibold mt-16">

          <Divider className=" bg-white " />
          {
            userData.role === 'admin' ?
              <>
                {/* admin route  */}
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
                    to="/dashboard/dietChart"
                    className=" flex flex-col lg:flex-row lg:items-center gap-2 pl-2"
                  >
                    <FaChartPie className="size-5" ></FaChartPie>  <span>Diet Chart</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/pantry"
                    className=" flex flex-col lg:flex-row lg:items-center gap-2 pl-2"
                  >
                    <ImSpinner9 className="size-5"></ImSpinner9>  <span>Inner Pantry</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/trackMeal"
                    className=" flex flex-col lg:flex-row lg:items-center gap-2 pl-2"
                  >
                    <MdNoMeals className="size-5"></MdNoMeals>  <span>Track Meal</span>
                  </NavLink>
                </li>
              </>
              :
              <>
                {/* inner pantry */}
                <li>
                  <NavLink
                    to="/dashboard/mealPreparetion"
                    className=" flex flex-col lg:flex-row lg:items-center gap-2 pl-2"
                  >
                    <PiCookingPotDuotone className="size-5"></PiCookingPotDuotone>  <span>Meal Preparerion</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/DeliveryPerson"
                    className=" flex flex-col lg:flex-row lg:items-center gap-2 pl-2"
                  >
                    <GrDeliver className="size-5"></GrDeliver>  <span>Delivery Person</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/DeliveryStatus"
                    className=" flex flex-col lg:flex-row lg:items-center gap-2 pl-2"
                  >
                    <MdViewCozy className="size-5"></MdViewCozy>  <span>Status </span>
                  </NavLink>
                </li>


              </>
          }












          <Divider className=" bg-white " />
          <li className="mx-auto text-center pt-6">

            <Button
              variant="outlined"
              color="while"
              onClick={userLogout}
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
