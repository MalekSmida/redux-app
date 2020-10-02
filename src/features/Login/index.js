import React from "react";
import { setUser, logout } from "./userSlice";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Account 🌎</h1>
      <button onClick={() => dispatch(setUser("malek"))}>Log in</button>
      {/* <button onClick={() => dispatch(logout())}>Log out</button> */}
    </div>
  );
}

export default Login;
