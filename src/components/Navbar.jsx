import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    console.log("user try to log out");
    logOut()
      .then(() => {
        alert("successfully log out");
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
        // An error happened.
      });
  };
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-4 text-accent">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/Career">CAREER</NavLink>
      </div>
      <div className="login-btn flex gap-2 items-center">
        <img className="h-9 w-12 rounded-full" src={`${user? user.photoURL:userIcon}`} alt="" />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-4">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-4">
            LOG IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
