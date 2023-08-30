import React from "react";
import classes from "./pages.module.css";
import ChildComponent3 from "./ChildComponent3";

export default function ChildComponent2() {
  return (
    <div className={classes.Box2} style={{ color: "white" }}>
      <ChildComponent3></ChildComponent3>
    </div>
  );
}
