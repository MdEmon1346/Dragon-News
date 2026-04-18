import React, { createContext, useState } from "react";
import app from "../Firebase/Firebase.config";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const  createUser=(email, password)=>{

  }
  const authData = {
    user,
    setUser,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
