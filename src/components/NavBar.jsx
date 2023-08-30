import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Book from "../pages/Book";
import Context from "../pages/Context";
import Marja from "../pages/Marja";
import ToDoList from "../pages/ToDoList";
import classes from "./NavBar.module.css";
export default function NavBar() {
  return (
    <div className={classes.NavBar}>
      <div className={classes.Links}>
        <Link className={classes.Link} to="/main">
          main{" "}
        </Link>
        <Link className={classes.Link} to="/marja">
          Marja{" "}
        </Link>
        <Link className={classes.Link} to="/context">
          Context{" "}
        </Link>

        <Link className={classes.Link} to="/todo">
          Todo{" "}
        </Link>
      </div>
      <Routes>
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/book" element={<Book />}></Route>
        <Route path="/context" element={<Context />}></Route>
        <Route path="/marja" element={<Marja />}></Route>
        <Route path="/todo" element={<ToDoList />}></Route>
      </Routes>
    </div>
  );
}
