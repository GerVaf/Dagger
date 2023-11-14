import React from "react";
import { Link, NavLink } from "react-router-dom";
import { paths } from "../routes/Path";

const Sidebar = () => {
  return (
    <div className="p-5 flex flex-col gap-3">
      {/* Import Paths from Path , Active Link style in index.css*/}
      {paths.map((pt,i) => {
        return <NavLink key={i} to={pt.path} className='py-2 px-4 rounded'>{pt.title}</NavLink>;
      })}
    </div>
  );
};

export default Sidebar;
