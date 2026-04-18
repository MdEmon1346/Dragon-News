import React from "react";
import { NavLink } from "react-router";
import user from "../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav flex gap-4 text-accent">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/Career">CAREER</NavLink>
      </div>
      <div className="login-btn flex gap-2 items-center">
        <img className="h-9" src={user} alt="" />
        <button className="btn btn-primary px-4">LOG IN</button>
      </div>
    </div>
  );
};

export default Navbar;
