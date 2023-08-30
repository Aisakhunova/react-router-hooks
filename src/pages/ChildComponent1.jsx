import React from "react";
import classes from "./pages.module.css";
import ChildComponent2 from "./ChildComponent2";

export default function ChildComponent1() {
  return (
    <div className={classes.Box}>
      <ChildComponent2></ChildComponent2>
    </div>
  );
}
