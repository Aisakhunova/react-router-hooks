import React, { useState } from "react";
import MyContext from "./MyContext";
import ChildComponent from "./ChildComponent";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";
import classes from "./pages.module.css";

export default function Context() {
  const [lightColor, setLightColor] = useState(true);
  function toggle() {
    setLightColor((prevValue) => !prevValue);
  }

  return (
    <div className={classes.Context}>
      <MyContext.Provider value={lightColor}>
        <ChildComponent1></ChildComponent1>
      </MyContext.Provider>

      <button
        className={classes.MyButton}
        onClick={toggle}
        style={{ marginTop: "30px" }}
      >
        Change
      </button>
    </div>
  );
}
