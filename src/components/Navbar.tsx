// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between p-4">
      <div className="">
        <h1 className="text-sm text-cyan-400 md:text-3xl font-semibold">
          civilHub
        </h1>
      </div>
      <div className="">
        <Link to={"/"}>Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;
