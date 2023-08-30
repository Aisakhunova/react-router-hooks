import React, { useReducer, useState } from "react";
import classes from "./pages.module.css";
export default function ToDoList() {
  const ACTIONS = {
    ADD_TO_DO: "add",
    DELETE_TO_DO: "delete",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.DELETE_TO_DO:
        state.filter((el) => el.id !== action.payload.id);
        return state.filter((el) => el.id !== action.payload.id);
      case ACTIONS.ADD_TO_DO:
        action.payload.clarify("");
        return [
          ...state,
          { id: state.length + 1, content: action.payload.content },
        ];
    }
  };

  const [state, dispatch] = useReducer(reducer, [
    { id: 1, content: "Wake up at 7 am" },
    { id: 2, content: "Have a shower" },
    { id: 3, content: "Have breakfast" },
  ]);

  const [newTask, setNewTask] = useState("");
  return (
    <div className={classes.ToDoList}>
      <div className={classes.InputForm}>
        <input
          className={classes.MyInput}
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        ></input>
        <button
          className={classes.MyButton}
          style={{ margin: "10px" }}
          onClick={() =>
            dispatch({
              type: "add",
              payload: { content: newTask, clarify: setNewTask },
            })
          }
        >
          Add
        </button>
      </div>
      <hr style={{ margin: "25px 20px" }}></hr>
      {state.map((el) => {
        return (
          <div className={classes.task} key={el.id}>
            <h3>
              {el.id}. {el.content}
            </h3>
            <button
              className={classes.MyButton}
              onClick={() =>
                dispatch({ type: "delete", payload: { id: el.id } })
              }
            >
              Delete{" "}
            </button>
          </div>
        );
      })}
    </div>
  );
}
