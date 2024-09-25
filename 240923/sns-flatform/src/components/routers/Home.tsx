import React from "react";
import { auth } from "./firebase";

const Home = () => {
  const logout = () => {
    auth.signOut();
  };
  return (
    <h1>
      <button onClick={logout}>Logout</button>
    </h1>
  );
};

export default Home;
