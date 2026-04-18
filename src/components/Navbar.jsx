import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
  const {user}=use(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-4 text-accent">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/Career">CAREER</NavLink>
      </div>
      <div className="login-btn flex gap-2 items-center">
        <img className="h-9" src={userIcon} alt="" />
        <Link to='/auth/login' className="btn btn-primary px-4">LOG IN</Link>
      </div>
    </div>
  );
};

export default Navbar;
