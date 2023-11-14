import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-3 px-5 bg-slate-100 shadow sticky top-0">
      <nav className="flex justify-between items-center">
        <Link to={"/"} className="text-3xl">
          Dagger
        </Link>
        <Link to={"/docs"}>Docs</Link>
      </nav>
    </header>
  );
};

export default Header;
