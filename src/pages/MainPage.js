import React from "react";
import classes from "./pages.module.css";

export default function MainPage() {
  return (
    <div className={classes.ToDoList} style={{ marginTop: "40px" }}>
      <div className={classes.task}>
        In this project I tried to practice some features provided by React
      </div>
      <div className={classes.task}>
        1. UseEffect hook allowed me to calculate marja without a button, just
        by checking needed values
      </div>
      <div className={classes.task}>
        2. UseReducer hook helped to implement logic for To-Do list without
        initialzing a row of functions
      </div>
      <div className={classes.task}>
        3. React Router let building a single page application without
        refreshing
      </div>
      <div className={classes.task}>
        4. UseContext allowed not to use props and effectively use parent
        elements in children components
      </div>
    </div>
  );
}
