import { Outlet } from "react-router-dom";


const Root = () => {
 
  return (
    <div className="bg-gray-300 min-h-screen">
      <div>
        <h1 className="text-5xl font-bold mx-auto text-center italic  pt-28 ">
          Hospital Food Management
        </h1>
      </div>
<div>
  <Outlet></Outlet>
</div>
     
    </div>
  );
};

export default Root;
