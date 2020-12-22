import React from "react";
import app from "firebase/firebaseIndex";

const LogOut = () => {
  return (
    <>
      <h1>Log Out</h1>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </>
  );
};

export default LogOut;
