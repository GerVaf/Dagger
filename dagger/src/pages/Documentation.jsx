import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Documentation = () => {
  return (
    <div className="">
      {/* SideBar */}
      <div className="w-1/4 fixed">
        <Sidebar />
      </div>
      {/* Components will display Here */}
      <div className="w-3/4 ml-[25%] h-[640px] overflow-y-scroll scrollbar scrollbar-none bg-slate-200">{<Outlet />}</div>
    </div>
  );
};

export default Documentation;
