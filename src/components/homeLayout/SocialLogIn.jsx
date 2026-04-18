import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogIn = () => {
  return (
    <div>
      <h2 className="font-bold">LogIn With</h2>
      <div className=" space-y-2">
        <button className="btn btn-outline btn-secondary w-full">
          {" "}
          <FcGoogle size={25} />
          Login with Google
        </button>
        <button className="btn  btn-outline btn-primary w-full">
          {" "}
          <FaGithub size={25} />
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogIn;
