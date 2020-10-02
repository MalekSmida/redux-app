import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Login from "./features/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./features/Login/userSlice";

function App() {
  const user = useSelector(selectUser);

  return <div className="app">{user ? <Counter /> : <Login />}</div>;
}

export default App;
