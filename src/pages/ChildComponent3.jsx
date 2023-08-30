import React, { useContext } from "react";
import classes from "./pages.module.css";
import MyContext from "./MyContext";

export default function () {
  const light = useContext(MyContext);

  const ThemeStyles = {
    backgroundColor: light ? "darkblue" : "rgb(209, 215, 22)",
    color: light ? "black" : "red",
    width: "70%",
    height: "70%",
  };
  return <div style={ThemeStyles}></div>;
}
