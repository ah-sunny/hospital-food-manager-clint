import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
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

                {/*  */}
                <ul className="space-y-1 mt-10">
                    <li>
                        <NavLink
                            to="/dashboard/AllParcel"
                            className=" flex flex-col lg:flex-row lg:items-center gap-2 pl-2"
                        >
                            All Parcel
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/All-Delivery-Man"
                            className=" flex flex-col lg:flex-row lg:items-center gap-2 pl-2"
                        >
                            All Delivery man
                        </NavLink>
                    </li>
                    {/*    // Admin Dashboard    //   className={isAdmin ? 'block' : 'hidden'}*/}
                </ul>

                {/* dash details */}
                <div className="flex-1 lg:p-5">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
